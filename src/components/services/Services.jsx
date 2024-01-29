import React from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import Service from "./Service";
import { dataSer } from "./dataServices";

const Services = () => {
  return (
    <>
      <div id="services" className="mainPadding py-5 bg-[#ECECEC] mainAfter">
        <h3 className="title">خدمانتا</h3>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-14">
          {dataSer.map((item, index) => (
            <Service
              key={index}
              title={item.title}
              icon={<item.icon size={50} className="text-[#D5D5D5] mx-auto" />}
              num={index < 9 ? `0${index + 1}` : index + 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
