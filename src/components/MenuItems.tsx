import { Text } from "@chakra-ui/react";
import React from "react";

interface MenuItemsProps {}

const MenuItems: React.FC<MenuItemsProps> = ({ children }) => (
  <Text fontSize="20px" ml={[0, 0, 6, 6]}>
    {children}
  </Text>
);

export default MenuItems;
