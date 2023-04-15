import githubIcon from "/github-icon.png";
import styles from "../assets/css/runappinfo.module.css";
const RunAppInfo = () => {
    return(
        <div className={styles.welcome_text_container}>
            <img src={githubIcon} alt="github icon" className={styles.logo} />
            <br/>
            <h2 className={styles.welcome_h2}>Welcome to devfinder app!</h2>
            <h4>
            Simply enter a GitHub username and get all the information you need at your fingertips.<br/> It's that easy!
            </h4>
        </div>
    )
}
export default RunAppInfo;