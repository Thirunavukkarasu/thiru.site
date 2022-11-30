"use client";
import { RoughNotationGroup } from "react-rough-notation";

import { userData } from "constants/data";
import { RainbowHighlight } from "components/RainbowHighlight";

export default function HeroSection() {
  const highlights = [
    {
      title: "Developer",
      color: "#F59E0B",
    },
    {
      title: "Architect",
      color: "#84CC16",
    },
    {
      title: "Youtuber",
      color: "#10B981",
    },
    {
      title: "Leader",
      color: "#3B82F6",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          {highlights.map((highlight, idx) => (
            <RainbowHighlight color={highlight.color} key={idx}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
                {highlight.title}
              </h1>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <img
            src={userData.avatarUrl}
            alt="avatar"
            className="rounded-3xl shadow"
          />
        </div>
      </div>
    </div>
  );
}
