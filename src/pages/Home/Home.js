import PropTypes from "prop-types";
import classNames from "classnames/bind";

import PostAction from "./PostAction/PostAction";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <PostAction />
      
    </div>
  );
}

export default Home;
