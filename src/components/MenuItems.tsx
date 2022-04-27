import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface MenuItemsProps {}

const MenuItems: React.FC<PropsWithChildren<MenuItemsProps>> = ({
  children,
}) => (
  <Box fontSize="1.125rem" ml={[0, 0, 6, 6]}>
    {children}
  </Box>
);

export default MenuItems;
