import styles from "../../styles/cssanimation.module.css"
import React from "react";
import { useState } from "react";

export default function cssanimation() {

const [dotAnimation, setDotAnimation] = useState(false);
const handleDotsClick = () => {
    setDotAnimation(prevDotAnimation => !prevDotAnimation);
    console.log(styles)
}

return (
    <div className={styles.main_div}>
            <button className={styles.button_1}>pick meeee</button>
            <button className={styles.button_2}>Join the Party</button>
            <button className={styles.button_3} onClick={handleDotsClick}>make them dance</button>
            

        <CSSAnimation />
        <div className={`${styles.dots} ${dotAnimation ? 'dot-dance' : ''}`} >
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    </div>

    )
}