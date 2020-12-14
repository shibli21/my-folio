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
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ArchiveProjects } from "../pages/archive";

interface TableProps extends TableHeadProps {
  data?: [ArchiveProjects];
}

const DataTable = ({ data }: TableProps) => {
  const hoverBg = useColorModeValue("red.50", "gray.900");

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
          {data.map((b, i) => (
            <Tr
              _hover={{
                bg: hoverBg,
              }}
              key={`${b.slug + i}`}
            >
              <Td p={3} w={["auto", "auto", "60px", "60px"]}>
                {b.data.date.slice(-4)}
              </Td>
              <Td p={3}>
                <Link
                  href={b.data.github ? b.data.external : ""}
                  isExternal
                  aria-label={`${b.data.title}`}
                >
                  {b.data.title}
                </Link>
              </Td>
              <Td
                p={3}
                display={["none", "table-cell", "table-cell", "table-cell"]}
              >
                <HStack>
                  {b.data.tech.map((c, i) => (
                    <Fragment key={i}>
                      <Badge>{c}</Badge>
                    </Fragment>
                  ))}
                </HStack>
              </Td>
              <Td p={3} isNumeric>
                <Flex mr={2} display="inline-flex">
                  {b.data.github && (
                    <Link
                      ml={2}
                      href={b.data.github}
                      isExternal
                      aria-label={`${b.data.title}`}
                    >
                      <FaGithub size="20px" />
                    </Link>
                  )}
                  {b.data.external && (
                    <Link
                      ml={2}
                      href={b.data.external}
                      isExternal
                      aria-label={`${b.data.title}`}
                    >
                      <FaExternalLinkAlt size="20px" />
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
