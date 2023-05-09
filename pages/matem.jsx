import React from "react";
import Misol from "@/components/Misol";
import Header from "@/components/Header";

//
const matem = () => {
  return (
    <div className="w-full h-screen flex-col justify-center items-center bg-emerald-400">
      <Header></Header>
      <div className="h-[10%]"></div>
      <Misol></Misol>
    </div>
  );
};

export default matem;
