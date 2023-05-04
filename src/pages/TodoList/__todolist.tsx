import React, { FormEventHandler } from "react";
import { PrismaClient } from "@prisma/client";


// CSS
import styles from "@/styles/todolist.module.css"

// Components
import TodoItem from "./todoitem"

const prisma = new PrismaClient();

interface Todo {
    id: number,
    item: string,
    date: string,
    due: string
}

export async function getServerSideProps() {
    const prisma_tdlist = await prisma.todoItem.findMany();
    return {
        props: {
            initialTodos: prisma_tdlist
        }
    }
}

export default function formData() {
    let id = 0;
    let [tempTodo, setTempTodo] = React.useState<Todo[]>(
        [
            { id: getId(), item: "test", date: "10.04.23", due: "11.04.2023" },
            { id: getId(), item: "exam", date: "10.04.23", due: "11.04.2023" },
            { id: getId(), item: "interview", date: "10.04.23", due: "11.04.2023" }
        ]
    );

    function getId() {
        return id++;
    }

    const removeByName = (nameToDelete: number) => {
        setTempTodo(todoList => todoList.filter((Todo: Todo) => Todo.id !== nameToDelete));
    };
    
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault() // stops rerendering which would cause all formData values to be overwritten by default
    }

    return (
        <div className={styles.formData}>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <label>new Entry</label>
                <input
                    placeholder="item"
                    type="text" 
                    name="item" 
 
                    required
                ></input>
                <input
                    placeholder="date"
                    type="text" 
                    name="date" 
                />
                <input
                    placeholder="due"
                    type="text" 
                    name="due"   
                />
                <button 
                    type="submit"
                    onClick={console.log}
                    >Submit
                </button>
                <button
                    name="reset"
                    onClick={() => {
                        localStorage.setItem('toDoList', "");
                        setTempTodo([]); // rerendering leads to the error that the map function cant be executed with ""
                    }}>Reset
                </button>
                <h1>TODOS:</h1>
                <div className={styles.list}>
                    {tempTodo ? 
                        (tempTodo.map(w => <TodoItem deleteItem={removeByName} { ...w} />)) : "" // either tempTodo is mappable or not.
                    } 
                </div>                
            </form>
        </div>
    )
}