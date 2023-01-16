import React from "react";

interface IBoxInfo {
  nome: string;
  urlSVG: string;
}

function SkillBox(boxInfo: IBoxInfo) {
  return (
    <div>
      <p>{boxInfo.nome}</p>
      <p>{boxInfo.urlSVG}</p>
    </div>
  );
}

export default SkillBox;
