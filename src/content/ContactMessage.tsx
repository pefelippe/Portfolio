import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Message({}: Props) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 2 }}
      className="contentStyle px-10"
    >
      <h1>Interested in collaborating with me?</h1>
      <p>I’m always open to discussing product design work or partnership opportunities.</p>
      <button>Vamos conversar</button>
    </motion.div>
  );
}

export default Message;
