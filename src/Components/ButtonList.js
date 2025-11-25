import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Movies",
    "Comedy",
    "News",
    "Technology",
    "Education",
    "Cinema",
    "Short Films",
    "Telugu Cinema",
    "Sports",
    "Cricket",
    "Trending",
    "Music Mixes",
    "Podcasts",
    "Recently Uploaded",
  ];

  return (
    <div className="w-full bg-white px-4 py-3">
      {/* Only this inner container scrolls horizontally */}
      <div className="flex overflow-x-auto no-scrollbar gap-3 whitespace-nowrap">
        {list.map((text, index) => (
          // keep buttons from shrinking so scroll works as expected
          <div className="flex-shrink-0" key={index}>
            <Button name={text} active={index === 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
