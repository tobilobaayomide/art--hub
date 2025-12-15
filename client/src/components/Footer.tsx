import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks, footLinks } from "../data/index.tsx";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer: React.FC<{ menuOpen?: boolean }> = ({ menuOpen }) => {
  
  if (menuOpen) return null;

  return (
    <footer className="bg-white text-black py-8 px-4 w-full shadow-lg z-50">
      
      <div className="mb-8 mt-5 md:mt-20 flex justify-center">
        <div className="bg-white border border-[#333333] max-w-[1332px] w-full h-80 flex-col justify-center items-center shadow-md px-8 hidden md:flex">
          <h2
            className="text-[30.21px] mb-2"
            style={{
              fontFamily: '"Libre Baskerville", Baskerville, serif',
              fontWeight: 400,
              color: "#333333",
            }}
          >
            NEWSLETTER
          </h2>
          <p
            className="font-sans text-[32px] mb-6 text-center"
            style={{
              fontFamily: "Satoshi, Arial, sans-serif",
              fontWeight: 300,
              color: "#333333",
            }}
          >
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <form
            className="flex w-full justify-center"
            style={{ maxWidth: "800px" }}
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="border border-[#333333] w-[446px] h-[60px] text-[16px] text-[#333333] placeholder-[#333333] placeholder:text-[16px] pl-8 focus:outline-none focus:ring-0"
              style={{
                fontFamily: '"Libre Baskerville", Baskerville, serif',
                fontWeight: 400,
              }}
            />
            <button
              type="submit"
              className="bg-black text-white w-[181.63px] h-[60px] ml-[15px] text-[16px]"
              style={{
                fontFamily: '"Libre Baskerville", Baskerville, serif',
                fontWeight: 400,
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        
        <div className="flex flex-col items-start md:hidden w-full">
          <h2
            className="text-[24px] mb-2"
            style={{
              fontFamily: '"Libre Baskerville", Baskerville, serif',
              fontWeight: 400,
              color: "#333333",
            }}
          >
            NEWSLETTER
          </h2>
          <p
            className="font-sans text-[11.64px] mb-6 text-center"
            style={{
              fontFamily: "Satoshi, Arial, sans-serif",
              fontWeight: 300,
              color: "#333333",
            }}
          >
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <form className="flex flex-col w-full justify-start mb-1">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="border border-[#333333] w-[340px] h-[46px] text-[10px] text-[#333333] placeholder-[#333333] placeholder:text-[10px] pl-4 focus:outline-none focus:ring-0"
              style={{
                fontFamily: "Satoshi, Arial, sans-serif",
                fontWeight: 400,
              }}
            />
            <button
              type="submit"
              className="bg-black text-white w-[181.63px] h-[53.64px] mt-6 text-[11.64px]"
              style={{
                fontFamily: "Satoshi, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start max-w-[1332px] mx-auto mt-15">
        
        <div className="hidden md:flex flex-col items-center md:items-start">
          <span
            className="text-[24px] md:text-3xl mt-[136px] ml-[100px] text-[#292929]"
            style={{
              fontFamily: '"Clash Display", Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            ARTHUB
          </span>
        </div>
       
        <div className="hidden md:block">
          <ul
            className="flex flex-col gap-8 font-sans text-[#333333]"
            style={{
              fontFamily: "Satoshi, Arial, sans-serif",
              fontWeight: 200,
              fontSize: "24px",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative flex items-center text-[24px] font-sans ${
                      isActive
                        ? "font-normal text-[#2d3748]"
                        : "font-light text-[#292929]"
                    } transition-all duration-300 ease-out`
                  }
                  style={{
                    fontWeight: 300,
                    fontFamily: "inherit",
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative">
                        {link.name}
                        {isActive && (
                          <span className="absolute left-0 bottom-0.5 w-full h-0.5 bg-[#2d3748] animate-underline" />
                        )}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
       
        <div className="hidden md:block">
          <ul
            className="flex flex-col gap-8 font-sans text-[#333333]"
            style={{
              fontFamily: "Satoshi, Arial, sans-serif",
              fontWeight: 300,
              fontSize: "24px",
            }}
          >
            {footLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
     
        <div className="hidden md:block">
          <ul
            className="flex flex-col gap-10 font-sans text-[#333333]"
            style={{
              fontFamily: "Satoshi, Arial, sans-serif",
              fontWeight: 300,
              fontSize: "24px",
            }}
          >
            <li className="flex items-center gap-4">
              <AiOutlineMail size={48} color="#333333" />
              <a href="mailto:arthub@gmail.com" className="hover:underline">
                arthub@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <GoLocation size={48} color="#333333" />
              <span className="block">Lagos, Nigeria.</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col -mt-8 md:hidden">
          <h3
            className="text-[12px] mb-3"
            style={{
              fontFamily: "Satoshi, Arial, sans-serif",
              fontWeight: 300,
              color: "#333333",
            }}
          >
            REACH US
          </h3>
          <ul
            className="flex flex-col gap-4 font-sans text-[#333333] items-start"
            style={{
              fontFamily: "Satoshi, Arial, sans-serif",
              fontWeight: 300,
              fontSize: "12px",
            }}
          >
            <li className="flex items-start gap-2">
              <AiOutlineMail size={24} color="#333333" />
              <a href="mailto:arthub@gmail.com" className="hover:underline">
                arthub@gmail.com
              </a>
            </li>
            <li className="flex items-start mb-5 gap-2">
              <GoLocation size={24} color="#333333" />
              <span className="block">Lagos, Nigeria.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-15 mb-2 hidden md:block">
        <span
          className="text-[24px]"
          style={{
            fontFamily: "Rubik, Arial, sans-serif",
            fontWeight: 500,
            color: "gray",
          }}
        >
          ArtHub &copy; {new Date().getFullYear()}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;