import PropTypes from "prop-types";
import classNames from "classnames/bind";

import PostAction from "./PostAction/PostAction";
import styles from "./Home.module.scss";
import Stories from "./Stories";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <PostAction />
      <Stories />
    </div>
  );
}

export default Home;
