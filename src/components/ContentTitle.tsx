import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className="flex  text-[2.5rem] font-bold text-[#fff] underline decoration-[#5865f2]">
      {title}
    </div>
  );
}

export default ContentTitle;
