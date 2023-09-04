import React from "react";

type Props = {
  projectId: Number;
};

export default function Post({ projectId }: Props) {
  return <div>[projectId]</div>;
}
