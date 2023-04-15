import { MoonLoader } from "react-spinners";
import styles from "../assets/css/loader.module.css";
const Loader = () => {
    return(
    <div className={styles.loader_container}>
        <MoonLoader color="hsla(360, 80%, 48%, 1)" size={80}/>
    </div>
    )
}

export default Loader