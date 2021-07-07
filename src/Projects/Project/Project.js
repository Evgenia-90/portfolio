import style from "./Project.module.css";

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.projectName}>
                <div className={style.icon}></div>
                <h3 className={style.titleProject}>{props.title}</h3>
            </div>
            <h4 className={style.value}>{props.value}</h4>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;