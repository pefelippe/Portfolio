import React from "react";

type Title = {
  title: string;
};

function ContentTitle({ title }: Title) {
  return (
    <div className="flex  w-fit text-center justify-center text-3xl tracking-[5px]  font-bold">
      {title}
    </div>
  );
}

export default ContentTitle;
