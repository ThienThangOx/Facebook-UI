import classNames from "classnames/bind";

import styles from "./RightSidebar.module.scss";
const cx = classNames.bind(styles);

function RightSideBar() {
  return <div className={cx("wrapper")}>RightSideBar</div>;
}

export default RightSideBar;
