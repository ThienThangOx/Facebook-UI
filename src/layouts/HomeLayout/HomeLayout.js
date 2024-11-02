import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Header from "../Components/Header";
import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSidebar/RightSidebar";

import styles from "./HomeLayout.module.scss";
const cx = classNames.bind(styles);

function HomeLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("body")}>
        <LeftSideBar />
        <div className={cx("content")}>{children}</div>
        <RightSideBar />
      </div>
    </div>
  );
}

HomeLayout.propTypes = {
  Children: PropTypes.node.isRequired,
};

export default HomeLayout;
