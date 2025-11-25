import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 bg-white m-5 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-1">
      {/* Thumbnail */}
      <img
        className="
      w-full h-40 object-cover rounded-lg
      transition-transform duration-200
      hover:scale-105
    "
        alt="video"
        src={thumbnails.medium.url}
      />

      {/* Content */}
      <ul className="px-2 py-3">
        {/* Title */}
        <li className="font-semibold text-sm leading-tight line-clamp-2">
          {title}
        </li>

        {/* Channel */}
        <li className="text-xs text-gray-600 mt-1">{channelTitle}</li>

        {/* Views */}
        <li className="text-xs text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
