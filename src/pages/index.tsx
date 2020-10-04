import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import NavBar from "../components/NavBar";

const Index = () => (
  <Container height="100vh">
    <NavBar />
    <Hero />
    <Main></Main>
    <Footer></Footer>
  </Container>
);

export default Index;
