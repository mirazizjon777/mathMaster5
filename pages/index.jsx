import Image from "next/image";
// Image
import Book from "../photos/mathBook.png";
import img1 from "../photos/student.svg";
import img2 from "../photos/specialist.svg";
import img3 from "../photos/lightning.svg";

//

import Footer from "@/components/Footer";
import Header from "@/components/Header";

//
export default function Home({ title }) {
  return (
    <div className="h-full w-full">
      <Header></Header>
      <main className="flex p-[50px_48px] justify-between items-center drop-shadow-xl bg-teal-100 max-xl:gap-5">
        <div className="">
          <h1 className="text-7xl ">Matematika Master</h1>
          <p className="mt-5">
            Siz Matematika Master kitoblari yordamida siz matematikani mukammal
            darajada o'rganishingiz mumkin.
          </p>
        </div>
        <div>
          <Image
            height={400}
            width={200}
            src={Book}
            className="rounded-xl drop-shadow-lg"
          ></Image>
        </div>
      </main>
      <div className="w-full h-[1px] bg-slate-600"></div>
      {/* III */}
      <div className="p-[50px_48px] bg-green-300">
        <ul className="flex gap-10 text-zinc-900 max-xl:flex-col">
          <li className="flex flex-col max-xl:flex-row max-xl:gap-5 max-xl:items-center">
            <div className="w-[50px] h-[50px] bg-cyan-500 flex justify-center items-center rounded-full mb-4 max-xl:min-w-[50px]">
              <Image src={img1} height={35} width={35}></Image>
            </div>
            <p className="max-md:text-[8px]">
              Bizda ta'lim olgan o'quvchilarimiz hozirgi kunda tajribali
              mutaxasis va nufuzli oliy ta'lim universitetlarda o'qimoqda.
            </p>
          </li>
          <span className="w-[1px] h-[120px] bg-black max-xxl:h-[60px] max-xl:hidden"></span>
          <li className="flex flex-col max-xl:flex-row max-xl:gap-5 max-xl:items-center">
            <div className="w-[50px] h-[50px] bg-cyan-500 flex justify-center items-center rounded-full mb-4 max-xl:min-w-[50px]">
              <Image src={img2} height={35} width={35}></Image>
            </div>
            <p className="max-md:text-[8px]">
              Bizning o'qish tizimimiz tezkor bo'lib 3 oy davom etadi. Va
              mutaxasis darajaga yetadi.
            </p>
          </li>
          <span className="w-[1px] h-[120px] bg-black max-xl:hidden"></span>
          <li className="flex flex-col max-xl:flex-row max-xl:gap-5 max-xl:items-center">
            <div className="w-[50px] h-[50px] bg-cyan-500 flex justify-center items-center rounded-full mb-4 max-xl:min-w-[50px]">
              <Image src={img3} height={35} width={35}></Image>
            </div>
            <p className="max-md:text-[8px]">
              Bizning ustozlarimiz eng kuchli va tajribali hisoblanadi.
              Ustozlarimizning 10 yillik tajribaga ega.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-slate-600"></div>
      {/* IV */}
      <Footer />
    </div>
  );
}
