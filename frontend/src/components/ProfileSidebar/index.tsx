import React from 'react';
import styles from './styles.module.scss';
import Image1 from './svg/svg1';
import Image2 from './svg/svg2';
import Image3 from './svg/svg3';
import Image4 from './svg/svg4';
import Image5 from './svg/svg5';
import Image6 from './svg/svg6';
import Image7 from './svg/svg7';
import Image8 from './svg/svg8';
import { Link } from 'react-router-dom';

export interface IProfileSidebarProps {
}

function ProfileSidebar({ avatar, userName, folloversCount, rating, postNotificationCount }) {
  return (
    <div className={styles.profile_sidebar_container}>
      <div className={styles.top_group}>
        <div className={styles.avatar_and_name_group}>
          <Link to="/">
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <span className={styles.user_name}>{userName}</span>
          </Link>
        </div>
        <div className={styles.following_and_rating_group}>
          <button type="button" className={styles.following}>
            <Image1 />
            <div className={styles.followers_count}>
              {folloversCount}
              {' '}
              following
            </div>
          </button>
          <div className={styles.dot} />
          <button type="button" className={styles.rating}>
            <Image2 />
            <div className={styles.rating_count}>
              {rating}
              {' '}
              rating
            </div>
          </button>
        </div>
        <button type="button" className={styles.settings_button}>
          <Image3 />
        </button>
      </div>
      <div className={styles.sidebar_links}>
        <Link to="/">
          <Image4 />
          <span>Drafts</span>
        </Link>
        <Link to="/">
          <Image5 />
          <span>Favorites</span>
        </Link>
        <Link to="/">
          <Image6 />
          <span>Highlights</span>
        </Link>
        <Link to="/">
          <Image7 />
          <span>Your posts</span>
          <div className={postNotificationCount ? styles.notification_count : styles.invisible}>
            {postNotificationCount}
          </div>
        </Link>
        <Link to="/">
          <Image8 />
          <span>Your contributions</span>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSidebar;
