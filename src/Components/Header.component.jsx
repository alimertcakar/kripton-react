import React from "react";
import { Grid, Item } from "./GridParts";
import { Typography, Box } from "@material-ui/core";
import MorphTextShowcase from "./MorphTextShowcase.component";
import { motion } from "framer-motion";
import kriptonPath from "../kriptonSvgPath";
const svgStyle = {
  width: 200,
  height: 100,
};
const icon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(63, 81, 181, 1)",
  },
};

function Header() {
  return (
    <header>
      <Grid justify="center">
        <Item container justify="center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 0 350 100"
            className="item"
            style={{ ...svgStyle }}
          >
            <motion.path
              d={kriptonPath}
              style={{
                stroke: "blue",
                overflow: "visible",
                strokeWidth: 2,
                strokeLinejoin: "round",
                strokeLinecap: "round",
              }}
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 8, ease: "easeInOut" },
                fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                delay: 0.5,
              }}
            />
          </motion.svg>
        </Item>
        <Item container justify="center" xs={12}>
          <Box p={3}>
            <Typography>
              Krypton is a crypting website using caesar's cipher.
            </Typography>
          </Box>
        </Item>
        <Item container justify="center" xs={12}>
          <Box p={3}>
            <MorphTextShowcase />
          </Box>
        </Item>
      </Grid>
    </header>
  );
}

export default Header;
