import Navbar from "./components/navbar/page";
import Introduction from "./components/introduction/page";
import About from "./components/about/page";
import Projects from "./components/projects/page";
import Contact from "./components/contact/page";

const Home = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </>
      
  );
}

export default Home;