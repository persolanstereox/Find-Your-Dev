import styles from "../assets/css/userstats.module.css";

const UserStats = (props) => {
  return (
    <section className={styles.user_stats_container}>
      <div className={styles.stats_box}>
        <div>
          <span>Repos</span>
          <h2>8</h2>
        </div>
        <div>
          <span>Followers</span>
          <h2>2115</h2>
        </div>
        <div>
          <span>Following</span>
          <h2>9</h2>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="" alt="Accomodation Icon" />
            <span>San Francisco</span>
          </div>
          <div>
            <img src="" alt="" />
            <a href="#">https:///gmgmmgmg.com</a>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="Twitter Icon" />
            <span>Not available</span>
          </div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStats;
