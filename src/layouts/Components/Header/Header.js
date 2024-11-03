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
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  DownArrowIcon,
} from "../../../assets/Icons";

import avatarImage from "../../../assets/Image/FacebookAvatar.jpg";
import emptyAvatar from "../../../assets/Image/EmptyAvatar.png";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
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
        <div className={cx("action-btn-list")}>
          <div className={cx("action-btn")}>
            <MenuIcon />
          </div>
          <div className={cx("action-btn")}>
            <MessengerIcon />
          </div>
          <div className={cx("action-btn")}>
            <NotificationIcon />
          </div>
          <div className={cx("avatar-btn")}>
            <img src={avatarImage} alt="Avatar" className={cx("avatar")} />
            <div className={cx("avatar-arrow")}>
              <DownArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
