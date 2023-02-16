import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className="flex w-fit text-center justify-center tracking-[1px] text-[2rem] xl:text-[2.5rem] font-bold underline bg-[#5865f2]/70 px-4 rounded">
      {title}
    </div>
  );
}

export default ContentTitle;
