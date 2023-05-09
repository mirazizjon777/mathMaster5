import Link from "next/link";
import React from "react";

function Lin() {
  return (
    <div className="flex gap-5 text-black max-md:flex-col max-md:gap-1 max-sm:flex-row max-sm:gap-3">
      <Link className="link" href={"/"}>
        Bosh sahifa
      </Link>
      <Link className="link1" href={"/masalalar"}>
        Masalalar
      </Link>
      <Link className="link2" href={"/"}>
        Video darslar
      </Link>
    </div>
  );
}

export default Lin;
