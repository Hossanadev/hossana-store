import React from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ onClick }) => {
  return (
    <>
      <div className="p-2 md:px-8 px-2 mt-[3rem] flex justify-end md:mt-[4rem]">
        <IoClose size={30} className="text-black_color" onClick={onClick} />
      </div>
    </>
  );
};

export default Sidebar;
