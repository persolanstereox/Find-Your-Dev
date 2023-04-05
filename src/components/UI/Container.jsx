import styles from "../../assets/css/container.module.css";
import Navbar from "../Header";
const Container = (props) => {
  return( 
  <div className={styles.container}>{props.children}</div>);
};

export default Container;
