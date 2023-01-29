import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className=" uppercase flex w-full text-xl font-semibold justify-center text-gray-300 tracking-[5px]">
      {title}
    </div>
  );
}

export default ContentTitle;
