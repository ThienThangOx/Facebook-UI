import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./StoryItem.module.scss";
const cx = classNames.bind(styles);

function StoryItem({ story }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar-container")}>
        <img src={story.avatar} alt="avatar" className={cx("avatar")} />
      </div>
      <div className={cx("content-container")}>
        <img className={cx("content")} src={story.thumbnail} alt="Story" />
      </div>
      <p className={cx("user-name")}>{story.userName}</p>
    </div>
  );
}

StoryItem.propTypes = {
  story: PropTypes.object.isRequired,
};

export default StoryItem;
