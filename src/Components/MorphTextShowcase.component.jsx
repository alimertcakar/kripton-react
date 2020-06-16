import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: { padding: theme.spacing(1) },
  },
}));

function MorphTextShowcase() {
  const [text, setText] = useState("Secret message");
  const messages = ["tihufx%pfwxdhi", "ummxg|*sg{}gim", "Secret message"];
  let currentMessage = 0;
  const classes = useStyles();
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ scale: 1.5, x: [-200, 0] });
    const textInterval = setInterval(() => {
      controls
        .start({ scale: 1, transition: { damping: 500 } })
        .then(() => controls.start({ scale: 1.5 }));
      setText(messages[currentMessage % messages.length]);
      currentMessage += 1;
    }, 2000);
    return () => {
      clearInterval(textInterval);
    };
  }, []);
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ scale: 0 }}
        animate={controls}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 13,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default MorphTextShowcase;
