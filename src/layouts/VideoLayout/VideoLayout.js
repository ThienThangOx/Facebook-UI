import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Header from "../Components/Header/Header";

import styles from "./VideoLayout.module.scss";
import Sidebar from "./Sidebar";
const cx = classNames.bind(styles);

function VideoLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("body")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

VideoLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VideoLayout;
