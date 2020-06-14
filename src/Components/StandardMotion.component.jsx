import React from "react";
import { motion } from "framer-motion";

function StandardMotion(props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {props.children}
    </motion.div>
  );
}

export default StandardMotion;
