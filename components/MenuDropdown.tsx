import React from "react";

export default function MenuDropdown({ title, children }) {
  return (
    <li className="relative group">
      <button>{title}</button>
      <div className="absolute top-0 -left-48 group-hover:translate-y-5 w-[350px] invisible opacity-0 group-hover:opacity-100 group-hover:visible transition group-hover:transition duration-200 ease-in-out z-50 shadow-2xl rounded-xl ">
        <div className="relative top-6 p-6 bg-white border-2 border-gray-100">
          <div className="absolute top-0 w-10 h-10 rotate-45 group-hover:translate-x-[12rem] bg-white"></div>
          <div className="relative w-full text-gray-700 z-10">{children}</div>
        </div>
      </div>
    </li>
  );
}
