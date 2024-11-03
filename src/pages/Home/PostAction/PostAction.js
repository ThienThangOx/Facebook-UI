import PropTypes from "prop-types";
import classNames from "classnames/bind";

import avatar from "../../../assets/Image/FacebookAvatar.jpg";
import liveImage from "../../../assets/Image/body-create-action-live.png";
import imageImage from "../../../assets/Image/body-create-action-image.png";
import reactionImage from "../../../assets/Image/body-create-action-reaction.png";

import styles from "./PostAction.module.scss";
const cx = classNames.bind(styles);

function PostAction() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("create")}>
        <div className={cx("avatar")}>
          <img src={avatar} alt="avatar" className={cx("avatar")} />
        </div>
        <div className={cx("input")}>Thắng ơi bạn đang nghĩ gì thế?</div>
      </div>
      <div className={cx("action")}>
        <div className={cx("action-btn", "live-btn")}>
          <div className={cx("btn-icon")}>
            <img src={liveImage} alt="live" />
          </div>
          <div className={cx("btn-text")}>Video trực tiếp</div>
        </div>
        <div className={cx("action-btn", "action-btn")}>
          <div className={cx("btn-icon")}>
            <img src={imageImage} alt="anh" />
          </div>
          <div className={cx("btn-text")}>Ảnh/video</div>
        </div>
        <div className={cx("action-btn", "reaction-btn")}>
          <div className={cx("btn-icon")}>
            <img src={reactionImage} alt="reaction" />
          </div>
          <div className={cx("btn-text")}>Cảm xúc/hoạt đông</div>
        </div>
      </div>
    </div>
  );
}

export default PostAction;
