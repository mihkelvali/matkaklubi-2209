import { useState } from "react"
import { sendMessage } from "../api"
import Navigatsioon from "../components/Navigatsioon"
import styles from "../styles/Contact.module.css"

const Kontakt = () => {
    const [nimi, setNimi] = useState('')
    const [email, setEmail] = useState('')
    const [sonum, setSonum] = useState('')
    const [kuvaOnnestumine, setKuvaOnnestumine] = useState(false)

    return (
        <div className={styles.konteiner}>
            <h1>Contact us</h1>
            <div className={styles.vorm}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    className={styles.vormInput}
                    placeholder="Name"
                    type="text"
                    value={nimi}
                    onChange={(e) => { setNimi(e.target.value) }}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    className={styles.vormInput}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    className={styles.vormInput}
                    placeholder="Please type your message to us"
                    value={sonum}
                    onChange={(e) => { setSonum(e.target.value) }}
                />
                <button
                    className={styles.vormNupp}
                    onClick={() => {
                        sendMessage({
                            clientName: nimi,
                            clientEmail: email,
                            clientMessage: sonum
                        })
                        setNimi('');
                        setEmail('');
                        setSonum('');
                        setKuvaOnnestumine(true);
                    }}
                >Send message</button>
                {kuvaOnnestumine ? <div>Sõnum saadetud!</div> : null}
            </div>
        </div>
    )
}

export default () => {
    return (
        <div className={styles.pais}>
            <Navigatsioon />
            <Kontakt />
        </div>
    )
}