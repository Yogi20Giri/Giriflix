import contact from '../contact/contact.module.css'
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
import Link from "next/link";


const ContactCard = () => {
    return (
        <>
            <div className={contact.section}>
                <div className={contact.container}>
                    <div className={contact.grid}>
                        <div className={contact.grid_card}>
                            <i><MdEmail /></i>
                            <h2>yogeshgiri@gmail.com</h2>
                            <p className={contact.last_para}> Respons Time: 72 Hours</p>
                            <Link href="/">Send Email <span>&gt;</span ></Link>
                        </div>
                        <div className={contact.grid_card}>
                            <i><MdVoiceChat /></i>
                            <h2>Live Chat</h2>
                            <p className={contact.last_para}> Respons Time: 72 Hours</p>
                            <Link href="/">Chat Now <span>&gt;</span ></Link>
                        </div>
                        <div className={contact.grid_card}>
                            <i><MdForum /></i>
                            <h2>Cummunity Forum</h2>
                            <p className={contact.last_para}>Weekends: 9:00AM - 5:00PM EST</p>
                            <Link href="/">Ask the Cummunity <span>&gt;</span ></Link>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default ContactCard;