import React from "react";
import { PrismaClient } from "@prisma/client";
import { useForm } from "react-hook-form";

// CSS
import styles from "../../styles/todolist.module.css"

// Components
import TodoItem from "./todoitem"


let prisma;

export async function getServerSideProps() {

    prisma = new PrismaClient();
    const prisma_tdlist = await prisma.TodoItem.findMany();
    return {
        props: {
            initialTodos: prisma_tdlist
        }
    }
}



async function updateDB(data, method) {
    console.log(method)
    const response = await fetch('../api/todo', {
        method: method,
        body: JSON.stringify(data)
    });
    
    console.log(response);
}

export default function formData(props) {
    // let [todoList, setTodoList] = React.useState([]);
    let [todoList, setTodoList] = React.useState(props.initialTodos)
    let previousTodoList = [];

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data, e) => {
        try {
            console.log(data);

            // prevent the default reaction of pressing onSubmit
            e.preventDefault();

            // save new Todo in DB
            savedTodo = await updateDB(data, 'CREATE')
            // TODO: update DB (unified method)
            
            // save the old todoList
            previousTodoList = todoList; 

            // update the Stateful Todolist
            setTodoList([...todoList, savedTodo]);

            // clear the input fields
            e.target.reset();
        } catch (err) {
            console.log(err)
        }
       }
    
       // TODO: handle the CREATION of deleted todoItem as well. 
    function handleUndoLastStepButton() {
        // find TodoItem which is not included in the recent todoList by comparison
        itemToDelete = previousTodoList.filter(x => !todoList.includes(x))
        itemToAdd = todoList.filter(x => !previousTodoList.includes(x))

        // 
        if (itemToAdd !== null) {
            updateDB(itemToAdd, 'CREATE')
        } else if (itemToDelete !== null) {
            updateDB(itemToDelete, 'DELETE')
        }

        // reset the Stateful Todolist
        setTodoList(previousTodoList); 

        // the local storage is a browsers cookie storage which can be used for key: value pairs.
        localStorage.setItem('toDoList', "");
    } 


    const removeByName = (idToDelete) => {
        // save the old todoList
        previousTodoList = todoList;

        // delete Todo in Stateful variable 
        // TODO: what is name?
        setTodoList(todoList => todoList.filter((name) => name.id !== idToDelete));
        
        updateDB(idToDelete, 'DELETE')
    };

    // sets the done field of a Todo Item
    const checkByName = (id, finished) => {
        // find the record that triggered the update ( unneccessary if component just passes it )
        let updatedRecord = todoList.filter(x => x.id === id);

        console.log(updatedRecord[0])
        
        // set todoList anew
        setTodoList(todoList.map(todo => todo.id === id ? {...todo, done: !todo.finished } : todo));
        
        // update the DB by sending the item
        updateDB([updatedRecord[0].id, finished], 'UPDATE')        
    }

    return (
        <div className={styles.formData}>
            <form 
                className={styles.todoform} 
                onSubmit={handleSubmit(onSubmit)}>
                <label>new Entry</label>
                <input
                    type="text" 
                    placeholder="item"
                    name="item" 
                    {...register("item", { required:true, maxLength: 50})}
                ></input>
                <input
                    type="text" 
                    placeholder="date"
                    name="date" 
                    {...register("date")}
                ></input>
                <input
                    type="text" 
                    placeholder="due"
                    name="due" 
                        {...register("due")}
                ></input>
                <button 
                    type="submit"
                    >Submit Button
                </button>

                <h1>TODOS:</h1>
                <div style={styles.list}>
                    {todoList ? (todoList.map(w => 
                        <TodoItem deleteItem={removeByName} checkItem={checkByName} { ...w} />
                        )) : "" } // either todoList is mappable or not.
                </div>                
            </form>
        </div>
    )
}

// <button
// name="undo"
// onClick={() => {                     
//     handleUndoLastStepButton()  
// }}>Undo Last Step
// </button>