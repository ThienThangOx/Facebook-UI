import classNames from "classnames/bind";
import {
  Logo,
  SearchIcon,
  HomeIcon,
  HomeIconActive,
  VideoIcon,
  VideoActiveIcon,
  MarketIcon,
  MarketActiveIcon,
  GroupIcon,
  GroupActiveIcon,
  GamingIcon,
  GamingActiveIcon,
} from "../../../assets/Icons";

import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo-search")}>
        <div className={cx("logo")}>{<Logo />}</div>
        <div className={cx("search")}>
          <button className={cx("search-btn")}>{<SearchIcon />}</button>
          <input placeholder="Tìm kiếm trên Facebook" />
        </div>
      </div>
      <div className={cx("tabs")}>
        <ul className={cx("tab-list")}>
          <li className={cx("tab-item")}>
            <div className={cx("tab")}>
              <div className={cx("tab-item")}>
                <NavLink
                  to={"/video"}
                  className={(nav) =>
                    cx("tab-link", { isActive: nav.isActive })
                  }
                >
                  <HomeIcon />
                </NavLink>
                <div className={cx("tab-footer")}></div>
              </div>
            </div>
          </li>
          <li className={cx("tab-item")}>
            <div className={cx("tab")}>
              <div className={cx("tab-item")}>
                <NavLink
                  to={"/video"}
                  className={(nav) =>
                    cx("tab-link", { isActive: nav.isActive })
                  }
                >
                  <VideoIcon />
                </NavLink>
              </div>
            </div>
          </li>
          <li className={cx("tab-item")}>
            <div className={cx("tab")}>
              <div className={cx("tab-item")}>
                <NavLink
                  to={"/video"}
                  className={(nav) =>
                    cx("tab-link", { isActive: nav.isActive })
                  }
                >
                  <MarketIcon />
                </NavLink>
              </div>
            </div>
          </li>
          <li className={cx("tab-item")}>
            <div className={cx("tab")}>
              <div className={cx("tab-item")}>
                <NavLink
                  to={"/video"}
                  className={(nav) =>
                    cx("tab-link", { isActive: nav.isActive })
                  }
                >
                  <GroupIcon />
                </NavLink>
              </div>
            </div>
          </li>
          <li className={cx("tab-item")}>
            <div className={cx("tab")}>
              <div className={cx("tab-item")}>
                <NavLink
                  to={"/video"}
                  className={(nav) =>
                    cx("tab-link", { isActive: nav.isActive })
                  }
                >
                  <GamingIcon />
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={cx("function-btn")}>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
      </div>
    </div>
  );
}

export default Header;
