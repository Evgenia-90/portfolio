import style from "./Contacts.module.css";
import Contact from "./Contact/Contact"
import styleContainer from ".././Common/Styles/Container.module.css"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <Contact />
                </div>
                <h2 className={style.title}>Send</h2>
            </div>
        </div>
    );
}
export default Contacts;
