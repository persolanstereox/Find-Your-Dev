import styles from '../assets/css/userinfo.module.css'
import profilePhoto from '/idphoto.png'

const UserInfo = props => {
    return (
        <section className={styles.user_info_container}>
            <div className={styles.info_box_first}>
                <div>
                    <img src={profilePhoto} alt="Profile Photo" />
                </div>
                <div>
                    <h1>The Github User</h1>
                    <span>@bombaclan</span>
                </div>
                <h3 className={styles.joined_date}></h3>
                <div className={styles.bio_container}>
                    <h5>
                        This profile has no bio
                    </h5>
                </div>
            </div>
            <div className={styles.info_box_second}>

            </div>
        </section>
    )
}

export default UserInfo;