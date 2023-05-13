import React from "react";
// import styles from "../../styles/todoitem.module.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

const todoitem = ({id, item, date, due, checked, checkItem, deleteItem}) => {
    return (
        <div className="todoitem">
            <h2>{item}</h2>
            <p>{date}</p>
            <p>{due}</p>
            <label htmlFor="done">done?</label>
            <input id="done" checked={checked} 
                onClick={() => checkItem(id)}            
                type="checkbox"></input>
            <button onClick={() => deleteItem(id)}>  
                <FontAwesomeIcon key={id} icon={faTrash}/>
            </button>
        </div>    
    );
};
export default todoitem;

// key={`trash-${item}`}