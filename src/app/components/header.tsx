import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center h-12">
      <div className="flex items-center border border-solid border-black w-2/5 h-full">
        <img src="https://picsum.photos/50/50" alt="logo" />
        <h1 className="ml-2">Logo</h1>
      </div>
      <div className="bg-gray-300 border border-solid border-black w-1/5 flex-grow h-full text-center flex items-center justify-center">
        <h4>Blogs</h4>
      </div>
      <div className="flex items-center border border-solid border-black w-2/5 h-full ">
        <div className="flex items-center justify-center ml-auto mr-4">
          <img src="https://picsum.photos/50/50" alt="logo" />
          <h1 className="ml-2">Adam Levine</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
