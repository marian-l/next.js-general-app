import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const todoitem = ({id, item, date, due, finished, checkItem, deleteItem}) => {
    return (
        <div className="todoitem">
            <h2>{item}</h2>
            <p>{date}</p>
            <p>{due}</p>
            <label htmlFor="done">done?</label>
            <input id="done" finished={finished} 
                onClick={() => checkItem(id, finished)}            
                type="checkbox"></input>
            <button onClick={() => deleteItem(id)}>  
                <FontAwesomeIcon key={id} icon={faTrash}/>
            </button>
        </div>    
    );
};
export default todoitem;