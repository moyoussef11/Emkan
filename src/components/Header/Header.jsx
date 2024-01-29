import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="mainPadding bg-white h-20 text-[#8F8F8F] flex justify-between items-center shadow z-10">
        <a
          className="order-3 hidden md:block border py-2 px-4 rounded-full border-[#232349] text-black hover:bg-[#33BCBB] transition-colors duration-1000 hover:text-white"
          href="#"
        >
          اتصل بنا
        </a>

        <nav className="order-2 hidden md:block">
          <ul className="flex space-x-10 md:space-x-20 font-bold">
            <li className="navLinks">
              <a href="#services">خدماتنا</a>
            </li>
            <li className="navLinks">
              <a href="#about">عن الشركة </a>
            </li>
            <li className="navLinks">
              <a href="#">الرئيسية</a>
            </li>
          </ul>
        </nav>

        <div
          className={`flex bg-white z-10 absolute top-20 w-full transition-all duration-500 md:hidden items-center justify-center flex-col ${
            !toggle ? "left-[-800px]" : "left-0"
          }`}
        >
          <a
            className="order-3 my-4 w-fit block border py-2 px-4 rounded-full border-black text-black hover:bg-[#33BCBB] transition-colors duration-1000 hover:text-white"
            href="#"
          >
            اتصل بنا
          </a>

          <nav className="order-2">
            <ul className="flex flex-col items-center justify-center space-y-10 font-bold">
              <li className="navLinks">
                <a href="#services">خدماتنا</a>
              </li>
              <li className="navLinks">
                <a href="#about">عن الشركة </a>
              </li>
              <li className="navLinks">
                <a href="#">الرئيسية</a>
              </li>
            </ul>
          </nav>
        </div>

        <a href="#" className="order-1">
          <img className="w-40" src={logo} alt="logo" />
        </a>

        <div
          className="md:hidden order-4 cursor-pointer"
          onClick={handleToggle}
        >
          {!toggle ? (
            <FaBarsStaggered size={30} className="text-[#33BCBB]" />
          ) : (
            <RiCloseFill size={30} className="text-[#33BCBB]" />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
