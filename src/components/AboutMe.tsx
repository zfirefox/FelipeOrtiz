import React, { Component, useCallback, useEffect, useState } from "react";
import aboutMe from "../animations/aboutMe2.gif";

export default function AboutMe() {
  const worksArray = [
    "3D modeler",
    "Designer",
    "Developer",
    "2D animator",
    "Promotional video editor",
  ];
  const [newWork, setNewWork] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * worksArray.length);
    setNewWork(worksArray[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1500);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="w-full h-screen bg-white">
      <div>
        <div className="flex w-1/2 h-96  ml-48 mt-20 mb-96">
          <div className="relative right-0 top-2/3">
            <h1 className="font-medium font-merriweather text-5xl text-black">
              I worked as:
              <h1>&nbsp;</h1>
              <text className="font-ubuntu text-6xl"> {newWork}</text>
              <h1>&nbsp;</h1>I am a programmer using React.js, TypeScript and
              Tailwind to do my development, working in a Scrum environment. who
              has a love for art, illustration, 2D and 3D animation.
            </h1>
          </div>
          <div className="absolute right-0 end-5">
            <img src={aboutMe} alt="hi" />
          </div>
        </div>
      </div>
    </div>
  );
}
