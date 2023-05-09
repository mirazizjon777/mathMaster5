import Link from "next/link";
import React from "react";

const MatemLink = () => {
  return (
    <div>
      <Link className="matemlink" href={"/matem"}>{"Submit"}</Link>
    </div>
  );
};

export default MatemLink;
