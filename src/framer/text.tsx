import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const YellowPulseText = ({ children }: Props) => {
  return (
    <span style={{ position: "relative" }}>
      <motion.span
        animate={{ scaleX: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          display: "inline-block",
          color: "black",
          textShadow: "none",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "#FFEB3B",
        }}
      />
      <span
        style={{
          display: "inline-block",
          color: "black",
          textShadow:
            "0px 0px 1px #FFEB3B, 0px 0px 3px #FFEB3B, 0px 0px 5px #FFEB3B, 0px 0px 7px #FFEB3B, 0px 0px 10px #FFEB3B",
        }}
      >
        {children}
      </span>
    </span>
  );
};

export default YellowPulseText;
