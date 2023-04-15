import styles from "../assets/css/error.module.css";
import errorIcon from '/warning-icon.png'
const Error = () => {
  return (
    <div className={styles.error_container}>
        <img src={errorIcon} alt="" />
      <h1>User not found!</h1>
      <h2>
        I'm sorry, but we were unable to find the GitHub username you entered.
        Please check the spelling and try again. If the problem persists, please
        ensure that the user <u>exists</u> on GitHub and that their profile is not set
        to <u>private</u>.
        <br/> <span>Thank you</span>
      </h2>
    </div>
  );
};

export default Error;
