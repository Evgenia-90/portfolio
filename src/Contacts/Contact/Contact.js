import style from "./Contact.module.css";
import styleContainer from "../../Common/Styles/Container.module.css";

function Contact() {
    return (
        <div className={style.contactBlock}>
            
            <div className={style.containerForm}>
                <form action="callback">
                        <p><input type="text" name="name"></input></p>
                        <p><input type="tel" name="phone"></input></p>
                        <textarea></textarea>
                    </form>
            </div>
             
        </div>
    );
}

export default Contact;
