import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoDetails();
    dispatch(closeMenu());
  }, []);

  const getVideoDetails = async () => {
    const videoId = searchParams.get("v");
    console.log(videoId);
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=" +
        videoId +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json.items);
    setVideoInfo(json.items[0]);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="Youtube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      {videoInfo && (
        <div className="px-5 w-[1200px] mt-0">
          {/* TITLE */}
          <h1 className="text-xl font-semibold text-gray-900">
            {videoInfo.snippet.title}
          </h1>

          {/* CHANNEL ROW */}
          <div className="flex items-center justify-between mt-3">
            {/* LEFT SECTION */}
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={`https://ui-avatars.com/api/?name=${videoInfo.snippet.channelTitle}`}
                alt="channel avatar"
              />

              <div>
                <p className="font-semibold text-sm">
                  {videoInfo.snippet.channelTitle}
                </p>
                <p className="text-xs text-gray-500">14M subscribers</p>
              </div>

              <button className="ml-3 bg-black text-white px-4 py-1 rounded-full text-sm">
                Subscribe
              </button>
            </div>

            {/* RIGHT SECTION ICONS */}
            {/* <div className="flex items-center gap-4 text-gray-700">
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                👍 {videoInfo.statistics.likeCount}
              </button>
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                Share
              </button>
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                Save
              </button>
            </div> */}
          </div>

          {/* VIEWS + TIME */}
          <p className="text-sm text-gray-600 mt-3">
            {videoInfo.statistics.viewCount} views •{" "}
            {videoInfo.snippet.publishedAt.split("T")[0]}
          </p>
        </div>
      )}
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
