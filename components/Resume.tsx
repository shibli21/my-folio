import {
  Box,
  Grid,
  Heading,
  HeadingProps,
  ListItem,
  Tag,
  TagProps,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Title from "./Title";

type ResumeItemProps = {
  children: React.ReactNode;
};
const ResumeItem = ({ children }: ResumeItemProps) => {
  const bg = useColorModeValue("white", "text.primary");
  return (
    <Box
      padding="0 0 20px 20px"
      marginTop="-4px"
      borderLeft="2px solid"
      borderColor="primary"
      position="relative"
      sx={{
        "&:last-child": {
          paddingBottom: 0,
        },
        "&:before": {
          content: "' '",
          position: "absolute",
          width: 4,
          height: 4,
          borderRadius: 50,
          left: "-9px",
          top: 0,
          background: bg,
          border: "2px solid",
          borderColor: "primary",
        },
      }}
    >
      {children}
    </Box>
  );
};

const ResumeTitle = ({ children }: HeadingProps) => {
  return (
    <Heading mb={4} size="md" lineHeight={1}>
      {children}
    </Heading>
  );
};

const ResumeTag = ({ children, ...props }: TagProps) => {
  return (
    <Tag colorScheme="brand" mb={4} {...props}>
      {children}
    </Tag>
  );
};

function Resume() {
  return (
    <section id="resume">
      <Box>
        <Box mb={10}>
          <Title mb={10}>Resume</Title>
          <Text>
            Let me introduce myself as Shibli. As an enthusiastic and creative developer, I am passionate about the web
            and Android development using Flutter and React. I have built several complex apps in React and Flutter , so
            I am confident in my ability to deliver excellent results.
            <br />
            I&apos;m a fun person who enjoys nature, pets, and programming! I am always looking for new ways to
            accomplish tasks and I love learning new things.
          </Text>
        </Box>

        <Grid gap={10} templateColumns={["1fr", "1fr 1fr"]}>
          <Box>
            <Heading pb={4} size="lg" mb={4}>
              Education
            </Heading>
            <ResumeItem>
              <ResumeTitle>Bachelor of Science</ResumeTitle>
              <ResumeTag>Jan 2018 - Present</ResumeTag>
              <Text mb={2} fontWeight={600}>
                <em>Sylhet Engineering College</em>
              </Text>
              <p>
                After College it was my dream to study in engineering , so i admitted into sylhet engineering college.
              </p>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Secondary School Certificate</ResumeTitle>
              <ResumeTag>June 2015 - June 2017</ResumeTag>
              <Text mb={2} fontWeight={600}>
                <em>Comilla victoria govt. college</em>
              </Text>
              <p>I started my college life in one of the most popular & renowned college of bangladesh.</p>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Higher Secondary Certificate</ResumeTitle>
              <ResumeTag>Jan 2010 - Feb 2015</ResumeTag>
              <Text mb={2} fontWeight={600}>
                <em> Cumilla Zilla School</em>
              </Text>
              <p>
                It was my dream to study in this school . My dream comes true & I started my high school journey in the
                most popular & reputable school in my home town & all over Bangladesh.
              </p>
            </ResumeItem>
          </Box>
          <Box>
            <Heading pb={8} size="lg">
              Professional Experience
            </Heading>
            <ResumeItem>
              <ResumeTitle>Full-Stack Web Developer</ResumeTitle>
              <ResumeTag>Jan 2020 - Present</ResumeTag>
              <Text mb={2} fontWeight={600}>
                <em>Fiverr.com</em>
              </Text>
              <UnorderedList pl="20px" spacing={3}>
                <ListItem>Completed over 20 projects on Fiverr.com</ListItem>
                <ListItem>Level one seller in the Fiverr.com platform</ListItem>
                <ListItem>100% customer satisfaction rate</ListItem>
              </UnorderedList>
            </ResumeItem>
          </Box>
        </Grid>
      </Box>
    </section>
  );
}

export default Resume;
