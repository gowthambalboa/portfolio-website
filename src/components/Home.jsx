import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold text-white
          "
          >
            Hi, this is Gowtham!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm currently looking for Software and Full Stack Developer
            opportunities starting from May 2023. Do reach out to me if you have
            any amazing opportunities.
          </p>
          <div className="grid sm:grid-cols-3 md:grid-cols-3">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/gowtham-c/"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              LinkedIn
              <span>
                <AiOutlineLinkedin size={25} className="ml-1" />
              </span>
            </a>
            <a
              href="https://github.com/gowthambalboa"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              Github
              <span>
                <AiOutlineGithub size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my dp"
            className="rounded-3xl mx-auto max-w-xl w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
