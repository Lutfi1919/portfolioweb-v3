import "./Main.css";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Education from "../Education/Education.jsx";
import SkillsAndTools from "../Skills/Skills.jsx";
import Certificates from "../Certi/Certificate.jsx";
import Projects from "../Project/Project.jsx";
import ContactForm from "../Contact/ContactMe.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="">
          <AboutMe />
        </div>

        <div className="" data-aos="fade">
          <Education />
        </div>

        <div className="" data-aos="fade">
          <SkillsAndTools />
        </div>

        <div className="">
          <Projects />
        </div>

        <div className="">
          <Certificates />
        </div>

        <div className="" data-aos="fade" data-aos-offset="300">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Main;
