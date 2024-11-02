import classNames from "classnames/bind";

import styles from "./LeftSidebar.module.scss";
const cx = classNames.bind(styles);

function LeftSideBar() {
  return <div className={cx("wrapper")}>LeftSideBar</div>;
}

export default LeftSideBar;
