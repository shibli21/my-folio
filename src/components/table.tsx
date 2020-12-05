import { Badge, Box, chakra, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ArchiveProjects } from "../pages/archive";
import styles from "../style/table.scss";

interface TableProps {
  data?: [ArchiveProjects];
}

const Table = ({ data }: TableProps) => {
  if (!data) {
    return <h1>ad</h1>;
  }

  return (
    <Box className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <chakra.th
              display={["none", "table-cell", "table-cell", "table-cell"]}
            >
              Built with
            </chakra.th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((b) => (
            <tr>
              <chakra.td data-label="Year" w={["auto", "auto", "60px", "60px"]}>
                {b.data.date.slice(-4)}
              </chakra.td>
              <td data-label="Title">{b.data.title}</td>
              <chakra.td
                display={["none", "table-cell", "table-cell", "table-cell"]}
                data-label="Built with"
              >
                <HStack>
                  {b.data.tech.map((c) => (
                    <Badge>{c}</Badge>
                  ))}
                </HStack>
              </chakra.td>
              <td data-label="Link">
                <Flex justify="center" pt={2}>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
