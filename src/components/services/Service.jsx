import React from "react";

const Service = ({ title, icon, num }) => {
  return (
    <div className="card group bg-white py-10 text-center relative rounded-md overflow-hidden hover:-translate-y-5 duration-700">
      <span className="bg-[#7791C8] h-1 w-5 absolute left-[150px] top-0 opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:w-full duration-1000"></span>
      {icon}
      <span className="text-[#7791C8] font-bold block mb-10 text-2xl">
        {title}
      </span>
      <div className="w-1/3 h-10 bg-[#7791C8] absolute bottom-0 -left-3 skew-x-12"></div>
      <div className="w-1/5 h-10 bg-[#D7D7D7] absolute bottom-0 left-14 skew-x-12"></div>
      <span className="z-10 absolute left-4 bottom-1 font-bold text-2xl text-white">
        {num}
      </span>
    </div>
  );
};

export default Service;
