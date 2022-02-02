import { Box, chakra, Divider, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";

interface YearProps {
  children: ReactNode;
}
const Year: React.FC<YearProps> = ({ children }) => {
  return (
    <Text fontSize="2xl" fontFamily="poppins" my={4}>
      {children}
    </Text>
  );
};

interface StepProps {
  title: string;
  children: ReactNode;
}

const Step: React.FC<StepProps> = ({ title, children }) => {
  return (
    <chakra.li mb={4} ml={2} listStyleType="none">
      <HStack alignItems="center" mb={2}>
        <Icon as={FiCheckCircle} color="primary" />
        <Text fontSize="md" fontWeight="semibold">
          {title}
        </Text>
      </HStack>
      <Text ml={6} color={useColorModeValue("gray.800", "gray.400")}>
        {children}
      </Text>
    </chakra.li>
  );
};

const FullTimeline = () => (
  <>
    <Divider bg="tertiary" />
    <Year>2018</Year>
    <ul>
      <Step title="Started at Sylhet Engineering College">
        After College it was my dream to study in engineering , so i admitted into sylhet engineering college.
      </Step>
    </ul>

    <Divider bg="tertiary" />
    <Year>2017</Year>
    <ul>
      <Step title="Graduated College">Graduated from comilla victoria govt. college . My graduating class was 17.</Step>
    </ul>
    <Divider bg="tertiary" />
    <Year>2015</Year>
    <ul>
      <Step title="Graduated High School">Graduated from comilla zilla school . My graduating class was 15.</Step>
      <Step title="Started at Comilla victoria govt. college">
        I started my college life in one of the most popular & renowned college of bangladesh.
      </Step>
    </ul>
    <Divider bg="tertiary" />
    <Year>2009</Year>
    <ul>
      <Step title="Graduated Primary School">Completed my primary school from ywca school, comilla.</Step>
      <Step title="Started at comilla zilla school ❤️">
        It was my dream to study in this school . My dream comes true & I started my high school journey in the most
        popular & reputable school in my home town & all over Bangladesh.
      </Step>
    </ul>
    <Divider bg="tertiary" />
    <Year>1997</Year>
    <ul>
      <Step title="Born 👶🏼🍼"> </Step>
    </ul>
  </>
);

export default function Timeline() {
  return (
    <>
      <Box pt={[4, 10]} maxW="2xl" mx="auto">
        <Text fontWeight="bold" fontSize="3xl" mb={4} mt={8}>
          Timeline
        </Text>
        <FullTimeline />
      </Box>
    </>
  );
}
