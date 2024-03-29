import {
  Badge,
  Box,
  Flex,
  HStack,
  Link,
  Table,
  TableHeadProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { BrandGithub, ExternalLink } from "tabler-icons-react";
import { Projects as ProjectsType } from "contentlayer/generated";

interface TableProps extends TableHeadProps {
  data?: ProjectsType[];
}

const DataTable = ({ data }: TableProps) => {
  const hoverBg = useColorModeValue("red.50", "brandSecondary.800");

  if (!data) {
    return <h1>NO PROJECTS</h1>;
  }

  return (
    <Box>
      <Table>
        <Thead bg="primary">
          <Tr>
            <Th fontWeight="semibold" fontSize="md" color="white">
              Year
            </Th>
            <Th fontWeight="semibold" fontSize="md" color="white">
              Title
            </Th>
            <Th
              fontWeight="semibold"
              fontSize="md"
              color="white"
              display={["none", "table-cell", "table-cell", "table-cell"]}
            >
              Built with
            </Th>
            <Th isNumeric fontWeight="semibold" fontSize="md" color="white">
              Links
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data
            .sort(
              (a, b) =>
                Number(b.publishedAt.slice(-4)) -
                Number(a.publishedAt.slice(-4))
            )
            .map((b, i) => (
              <Tr
                _hover={{
                  bg: hoverBg,
                }}
                key={`${b.slug + i}`}
              >
                <Td p={3} w={["auto", "auto", "60px", "60px"]}>
                  {b.publishedAt.slice(-4)}
                </Td>
                <Td p={3}>
                  <Link
                    href={b.github ? b.external : ""}
                    isExternal
                    aria-label={`${b.title}`}
                  >
                    {b.title}
                  </Link>
                </Td>
                <Td
                  p={3}
                  display={["none", "table-cell", "table-cell", "table-cell"]}
                >
                  <HStack>
                    {b.tech &&
                      b.tech.map((c, i) => (
                        <Fragment key={i}>
                          <Badge>{c}</Badge>
                        </Fragment>
                      ))}
                  </HStack>
                </Td>
                <Td p={3} isNumeric>
                  <Flex mr={2} display="inline-flex">
                    {b.github && (
                      <Link
                        ml={2}
                        href={b.github}
                        isExternal
                        aria-label={`${b.title}`}
                        _hover={{ color: "primary" }}
                      >
                        <BrandGithub size="24px" />
                      </Link>
                    )}
                    {b.external && (
                      <Link
                        ml={2}
                        href={b.external}
                        isExternal
                        aria-label={`${b.title}`}
                        _hover={{ color: "primary" }}
                      >
                        <ExternalLink size="24px" />
                      </Link>
                    )}
                  </Flex>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
