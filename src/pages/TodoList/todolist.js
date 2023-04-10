import React from "react";

import styles from "../../styles/todolist.module.css"

import { TodoItem }from "./todoitem"

export default function formData() {
    let data = null;
    let [tempTodo, setTempTodo] = React.useState(
        [
            { item: "test", date: Date.now(), due: "11.04.2023" }
            { item: "exam", date: Date.now(), due: "11.04.2023" }
            { item: "interview", date: Date.now(), due: "11.04.2023" }
        ]
    )

    const handleDelete = (name) => {
        const newTempTodo = tempTodo.filter((tempTodo) => tempTodo.item !== name)
        setTempTodo(newTempTodo);
    }; 
    
    // this is the button function
    function handleAddTask(event) {
        try {
            if (typeof window !== "undefined") {   

            }
            data = data ? JSON.parse(data) : []
        } catch (e) {
            console.log(e)
            return;
        }
        // localStorage-solution
        if (typeof window !== "undefined") {
//            localStorage.setItem('toDoList', todoList)
        }
	}

    function handleChange(event) {
        const {name} = event.target;
        setTempTodo(prevTodoList => {
            return {
                ...prevTodoList,
                [name]: event.target.value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault() // stops rerendering which would cause all formData values to be overwritten by default
    }

    return (
        <div className={styles.formData}>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <label>new Entry</label>
                <input
                    onChange={handleChange} 
                    placeholder="item"
                    type="text" 
                    name="item" 
 
                    required
                ></input>
                <input
                    onChange={handleChange}
                    placeholder="date"
                    type="text" 
                    name="date" 
                    
                />
                <input
                    onChange={handleChange} 
                    placeholder="due"
                    type="text" 
                    name="due" 
                    
                />
                <button 
                    type="submit"
                    onClick={handleAddTask}
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
                    {tempTodo.map((todo) => (
                        <TodoItem 
                        item={todo.item}
                        date={todo.date}
                        due={todo.due}
                        delete={() => handleDelete(todo.name)}
                        />
                    ))}
                </div>                
            </form>
        </div>
    )
}