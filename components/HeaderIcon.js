import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div
      className={`flex items-center cursor-pointer sm:h-14 md:px-6 lg:px-10 
    hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group ${
      active && "border-b-2"} ${active && "border-blue-500"}`}
    >
      <Icon
        className={`text-gray-500 h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
