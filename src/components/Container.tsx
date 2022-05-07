import {
  Box,
  Button,
  Container as ChakraContainer,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Moon, Sun } from "tabler-icons-react";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

interface INavItem {
  href: string;
  text: string;
}

function NavItem({ href, text }: INavItem) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <Button
        variant="ghost"
        colorScheme={isActive ? "brand" : undefined}
        fontWeight={isActive ? 600 : 400}
        display={["none", "inline-block"]}
        paddingX={[0, 2]}
      >
        {text}
      </Button>
    </NextLink>
  );
}

interface IContainerProps {
  title?: string;
  description?: string;
  className?: string;
  [key: string]: any;
}

export const Container: React.FC<PropsWithChildren<IContainerProps>> = ({
  children,
  ...customMeta
}) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bg = useColorModeValue("background.primary", "text.primary");

  const meta = {
    title: "Syed Shibli Mahmud – Web & Mobile Application developer.",
    description: `Full-stack developer, JavaScript & Flutter enthusiast`,
    image: "https://syedshiblimahmud.vercel.app/shibli_sq.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical="https://syedshiblimahmud.vercel.app/"
        openGraph={{
          url: "https://syedshiblimahmud.vercel.app/",
          title: "Syed Shibli Mahmud",
          description: meta.description,
          images: [
            {
              url: meta.image,
              width: 400,
              height: 400,
              alt: "Syed Shibli Mahmud",
              type: "image/png",
            },
            {
              url: meta.image,
              width: 400,
              height: 400,
              alt: "Syed Shibli Mahmud",
              type: "image/png",
            },
          ],
          site_name: "Syed Shibli Mahmud",
        }}
        twitter={{
          handle: "@shibli21",
          site: "@shibli21",
          cardType: "summary_large_image",
        }}
      />
      <Box
        backdropFilter="blur(8px)"
        bg={bg}
        top={0}
        zIndex="sticky"
        pos="sticky"
        px={4}
      >
        <Box maxW="container.lg" mx="auto">
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            w="full"
            pos="relative"
            direction={["row-reverse", "row"]}
            zIndex={1}
            py={4}
          >
            <Box>
              <MobileMenu />
              <NavItem href="/" text="Home" />
              <NavItem href="/projects" text="Projects" />
            </Box>
            <HStack>
              <Button as={ChakraLink} href="/pdf/shibli-resume.pdf" download>
                Resume
              </Button>

              <IconButton
                icon={
                  colorMode === "light" ? <Moon size={16} /> : <Sun size={16} />
                }
                aria-label="Toggle Dark Mode"
                onClick={() => toggleColorMode()}
              />
            </HStack>
          </Flex>
        </Box>
      </Box>
      <ChakraContainer maxW="container.lg">
        <Stack
          spacing={[10, 20]}
          as="main"
          id="skip"
          flexDir="column"
          justify="center"
        >
          {children}
          <Footer />
        </Stack>
      </ChakraContainer>
    </>
  );
};
