import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className=" mx-auto flex  text-[2.5rem] font-bold text-[#fff] ">
      {title}
    </div>
  );
}

export default ContentTitle;
