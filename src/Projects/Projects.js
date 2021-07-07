import style from "./Projects.module.css";
import Project from "./Project/Project"
import styleContainer from "../Common/Styles/Container.module.css";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.titleProjects}>My projects</h2>
                <div className={style.projects}>
                    <Project title={"смотреть"} value={"Название проекта"} description={"Proin nibh felis, rutrum id eleifend nec, viverra ac nunc."} />
                    <Project title={"смотреть"} value={"Название проекта"} description={"Lorem ipsum dolor sit amet."} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
