import "./AbouteMe.css";
import GradPic from "../../assets/gradpic.png";
import HTML from "../../assets/html5.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";
import NODEJS from "../../assets/node_js.png";
import REACT from "../../assets/react.png";
import GIT from "../../assets/git.png";
import tailwind from "../../assets/tailwind.png";

import { motion } from "framer-motion";

export default function AboutMe() {
  const fadeInAnimation = {
    initial: {
      opacity: 0.5,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        bounce: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="aboutme">
      <motion.div
        className="inner_about"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="gradpic">
          <img src={GradPic} alt="grad pic" />
        </div>
        <div className="about_content">
          <div className="introduction">
            <div className="title_about">
              <p>ABOUT ME</p>
            </div>
            <p className="info">
              Hello, I am Reyniel T. Mahinay based in Hagonoy, Bulacan The
              Philippines. I am a Graduate of a Bachelor of Science in
              Information Technology, Where our capstone project was chosen as
              the best capstone. It was a 2D RPG game, created using Unity with
              C# and I am one of the developers. But my real goal was to be a
              <span> Front-end Developer </span> with a passion for developing
              clean, attractive, and responsive with great functions websites.
            </p>
          </div>
          <div className="title_tech">
            <p>Tech Stacks</p>
          </div>
          <div className="techstacks">
            <div className="html">
              <img src={HTML} alt="HTML 5" />
            </div>
            <div className="css">
              <img src={CSS} alt="CSS" />
            </div>
            <div className="javascript">
              <img src={JS} alt="JavaScript" />
            </div>
            <div className="node_js">
              <img src={NODEJS} alt="Node JS" />
            </div>
            <div className="react">
              <img src={REACT} alt="React JS" />
            </div>
            <div className="git">
              <img src={GIT} alt="Git" />
            </div>
            <div className="git">
              <img src={tailwind} alt="Git" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
