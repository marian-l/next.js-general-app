import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import styles from "../../styles/business_card_email.module.css"
// email js => mlippold.website@gmail.com

const Email = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d7csfhi', 'template_pvnlhag', form.current, '9-FOdiIn6P_nD_RzX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };

    return (
        <section>
            <div className={styles}>
                <h2 className={styles.caption}> Send me an Email </h2>

                <form className="--form-control"
                      ref={form}
                      onSubmit={sendEmail}>
                    <p></p>
                    <input 
                        className={styles.input}
                        type="text"
                        placeholder="Full Name"
                        name="'user_name" required />
                    <p></p>
                    <input 
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                        name="'user_email" required />
                    <p></p>
                    <input 
                        className={styles.input}
                        type="text"
                        placeholder="Subject"
                        name="'user_subject" required />
                    <p></p>
                    <textarea 
                        className={styles.input}
                        name="message"
                        cols="30" 
                        rows="10">
                    </textarea>
                    <p></p>
                    <button 
                        className={styles.button}
                        type="submit">
                         Send Message </button>
                </form>


            </div>
        </section>
    )
}

export default Email