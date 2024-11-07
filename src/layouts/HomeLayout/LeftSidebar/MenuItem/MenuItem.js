import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./MenuItem.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("item-container")} onClick={onClick}>
        <div className={cx("item-icon", item.iconClass || "")}>
          {item.avatar && (
            <img
              src={item.avatar}
              alt="avatar"
              className={cx(item.iconClass)}
            />
          )}
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className={cx(item.iconClass)}
            />
          )}
          {item.icon && (
            <div className={cx("arrow-container")}>{item.icon}</div>
          )}
        </div>
        <div className={cx("item-title")}>{item.title}</div>
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
