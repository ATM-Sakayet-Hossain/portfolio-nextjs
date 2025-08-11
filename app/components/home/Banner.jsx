import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="px-4" href="/home">
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="pt-10 lg:w-1/2">
            <h6 className="text-base uppercase text-black font-bold lg:text-2xl">
              Welcome to
            </h6>
            <h1 className="text-5xl font-bold py-5 lg:text-7xl">
              I'm Sakayet a Creative
              <span className="block text-[#65a8f0] pt-5">
                Developer & IT Expert
              </span>
            </h1>
            <p className="text-[14px] font-normal text-justify lg:text-2xl">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions.
            </p>
            <div className="flex items-center gap-10 py-5 px-2 md:justify-start md:px-10 lg:py-15">
              <div className="">
                <h2 className="text-5xl font-bold text-center">10+</h2>
                <p className="flex flex-col text-center text-gray-500">
                  <span>YEARS</span>
                  <span>OF EXPERIENCE</span>
                </p>
              </div>
              <span className="md:w-1 md:h-20 md:border-r md:border-gray-400"> </span>
              <div>
                <h2 className="text-5xl font-bold text-center">7+</h2>
                <p className="flex flex-col text-center text-gray-500">
                  <span>PROJECTS</span> <span>COMPLETED</span>
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="w-fit text-xl font-bold uppercase flex items-center gap-5 hover:text-green-500"
            >
              Browse resume <FaArrowTrendUp />
            </Link>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <Image width={600} height={50} src="/about-1.png" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
