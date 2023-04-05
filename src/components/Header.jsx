import Button from "./UI/Button";
import styles from "./../assets/css/header.module.css";
import lightModeIMG from '/icons8-light-mode-78.png'
import darkModeIMG from '/icons8-night-mode-78.png'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>devfinder</h1>

      <Button onClick={props.themeHandler}>
        <span>{props.theme}</span>
        {props.theme === 'LIGHT' ? <img src={lightModeIMG}/> : <img src={darkModeIMG}/>}
      </Button>
    </header>
  );
};

export default Header;
