import InfoBadge from "../components/UI/InfoBadge";
import linkIcon from "/link.png";
import mapMarkerIcon from "/map.png";
import twitterIcon from "/twitter.png";
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
      <div className={styles.additional_info_box}>
        <div>
          <InfoBadge
            styles={styles.info_and_icon_box}
            imgSrc={mapMarkerIcon}
            span={"San Francisco"}
          />
          <div className={styles.info_and_icon_box}>
            <img src={linkIcon} alt="Link Icon" />
            <a href="#">https:///gmgmmgmg.com</a>
          </div>
        </div>
        <div>
          <InfoBadge
            styles={styles.info_and_icon_box}
            imgSrc={twitterIcon}
            span={"Not available"}
          />
          <InfoBadge
            styles={styles.info_and_icon_box}
            imgSrc={twitterIcon}
            span={"@github"}
          />
        </div>
      </div>
    </section>
  );
};

export default UserStats;
