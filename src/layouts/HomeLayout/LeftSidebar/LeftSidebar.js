import classNames from "classnames/bind";

// images for features
import avatar from "../../../assets/Image/FacebookAvatar.jpg";
import feedImage from "../../../assets/Image/LeftSideBarIcons_Feed.png";
import ads from "../../../assets/Image/LeftSidebarIcon_ads.png";
import messengerKids from "../../../assets/Image/LeftSidebarIcon_messengerKid.png";
import pay from "../../../assets/Image/LeftSidebarIcon_pay.png";

// images for groups
import springBootVN from "../../../assets/Image/LeftSidebarGorup_SpringBootVN.jpg";
import violinVN from "../../../assets/Image/LeftSidebarIcon_ViolinVN.jpg";

//icons
import { DownArrowIcon, UpArrowIcon } from "../../../assets/Icons";

import styles from "./LeftSidebar.module.scss";
import MenuItem from "./MenuItem";
import { useState } from "react";
const cx = classNames.bind(styles);

function LeftSideBar() {
  const [expandFeature, setExpandFeature] = useState(false);

  const fullMenuItem = [
    { title: "Thắng", iconClass: "avatar", avatar: avatar },
    { title: "Bạn bè (112 người online)", iconClass: "friend" },
    { title: "Kỷ niệm", iconClass: "memory" },
    { title: "Đã lưu", iconClass: "saved" },
    { title: "Nhóm", iconClass: "group" },
    { title: "Video", iconClass: "video" },
    { title: "Marketplace", iconClass: "marketplace" },
    { title: "Bảng feed", iconClass: "feed", image: feedImage },
    {
      title: "Chiến dịch và gây quỹ",
      iconClass: "fundraisers",
    },
    { title: "Chơi game", iconClass: "game" },
    { title: "Đơn đặt hàng và thanh toán", iconClass: "pay", image: pay },
    {
      title: "Hoạt động gần đây với quảng cáo",
      iconClass: "ads",
      image: ads,
    },
    { title: "Messenger", iconClass: "messenger" },
    {
      title: "Messenger Kids",
      iconClass: "messenger-kid",
      image: messengerKids,
    },
    { title: "Reels", iconClass: "reel" },
    { title: "Sinh nhật", iconClass: "dob" },
    { title: "Sự kiên", iconClass: "event" },
    { title: "Trang", iconClass: "page" },
    {
      title: "Trình quản lý quảng cáo",
      iconClass: "ads-campaign",
    },
    {
      title: "Trung tâm khoa học khí hậu",
      iconClass: "climate",
    },
    { title: "Video chơi game", iconClass: "game-video", image: feedImage },
    {
      title: "Ẩn bớt",
      iconClass: "load-more",
      icon: <UpArrowIcon width={20} height={20} />,
    },
  ];

  const shortMenuItem = [
    { title: "Thắng", iconClass: "avatar", avatar: avatar },
    { title: "Bạn bè (112 người online)", iconClass: "friend" },
    { title: "Kỷ niệm", iconClass: "memory" },
    { title: "Đã lưu", iconClass: "saved" },
    { title: "Nhóm", iconClass: "group" },
    { title: "Video", iconClass: "video" },
    { title: "Marketplace", iconClass: "marketplace" },
    { title: "Bảng feed", iconClass: "feed", image: feedImage },
    {
      title: "Xem thêm",
      iconClass: "load-more",
      icon: <DownArrowIcon width={20} height={20} />,
    },
  ];

  const shortCutItem = [
    { title: "Spring Boot Việt Nam", iconClass: "group", image: springBootVN },
    { title: "Hội Violin Việt Nam", iconClass: "group", image: violinVN },
    {
      title: "Xem thêm",
      iconClass: "load-more",
      icon: <DownArrowIcon width={20} height={20} />,
    },
  ];

  const menuItem = expandFeature ? fullMenuItem : shortMenuItem;

  const handleExpandFeature = () => {
    console.log("cli");
    setExpandFeature(!expandFeature);
  };

  return (
    <div className={cx("wrapper")}>
      {menuItem.map((item) =>
        item.iconClass === "load-more" ? (
          <MenuItem
            item={item}
            key={item.title}
            onClick={handleExpandFeature}
          />
        ) : (
          <MenuItem item={item} key={item.title} />
        )
      )}
      <div className={cx("shortcut-place")}>
        <div className={cx("shortcut-title")}>Lối tắt của bạn</div>
        <div className={cx("edit-btn")}>Chỉnh sửa</div>
      </div>
      <div className={cx("shortcut-container")}>
        {shortCutItem.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default LeftSideBar;
