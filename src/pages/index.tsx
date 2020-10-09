import AboutMe from "../components/AboutMe";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Head from "next/head";
import Logo from "../../public/logo.svg";
import { GetStaticProps } from "next";
import matter from "gray-matter";

interface IndexProps {
  title: string;
  description: string;
  data: any;
}

const Index: React.FC<IndexProps> = ({ title, description, data }) => {
  const RealData = data.map((blog: any) => matter(blog));
  console.log("RealData", RealData);

  const ListItems = RealData.map((listItem: { data: any }) => listItem.data);
  console.log("ListItems", ListItems);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
        <link rel="icon" href={Logo} type="image/x-icon" />
      </Head>
      <Container>
        <NavBar />
        <Hero />
        <Projects />
        <AboutMe />
        <Footer>Designed & Developed by Syed Shibli Mahmud</Footer>
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const siteData = await import(`../config.json`);
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/src/content`, "utf-8");

  const blogs = files.filter((fn: string) => fn.endsWith(".md"));

  const data = blogs.map((blog: any) => {
    const path = `${process.cwd()}/src/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      title: siteData.title,
      description: siteData.description,
    },
  };
};
