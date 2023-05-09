import React from "react";

const Yakun = ({ refresh }) => {
  return (
    <div>
      <div className="flex">
        <h2>Sizning natijangiz</h2>
        <span>2</span>
      </div>
      <div className="flex items-center justify-end gap-14">
        <button
          onClick={() => {
            refresh();
          }}
          className="bg-red-600"
        >
          Return
        </button>
        <button className="bg-green-500 mr-12">Bosh sahifa</button>
      </div>
    </div>
  );
};

export default Yakun;
