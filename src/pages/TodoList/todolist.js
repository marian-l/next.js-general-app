import React from "react";

import styles from "../../styles/todolist.module.css"

export default function formData() {
    let data = null;
    let todoList = null;
    let tempTodo;

    // this is used in the StateVariable
    function getTodoList() {
        if (typeof window !== "undefined") {   
            data = localStorage.getItem('toDoList')
        }
        // console.log(JSON.parse(data))
        return data ? JSON.parse(data) : []
    }

    // reads out the todoList and stores it in the State Variable
    const [formData, setFormData] = React.useState(
        {
            item: "",
            date: "",
            due: ""
        }
    );    
    
    // this is the button function
    function handleAddTask(event) {
        try {
            tempTodo = getTodoList();
        } catch (e) {
            console.log(e)
            return;
        }
        if (typeof window !== "undefined") {
            todoList = JSON.stringify(tempTodo + formData)
            // localStorage.setItem('toDoList', todoList)
            localStorage.setItem('toDoList', todoList)
            console.log("JSON.parse(todoList) 27: ", {todoList})
        }
	}

    function handleChange(event) {
        const {name} = event.target;
        setFormData(prevFormData => {
            // console.log("prevFormData: ", {prevFormData})
            return {
                ...prevFormData,
                [name]: event.target.value
            }
        });
        // console.log(formData) works
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
                    value={formData ? formData.item : ""} 
                    required
                ></input>
                <input
                    onChange={handleChange}
                    placeholder="date"
                    type="text" 
                    name="date" 
                    value={formData ? formData.date : ""}
                />
                <input
                    onChange={handleChange} 
                    placeholder="due"
                    type="text" 
                    name="due" 
                    value={formData ? formData.due : ""}
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
                        setFormData("");
                    }}>Reset
                </button>
                
                {todoList && <p style={ {color: "white"} }>{JSON.stringify(todoList)}</p>}

            </form>
        </div>
    )
}