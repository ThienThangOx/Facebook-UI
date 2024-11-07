import PropTypes from "prop-types";
import classNames from "classnames/bind";

// images
import storyAvatar from "../../../assets/Image/story-avatar.png";
import storyThumbnail from "../../../assets/Image/story-content.jpg";
import storyAvatar1 from "../../../assets/Image/story-avatar1.jpg";
import storyThumbnail1 from "../../../assets/Image/story-thumbnail1.jpg";
import storyAvatar2 from "../../../assets/Image/story-avatar2.jpg";
import storyThumbnail2 from "../../../assets/Image/story-thumbnail2.jpg";
import storyAvatar3 from "../../../assets/Image/story-avatar3.jpg";
import storyThumbnail3 from "../../../assets/Image/story-thumbnail3.jpg";
import storyAvatar4 from "../../../assets/Image/story-avatar4.jpg";
import storyThumbnail4 from "../../../assets/Image/story-thumbnail4.jpg";

// icons
import { LeftArrowIcon, RightArrowIcon } from "../../../assets/Icons";
// components
import StoryItem from "./StoryItem";
import StoryCreation from "./StoryCreation/StoryCreation";

import styles from "./Stories.module.scss";
const cx = classNames.bind(styles);

function Stories() {
  const stories = [
    {
      avatar: storyAvatar,
      thumbnail: storyThumbnail,
      userName: "Dũng English Speaking",
    },
    {
      avatar: storyAvatar1,
      thumbnail: storyThumbnail1,
      userName: "Lego",
    },
    {
      avatar: storyAvatar2,
      thumbnail: storyThumbnail2,
      userName: "Ăn ngủ cùng AI",
    },
    {
      avatar: storyAvatar3,
      thumbnail: storyThumbnail3,
      userName: "Vietsuccess",
    },
    {
      avatar: storyAvatar4,
      thumbnail: storyThumbnail4,
      userName: "Gundam Kits Collection",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("arrow-btn", "left-btn")}>
        <LeftArrowIcon />
      </div>
      <div className={cx("container")}>
        <StoryCreation />
        {stories.map((story, index) => (
          <StoryItem story={story} key={index} />
        ))}
      </div>
      <div className={cx("arrow-btn", "right-btn")}>
        <RightArrowIcon />
      </div>
    </div>
  );
}

export default Stories;
