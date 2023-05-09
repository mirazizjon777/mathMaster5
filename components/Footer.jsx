import insta from "../photos/instagram.svg";
import tele from "../photos/telegram.svg";
import facebook from "../photos/facebook.svg";
//
import Image from "next/image";
import React from "react";

//
const Footer = () => {
  return (
    <div className="bg-sky-300 p-[48px_72px_48px_48px]">
      <div className="flex justify-between items-center pb-8">
        <h2 className="text-3xl">MATEMATIKA MASTER</h2>
      </div>
      <div className="w-[50%] flex justify-between items-start pt-10 pb-10 max-md:flex-col">
        <div className="">
          <p>Bosh Sahifa</p>
          <p>Masalalar</p>
          <p>Video Darslar</p>
        </div>
        <div>
          <p>Algebra</p>
          <p>Geometriya</p>
          <p>Informatika</p>
          <p>Fizika</p>
        </div>
        <div>
          <p>Izohlar</p>
          <p>Kontaktlar</p>
          <p>Mulohazalar</p>
        </div>
      </div>
      <div className="flex justify-between max-md:flex-col max-md:gap-4">
        <div>
          <h2 className="text-slate-500">THE AUTHOR: Isroilov Mirazizjon</h2>
          <h2>Powered by Na'jot Ta'lim</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={insta} height={30} width={30} />
          <Image src={tele} height={30} width={30} />
          <Image src={facebook} height={30} width={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
