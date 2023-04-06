import styles from "../assets/css/userinfo.module.css";
import profilePhoto from "/idphoto.png";

const UserInfo = (props) => {
  return (
    <section className={styles.user_info_container}>
      <div className={styles.img_container}>
        <img src={profilePhoto} alt="Profile Photo" />
      </div>
      <div>
        <h1>The Github User</h1>
        <span>@bombaclan</span>
      </div>
      <h3 className={styles.joined_date}>Joined 25 Jan 2021</h3>
      <div className={styles.bio_container}>
        <h5>This profile has no bio</h5>
      </div>
    </section>
  );
};

export default UserInfo;
