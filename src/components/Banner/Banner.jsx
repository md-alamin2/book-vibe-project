import React from "react";
import bookImage from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="bg-base-200 py-12 px-28  mt-12 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
        <img src={bookImage} />
        <div>
          <h1 className="text-5xl font-bold max-w-[526px]">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-success mt-12">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
