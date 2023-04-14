import InfoBadge from "../components/UI/InfoBadge";
import linkIcon from "/link.png";
import mapMarkerIcon from "/map.png";
import twitterIcon from "/twitter.png";
import companyIcon from "/company-icon.png";
import styles from "../assets/css/userstats.module.css";

const UserStats = (props) => {
  const userdata = props.userData;
  return (
    <section className={styles.user_stats_container}>
      <div className={styles.stats_box}>
        <div>
          <span>Repos</span>
          <h2>{userdata.repos}</h2>
        </div>
        <div>
          <span>Followers</span>
          <h2>{userdata.followers}</h2>
        </div>
        <div>
          <span>Following</span>
          <h2>{userdata.following}</h2>
        </div>
      </div>
      <div className={styles.additional_info_box}>
        <div>
          <InfoBadge
            styles={styles.info_and_icon_box}
            imgSrc={mapMarkerIcon}
            span={userdata.location || "Not available"}
          />
          <div className={styles.info_and_icon_box}>
            <img src={linkIcon} alt="Link Icon" />
            <a href={userdata.privateSite || '#'}>{userdata.private_site || "Not available"} </a>
          </div>
        </div>
        <div>
          <InfoBadge
            styles={styles.info_and_icon_box}
            imgSrc={twitterIcon}
            span={userdata.twitter || "Not available"}
          />
          <InfoBadge
            styles={styles.info_and_icon_box}
            imgSrc={companyIcon}
            span={userdata.company || "Not available"}
          />
        </div>
      </div>
    </section>
  );
};

export default UserStats;
