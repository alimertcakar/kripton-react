import React, { useState, useEffect } from "react";
import { motion, useAnimatedState, useAnimation } from "framer-motion";

function MorphTextShowcase() {
  const [text, setText] = useState("Secret message");
  const messages = ["tihufx%pfwxdhi", "ummxg|*sg{}gim", "Secret message"];
  let currentMessage = 0;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: [0, 2], x: [-200, 0] });
    const textInterval = setInterval(() => {
      controls.start({ scale: [0, 2] });
      setText(messages[currentMessage % messages.length]);
      currentMessage += 1;
    }, 2000);
    return () => {
      clearInterval(textInterval);
    };
  }, []);
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={controls}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default MorphTextShowcase;
