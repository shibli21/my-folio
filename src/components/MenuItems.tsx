import { Box, Text } from "@chakra-ui/core";
import React from "react";

interface MenuItemsProps {}

const MenuItems: React.FC<MenuItemsProps> = ({ children }) => (
  <Box ml={[0, 6, 6, 6]}>
    <Text fontSize="20px">{children}</Text>
  </Box>
);

export default MenuItems;
