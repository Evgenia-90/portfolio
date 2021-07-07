import style from "./Footer.module.css";
import styleContainer from "../Common/Styles/Container.module.css";
import BlockFooter from "./BlockFooter/BlockFooter"

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.titleFooter}>EVGENIIA SHPUNTOVA</h2>
                <div className={style.footer}>
                    <BlockFooter />
                    <BlockFooter />
                    <BlockFooter />
                    <BlockFooter />
                </div>
                <h2 className={style.titleFooter}>2021 year</h2>
            </div>
        </div>
    );
}

export default Footer;
