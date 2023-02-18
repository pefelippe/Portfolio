import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className="flex text-[#fff] w-fit text-center justify-center text-3xl tracking-[1px]  font-bold">
      {title}
    </div>
  );
}

export default ContentTitle;
