import Image from "next/image";
import Navbar from "../../components/Navbar";
import Main from "../../components/main";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
