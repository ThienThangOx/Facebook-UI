// pages
import Home from "../pages/Home";
import Video from "../pages/Video";

//layouts
import HomeLayout from "../layouts/HomeLayout";
import VideoLayout from "../layouts/VideoLayout";

const privateRoutes = [
  { path: "/home", page: Home, layout: HomeLayout },
  { path: "/video", page: Video, layout: VideoLayout },
];

export { privateRoutes };
