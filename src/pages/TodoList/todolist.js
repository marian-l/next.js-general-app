import React from "react";

import styles from "../../styles/todolist.module.css"

import TodoItem from "./todoitem"

export default function formData() {
    let id = 0;
    let [tempTodo, setTempTodo] = React.useState(
        [
            { id: getId(), item: "test", date: "10.04.23", due: "11.04.2023" },
            { id: getId(), item: "exam", date: "10.04.23", due: "11.04.2023" },
            { id: getId(), item: "interview", date: "10.04.23", due: "11.04.2023" }
        ]
    );

        function getId() {
            return id++;
        }

    const removeByName = (nameToDelete) => {
        setTempTodo(todoList => todoList.filter((name) => name.id !== nameToDelete));
    };
    
    function handleSubmit(event) {
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
                    onClick={console.log("button clicked")}
                    >Submit
                </button>
                <button
                    name="reset"
                    onClick={() => {
                        localStorage.setItem('toDoList', "");
                        setTempTodo("");
                    }}>Reset
                </button>
                <h1>TODOS:</h1>
                <div style={styles.list}>
                    {tempTodo.map(w => <TodoItem deleteItem={removeByName} { ...w} />)}
                </div>                
            </form>
        </div>
    )
}