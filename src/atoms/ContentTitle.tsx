import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className=" flex w-full text-center justify-center tracking-[1px] text-[2rem] xl:text-[2.5rem] font-bold">
      {title}
    </div>
  );
}

export default ContentTitle;
