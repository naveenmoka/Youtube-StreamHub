import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-44 bg-gray-100">
      <ul className=" text-[16px]">
        <Link to={"/"}>
          <li className="py-2 px-3 rounded-lg hover:bg-gray-200 font-medium cursor-pointer">
            Home
          </li>
        </Link>

        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Shorts
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Videos
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Live
        </li>
      </ul>

      <h1 className="font-bold pt-5 text-xs text-gray-500 uppercase tracking-wide mt-3 mb-2 border-t pt-4">
        Subscriptions
      </h1>

      <ul className=" text-[15px]">
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Music
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Sports
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Gaming
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Movies
        </li>
      </ul>

      <h1 className="font-bold pt-5 text-xs text-gray-500 uppercase tracking-wide mt-4 mb-2 border-t pt-4">
        Watch Later
      </h1>

      <ul className=" text-[15px]">
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Music
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Sports
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Gaming
        </li>
        <li className="py-2 px-3 rounded-lg hover:bg-gray-200 cursor-pointer">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
