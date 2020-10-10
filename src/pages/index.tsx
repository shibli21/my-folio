import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/head";
import Logo from "../../public/logo.svg";
import AboutMe from "../components/AboutMe";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
interface IndexProps {
  title: string;
  description: string;
  featuredProjects: any;
}

const Index: React.FC<IndexProps> = ({
  featuredProjects,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
        <link rel="icon" href={Logo} type="image/shibli-icon" />
      </Head>
      <Container>
        <NavBar />
        <Hero />
        <Projects data={featuredProjects} />
        <AboutMe />
        <Footer>Designed & Developed by Syed Shibli Mahmud</Footer>
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const siteData = await import(`../config.json`);

  const featuredProjects = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value: any = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../content/featured", true, /\.md$/));

  return {
    props: {
      featuredProjects,
      title: siteData.title,
      description: siteData.description,
    },
  };
};
