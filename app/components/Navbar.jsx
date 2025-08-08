"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="relative shadow-sm m-auto px-4">
      {/* Header Part */}
      <div className="container">
        <div className="flex justify-between items-center gap-8">
          <Link href="/" className="w-50 inline-block lg:w-auto">
            <Image
              src="/logo.png"
              width={140}
              height={50}
              alt="logo"
              className="w-50"
            />
          </Link>
          <button
            onClick={() => setSidebar(true)}
            className="md:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBarsStaggered />
          </button>
          {/* mobile menu */}
          <nav
            className={`w-full h-screen bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 transition-all z-50 ${
              sidebar ? "translate-y-0" : "-translate-y-full"
            } `}
          >
            <div className="w-full h-full bg-white overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#ececec] p-4 mb-4">
                <Link href="/" className="w-50 inline-block">
                  <Image width={140} height={50} src="/logo.png" alt="logo" className="w-50" />
                </Link>
                <button
                  onClick={() => setSidebar(false)}
                  className="text-2xl text-brand cursor-pointer"
                >
                  <IoCloseCircleSharp />
                </button>
              </div>
              <div className="px-4 flex flex-col gap-4">
                <ul className="font-bold text-primary text-base">
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/about"
                      className="block border-b border-[#ececec] py-2"
                    >
                      About
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/service"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* desktop menu*/}
          <nav className="hidden md:block py-6 border-t border-[#ececec]">
            <div className="container flex items-center gap-4 xl:gap-9">
              <ul className="flex gap-3 xl:gap-10 font-bold text-primary text-base xl:text-lg">
                <li>
                  <Link href="/" className="hover:text-brand transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-brand transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="hover:text-brand transition">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-brand transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-brand transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-brand transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
