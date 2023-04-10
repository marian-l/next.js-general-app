import React from "react";
// import styles from "../../styles/todoitem.module.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const todoitem = ({item, date, due, delete}) => {
    return (
        <div className="todoitem">
            <h2>{item}</h2>
            <p>{date}</p>
            <p>{due}</p>
            <button onClick={() => delete(item)} >
                <img src={faTrash} className="trash_bin"/>
            </button>
        </div>    
    );
};
export default todoitem;