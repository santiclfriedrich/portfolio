import Navbar from "./components/navbar/page";
import Introduction from "./components/introduction/page";
import About from "./components/about/page";
import Projects from "./components/projects/page";

const Home = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
    </>
      
  );
}

export default Home;