import style from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={style.navbar}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
}

export default Navbar;
