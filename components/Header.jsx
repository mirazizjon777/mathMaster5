import React from "react";
import Lin from "./Lin";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-[48px_72px_48px_48px] bg-teal-400 max-sm:flex-col max-sm:gap-4 max-sm:p-7">
        <h1 className="text-5xl max-xl:text-3xl">MATEMATIKA MASTER</h1>
        <div className="flex gap-7 text-2xl font-medium max-xl:text-xl max-md:text-lg">
          <Lin></Lin>
        </div>
      </header>
    </div>
  );
};

export default Header;
