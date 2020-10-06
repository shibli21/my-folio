import AboutMe from "../components/AboutMe";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const Index = () => (
  <>
    <Container height="100vh">
      <NavBar />
      <Hero />
      <Projects />
      <AboutMe />
      <Footer>Designed & Developed by Syed Shibli Mahmud</Footer>
    </Container>
  </>
);

export default Index;
