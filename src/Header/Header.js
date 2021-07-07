import style from "./Header.module.css";
import Navbar from "../Nav/Navbar"

function Header() {
    return (
        <div className={style.header}>
            <Navbar />
        </div>
    );
}

export default Header;
