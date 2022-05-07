import { Box, Button, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import { Projects as ProjectsType } from "contentlayer/generated";
import { default as NextLink } from "next/link";
import React, { FC } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "tabler-icons-react";
import Card from "./Card";
import Title from "./Title";

interface ProjectsProps {
  projects: ProjectsType[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Box id="projects">
      <HStack alignItems="center" justifyContent="space-between">
        <Title>Projects</Title>
        <Box textAlign="center">
          <NextLink href="/projects">
            <Button size={"sm"} rightIcon={<ArrowRight size="22px" />}>
              View all
            </Button>
          </NextLink>
        </Box>
      </HStack>
      <Text fontSize={["lg", "xl"]} mb={10}>
        Take a look at my latest projects
      </Text>

      <Box
        sx={{
          ".swiper-pagination-bullet": {
            bg: "primary",
          },
          " .swiper-slide": {
            height: "auto",
          },
          ".swiper": {
            paddingLeft: "1px",
          },
        }}
      >
        <Swiper
          slidesPerView={isLargerThan700 ? 3 : 1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {projects
            .sort(function (b, a) {
              return Number(a.featured) - Number(b.featured);
            })
            .map((project) => (
              <SwiperSlide key={project.slug}>
                <Card project={project} />
              </SwiperSlide>
            ))}

          <Box h="60px" />
        </Swiper>
      </Box>
    </Box>
  );
};

export default Projects;
