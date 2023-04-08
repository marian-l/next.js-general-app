import Image from "next/image";
import styles from "../../styles/business_card_picture.module.css"

function Picture() {
    return (
        <div className={styles.picture} style={styles}>
            <Image 
            src="/images/WhatsApp Image 2023-01-30 at 12.35.31.jpeg" 
            className={styles} 
            alt="That's me!"
            width={450}
            height={600}
            >
            </Image>
        </div>
    )
}

export default Picture;