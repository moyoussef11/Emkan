import React, { useEffect, useState } from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Hero = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((prevIndex) => {
        if (prevIndex === slides.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <>
      <div className="mainPadding bg-[#ECECEC] mainAfter relative">
        <div className="py-5 md:py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 bg-white">
            <img
              src={slides[currIndex]}
              className="w-full h-full object-cover"
              alt="slide"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h1 className="title md:text-right">Emkan | إمكان </h1>
            <p className="text-[#6E6666] text-2xl my-5 pb-10">
              نسعى في إمكان لتلبية احتياجاتك التمويلية عبر آلية عمل هي الأسهل
              والأسرع، لنكون خيارك الأفضل
            </p>
          </div>
        </div>
        <a href="#contact">
          <MdKeyboardDoubleArrowDown
            className="absolute left-[45%] bottom-0 md:left-[50%] mb-2 md:mb-4 animate-bounce text-[#33BCBB] cursor-pointer"
            size={50}
          />
        </a>
        <a href="https://web.whatsapp.com/" target="-blank">
          <FaSquareWhatsapp
            className="fixed right-0 md:right-14 md:bottom-16 bg-slate-100 text-[#51EEA2] hover:text-[#33BCBB] duration-500 z-10"
            size={40}
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
