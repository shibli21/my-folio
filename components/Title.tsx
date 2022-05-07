import { Heading, HeadingProps } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";

interface ITitleProps extends HeadingProps {}

const Title: FC<PropsWithChildren<ITitleProps>> = ({ children, ...props }) => {
  return (
    <Heading
      mb={3}
      textDecoration="underline"
      textDecorationStyle="wavy"
      textDecorationColor="primary"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Title;
