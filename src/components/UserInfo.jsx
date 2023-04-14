import styles from "../assets/css/userinfo.module.css";

const UserInfo = (props) => {
  const userdata = props.userData;
  const dataOptions = {
    day: "numeric",
    month: "short", 
    year: "numeric",
  };
  const formattedDate = Intl.DateTimeFormat("en-US", dataOptions).format(
    userdata.joined_date
  );

  return (
    <section className={styles.user_info_container}>
      <div className={styles.img_container}>
        <img src={userdata.avatar} alt="Profile Photo" />
      </div>
      <div>
        <h1>{userdata.name || "Name not available"}</h1>
        <a href={userdata.github_url}>@{userdata.username}</a>
      </div>
      <h3 className={styles.joined_date}>Joined {formattedDate}</h3>
      <div className={styles.bio_container}>
        <h5>{userdata.bio || "This profile has no bio"}</h5>
      </div>
    </section>
  );
};

export default UserInfo;
