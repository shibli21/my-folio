import { Button, Center, chakra, Container, Divider, HStack, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

interface YearProps {
  children: ReactNode;
}
const Year: React.FC<YearProps> = ({ children }) => {
  return (
    <Text fontSize="2xl" fontFamily="poppins" mb={4}>
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
        <FiCheckCircle color="green" />
        <Text fontSize="md" fontWeight="semibold">
          {title}
        </Text>
      </HStack>
      <Text ml={6} color="gray.400">
        {children}
      </Text>
    </chakra.li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Started at Sylhet Engineering College">
        After College it was my dream to study in engineering , so i admitted into sylhet engineering college.
      </Step>
    </ul>

    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Graduated College">Graduated from comilla victoria govt. college . My graduating class was 17.</Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Graduated High School">Graduated from comilla zilla school . My graduating class was 15.</Step>
      <Step title="Started at Comilla victoria govt. college">
        I started my college life in one of the most popular & renowned college of bangladesh.
      </Step>
    </ul>
    <Divider />
    <Year>2009</Year>
    <ul>
      <Step title="Graduated Primary School">Completed my primary school from ywca school, comilla.</Step>
      <Step title="Started at comilla zilla school ❤️">
        It was my dream to study in this school . My dream comes true & I started my high school journey in the most
        popular & reputable school in my home town & all over Bangladesh.
      </Step>
    </ul>
    <Divider />
    <Year>1997</Year>
    <ul>
      <Step title="Born 👶🏼🍼"> </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(true);

  return (
    <>
      <Container maxW="2xl">
        <Text fontWeight="bold" fontSize="3xl" mb={4} mt={8}>
          Timeline
        </Text>
        {isShowingFullTimeline ? (
          <FullTimeline />
        ) : (
          <Center>
            <Button variant="ghost" type="button" onClick={() => showFullTimeline(true)}>
              <HStack>
                <Text>See More</Text>
                <FaArrowDown />
              </HStack>
            </Button>
          </Center>
        )}
      </Container>
    </>
  );
}
