import {
  Box,
  chakra,
  Heading,
  HeadingProps,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Text mb={1} color="blue.500">
        <Link href={href}>{props.children}</Link>
      </Text>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
  return (
    <Box borderRadius="lg" overflow="hidden">
      <Image alt={props.alt} {...props} />
    </Box>
  );
}

function PRE(props: any) {
  return (
    <chakra.pre
      size="xs"
      borderRadius="lg"
      p={4}
      bg={useColorModeValue("red.50", "red.100")}
      color="black"
      my={10}
      {...props}
      overflow="scroll"
    >
      {props.children}
    </chakra.pre>
  );
}

function p(props: any) {
  return (
    <Text {...props} my={4}>
      {props.children}
    </Text>
  );
}

const h1 = (props: HeadingProps) => (
  <Heading fontFamily="body" size="2xl" my="0.5rem" {...props} />
);
const h2 = (props: HeadingProps) => (
  <Heading fontFamily="body" size="xl" my="0.5rem" {...props} />
);
const h3 = (props: HeadingProps) => (
  <Heading fontFamily="body" size="lg" my="0.5rem" {...props} />
);
const h4 = (props: HeadingProps) => (
  <Heading fontFamily="body" size="sm" my="0.5rem" {...props} />
);

export const MDXComponents = {
  h1,
  h2,
  h3,
  h4,
  pre: PRE,
  p,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  Image: RoundedImage,
  a: CustomLink,
};
