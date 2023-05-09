import fizikaIcon from "@/photos/fizika.svg";
import matemIcon from "@/photos/math.svg";
//
import React from "react";
import Image from "next/image";
import MatemLink from "@/components/MatemLink";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

//
const masalalar = () => {
  return (
    <div className="h-full ">
      <Header></Header>
      <main className="w-full p-12 flex gap-[96px] bg-teal-100 max-lg:gap-12 max-sm:p-5 max-sm:gap-5">
        {/* Fizika */}
        <div className="bg-green-600 p-12 w-[250px] flex-col justify-between items-center rounded-xl cursor-pointer hover:scale-110 transition-all">
          <h1 className="text-[20px] mb-5">Fizika</h1>
          <Image src={fizikaIcon} width={200}></Image>
          {/*  */}
          <div className="mt-5 flex-col gap-12 items-center">
            <p className="text-lg p-[5px_10px]">Test 10</p>
            <button className="bg-blue-600">Submit</button>
          </div>
        </div>
        {/* matematika */}
        <div className="bg-[#EB5757] p-12 flex-col justify-between items-center rounded-xl cursor-pointer hover:scale-110 transition-all">
          <h1 className="text-[20px]">Matematika</h1>
          <Image src={matemIcon} width={200}></Image>
          {/*  */}
          <div className="mt-5 flex-col gap-12 items-center">
            <div className="mt-5 flex-col gap-12 items-center">
              <p className="text-lg p-[5px_10px]">Test 10</p>
              <button className="bg-blue-600">
                <MatemLink />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default masalalar;
