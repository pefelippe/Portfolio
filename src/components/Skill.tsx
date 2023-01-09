import { motion } from "framer-motion";
import React from "react";

type Image = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Image) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"
        className="rounded-full border border-gray-500 object-cover w-24 h-24  filter group-hover:grayscale"
      />
    </div>
  );
}

export default Skill;
