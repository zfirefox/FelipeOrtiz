import React from "react";

export default function NavBar() {
  return (
    <div className="bg-white sticky top-0 z-50 mb-8 h-fit w-full border-b-4 border-general-900 bg-general-950 px-5">
      <div className="ml-5 -mb-1 flex h-16 w-full items-center justify-start gap-x-3">
        <li className="font-ubuntu text-3xl pr-9 transition duration-300 ease-in-out hover:text-fuchsia-800">
          About Me
        </li>
        <p className="font-ubuntu text-3xl pr-9 transition duration-300 ease-in-out hover:text-red-600">
          Skills
        </p>
        <p className="font-ubuntu text-3xl pr-9 transition duration-300 ease-in-out hover:text-cyan-500">
          Works
        </p>
        <p className="font-ubuntu text-3xl transition duration-300 ease-in-out hover:text-indigo-500">
          Contact
        </p>
      </div>
    </div>
  );
}
