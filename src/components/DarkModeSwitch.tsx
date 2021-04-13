import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { MotionBox } from "./Motion";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      {!isDark ? (
        <MotionBox animate={{ rotate: 180 }} transition={{ duration: 1 }}>
          <FaSun onClick={toggleColorMode} cursor="pointer" />
        </MotionBox>
      ) : (
        <MotionBox animate={{ rotate: 360 }} transition={{ duration: 1 }}>
          <FaMoon onClick={toggleColorMode} cursor="pointer" />
        </MotionBox>
      )}
    </>
  );
};
