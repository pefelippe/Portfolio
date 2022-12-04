import React from "react";

type Props = {};

export default function Curriculum({}: Props) {
  return (
    <button
      className="text-base bg-gray-800 text-white
     hover:bg-gray-900 hover:text-gray-100 border 
     rounded-[20px] p-5 font-semibold flex transition duration-300 w-[200px]"
    >
      <svg
        className="w-6 h-6 mr-2 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
      Download CV
    </button>
  );
}
