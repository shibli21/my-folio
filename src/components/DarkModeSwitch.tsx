import { useColorMode } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { motion } from "framer-motion";
import React from "react";

const Circle = (props: any) => {
  return <motion.circle id="Oval" r="17.5px" initial={false} fill="#333" {...props} />;
};

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <label htmlFor="toggleDarkMode">
      <Input
        id="toggleDarkMode"
        type="checkbox"
        display="none"
        aria-label="Toggle dark mode"
        checked={colorMode === "light"}
        onChange={toggleColorMode}
      />
      <motion.svg
        width="45px"
        height="45px"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        variants={{
          dark: { rotate: 0 },
          light: { rotate: colorMode === "light" ? 180 : 0 },
        }}
        initial={false}
        animate={colorMode}
        style={{ margin: "-1rem", originX: "50%", originY: "50%", translateY: "0%" }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          stiffness: 50,
        }}
        cursor="pointer"
      >
        <Circle
          cx="200.5"
          cy="292.5px"
          variants={{
            dark: { cy: "220.5px", scale: 0, opacity: 0 },
            light: { cy: "292.5px", scale: 1, opacity: 1 },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "light" && 0.1,
            type: "spring",
            stiffness: 100,
          }}
        />
        <Circle
          cx="114.5px"
          cy="251.5"
          variants={{
            dark: { cx: "150px", scale: 0, opacity: 0 },
            light: { cx: "114.5px", scale: 1, opacity: 1 },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "light" && 0.2,
            type: "spring",
            stiffness: 100,
          }}
        />
        <Circle
          cx="114.5px"
          cy="169.5px"
          variants={{
            dark: { cx: "150px", scale: 0, opacity: 0 },
            light: { cx: "114.5px", scale: 1, opacity: 1 },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "light" && 0.3,
            type: "spring",
            stiffness: 100,
          }}
        />

        <Circle
          cx="200.5"
          cy="111.5px"
          variants={{
            dark: { cy: "160px", scale: 0, opacity: 0 },
            light: { cy: "111.5px", scale: 1, opacity: 1 },
          }}
          transition={{
            duration: 0,
            delay: colorMode === "light" && 0.4,
            type: "spring",
            stiffness: 100,
          }}
          animate={colorMode}
        />
        <Circle
          cx="285.5px"
          cy="169.5"
          variants={{
            dark: { cx: "230px", scale: 0, opacity: 0 },
            light: { cx: "285.5px", scale: 1, opacity: 1 },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "light" && 0.5,
            type: "spring",
            stiffness: 100,
          }}
        />
        <Circle
          cx="285.5px"
          cy="251.5"
          variants={{
            dark: { cx: "240px", scale: 0, opacity: 0 },
            light: { cx: "285.5px", scale: 1, opacity: 1 },
          }}
          animate={colorMode}
          transition={{
            duration: 0.2,
            delay: colorMode === "light" && 0.6,
            type: "spring",
            stiffness: 100,
          }}
        />

        <Circle
          cx="200"
          cy="200"
          r="58px"
          variants={{
            dark: { r: "90px", fill: "#fff" },
            light: { r: "58px", fill: "#333333" },
          }}
          animate={colorMode}
          initial={false}
          transition={{ duration: 0.7 }}
          mask="url(#hole)"
        />
        <Circle
          cx="250"
          cy="150"
          r="0px"
          variants={{
            dark: {
              light: "90px",
              r: "90px",
              cx: 250,
              opacity: 1,
              transition: { duration: 0.4, type: "spring", stiffness: 50 },
              fill: "#1A202C",
            },
            light: {
              r: "40px",
              cx: 450,
              opacity: 0,
              transition: { duration: 0 },
              fill: "#1A202C",
            },
          }}
          animate={colorMode}
          initial={false}
        />
      </motion.svg>
    </label>
  );
};
