import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className="py-5 flex w-full text-center justify-center tracking-[1px] text-[2rem] xl:text-[2.5rem] font-bold underline decoration-[#5865f2]">
      {title}
    </div>
  );
}

export default ContentTitle;
