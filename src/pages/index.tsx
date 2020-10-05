import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const Index = () => (
  <Container height="100vh">
    <NavBar />
    <Hero />
    <Projects />
    <Footer>Designed & Developed by Syed Shibli Mahmud</Footer>
  </Container>
);

export default Index;
