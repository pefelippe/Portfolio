import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className=" flex w-full py-3 justify-center lg:justify-start tracking-[1px] text-3xl font-bold">
      {title}
    </div>
  );
}

export default ContentTitle;
