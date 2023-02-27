import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className="mx-auto flex w-fit text-[3rem] font-bold text-[#5865f2] ">
      {title}
    </div>
  );
}

export default ContentTitle;
