import styles from "../../styles/business_card_main.module.css"

function Main() {
    return (
        <div className={styles}>
            <h3 className={styles.name}> Marian Lippold </h3>
            <h4 className={styles.profession}> Student </h4>
            <h5 className={styles.email}> marian.lippold@gmx.de </h5>

            <div className={styles.description}>
                <h4> Über mich </h4>
                <p>Ich bin Angewandte Informatik und studiere an der Hochschule Mainz Marian Lippold. Ich bin Angewandte Informatik und studiere an der Hochschule Mainz Marian Lippold. </p>
                <h4> Interessen </h4>
                <p> Meine Interessen sind vor allem Zocken, Ficken, Kiffen und Fluchen. </p>
                <h4> Skills </h4>
                <p> Meine Skills sind: </p>
            </div>
        </div>
    )
}

export default Main;