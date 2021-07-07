import style from "./Skills.module.css";
import Skill from "./Skill/Skill"
import styleContainer from "../Common/Styles/Container.module.css";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Proin nibh felis, rutrum id eleifend nec, viverra ac nunc."} />
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet"} />
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
