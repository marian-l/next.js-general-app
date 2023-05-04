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

async function saveTodo(todoInformation) {
    const response = await fetch('../api/todo', {
        method: 'POST',
        body: JSON.stringify(todoInformation)
    });

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    // promise
    return await response.json();
}

export default function formData(props) {
    let id = 0;
    let [todoList, setTodoList] = React.useState(
        [
            { id: getId(), item: "test", date: "10.04.23", due: "11.04.2023" },
            { id: getId(), item: "exam", date: "10.04.23", due: "11.04.2023" },
            { id: getId(), item: "interview", date: "10.04.23", due: "11.04.2023" }
        ]
    );

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data, e) => {
        console.log(data)
        try {
            e.preventDefault();
            savedTodo = await saveTodo(data); // alternativ formItem benutzen
            setTodoList([...todoList, savedTodo]); // was genau ist hier data?
            e.target.reset();
        } catch (err) {
            console.log(err)
        }
       }
    
    const removeByName = (nameToDelete) => {
        setTodoList(todoList => todoList.filter((name) => name.id !== nameToDelete));
    };

    function getId() {
        return id++;
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
                    >nothing currently
                </button>
                <button
                    name="undo"
                    onClick={() => {
                        localStorage.setItem('toDoList', "");
                        setTodoList(""); // replace with previous State
                    }}>Undo
                </button>
                <h1>TODOS:</h1>
                <div style={styles.list}>
                {props.initialTodos ? 
                    (props.initialTodos.map(w => <TodoItem deleteItem={removeByName} { ...w} />)) : "" // either todoList is mappable or not.
                } 
                </div>                
            </form>
        </div>
    )
}