import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
import htmlcss from "../assets/htmlcss.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import angular from "../assets/angular.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: htmlcss,
      title: "HTML/CSS",
      style: "shadow-orange-500",
    },
    // {
    //   id: 2,
    //   src: css,
    //   title: "CSS",
    //   style: "shadow-blue-500",
    // },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-700",
    },
    {
      id: 8,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 9,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">
            These are the top technologies that I have worked on
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md betterhover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
