import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/business_card_social.module.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import React from "react";

config.autoAddCss = false;

function Socials() {
    let [qrCode, setQrCode] = React.useState(false);

    return (
        <div className={styles}>
            <a target="_blank" href="https://www.instagram.com/marian.lippold/" className={styles.icon} rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
            </a>
            <a target="_blank" href="https://github.com/marian-l" className={styles.icon} rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
            </a>
            <a target="_blank" href="https://www.xing.com/profile/Marian_Lippold/cv" className={styles.icon} rel="noreferrer">
                <FontAwesomeIcon icon={faXing} ></FontAwesomeIcon>
            </a>
            <a target="_blank" href="/images/contacts.csv" className={styles.icon} rel="noreferrer" download>
                <FontAwesomeIcon icon={faFileCsv} ></FontAwesomeIcon>
            </a>
            <a target="_blank" href="/images/marian_lippold.vcf" className={styles.icon} rel="noreferrer" download>
                <FontAwesomeIcon icon={faAddressCard} ></FontAwesomeIcon>
            </a>
                <button onClick={() => {setQrCode(!qrCode)}} className={styles.qrbutton}>Contact as QR-Code</button>
                <div className={styles.qrcode}>
                    {qrCode && <img src="/images/qr_marian_contact.png"></img>}
                </div>
        </div>
    )
}

export default Socials;