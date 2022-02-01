import { useColorMode } from "@chakra-ui/color-mode";
import { Switch } from "@chakra-ui/react";
import React from "react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return <Switch colorScheme="brand" isChecked={isDark} onChange={toggleColorMode} />;
};
