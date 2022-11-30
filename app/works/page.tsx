import React from "react";
import { works } from "../../constants/data";

const WorkCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-green-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};

export default function Works() {
  return (
    <section className="bg-gray-700 text-white">
      <div className="container mx-auto max-w-6xl pt-10">
        <h1 className="text-5xl leading-relaxed tracking-wide font-semibold">
          Latest Works
        </h1>
        <p className="text-xl leading-relaxed text-gray-300">
          Perfect solution for digital experience
        </p>
      </div>
      {/* Grid starts here */}
      <div className="container mx-auto max-w-6xl mt-20 pb-40">
        <div className="grid grid-cols-2 gap-8">
          {works.map((work, idx) => (
            <WorkCard
              title={work.title}
              link={work.link}
              imgUrl={work.imgUrl}
              number={`${idx + 1}`}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
