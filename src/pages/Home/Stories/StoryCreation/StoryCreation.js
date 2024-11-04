import classNames from "classnames/bind";

import { StoryPlusIcon } from "../../../../assets/Icons/Icons";
import Avatar from "../../../../assets/Image/StoryCreation.png";

import styles from "./StoryCreation.module.scss";
const cx = classNames.bind(styles);

function StoryCreation() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar-container")}>
        <img src={Avatar} alt="Avatar" className={cx("avatar")} />
      </div>
      <div className={cx("footer")}></div>
      <div className={cx("add-btn")}>
        <StoryPlusIcon />
      </div>
      <p className={cx("text")}>Tạo tin</p>
    </div>
  );
}

export default StoryCreation;