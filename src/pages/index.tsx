import AboutMe from "../components/AboutMe";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Head from "next/head";
import Logo from "../../public/logo.svg";

const Index = () => (
  <>
    <Head>
      <title>shibli</title>
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

export default Index;
