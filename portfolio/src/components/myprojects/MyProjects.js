import "./MyProjects.css";
import { motion } from "framer-motion";
import code_saga from "../../assets/code-saga.png";
import code_saga_web from "../../assets/code-saga-web.png";
import git from "../../assets/git.png";
import download from "../../assets/download.png";
import webpage from "../../assets/webpage.png";

export default function MyProjects() {
  const createFadeInAnimation = (delay) => ({
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  });

  const fadeInAnimation = createFadeInAnimation(0);
  const fadeInAnimationBox1 = createFadeInAnimation(0.2);
  const fadeInAnimationBox2 = createFadeInAnimation(0.4);
  const fadeInAnimationBox3 = createFadeInAnimation(0.6);

  return (
    <section className="myprojects">
      <div className="inner_myprojects">
        <motion.div
          className="title_myprojects"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>MY PROJECTS</p>
        </motion.div>
        <div className="content_myprojects">
          <motion.div
            className="project1"
            variants={fadeInAnimationBox1}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div>
              <div>
                <img src={code_saga} alt="code saga" className="code_saga" />
              </div>
              <div className="saga-title">
                <p>
                  <span className="game_title"> Code Saga </span> <br /> 2D
                  rpg/quiz game about c++ fundamentals
                </p>
              </div>
            </div>

            <div className="code_saga_link">
              <div className="logo_div">
                <a
                  href="https://github.com/ReynielMahinay/code-saga"
                  target="_blank"
                  className="logo_git"
                >
                  <img src={git} alt="git" className="git_logo" />
                  source code
                </a>
              </div>

              <div className="logo_div">
                <a
                  href="https://www.mediafire.com/file/e7b860cdopus5nd/Game.rar/file"
                  target="_blank"
                  className="logo_git"
                >
                  <img src={download} alt="download" className="git_logo" />
                  download
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="project1"
            variants={fadeInAnimationBox2}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div>
              <div>
                <img
                  src={code_saga_web}
                  alt="code saga"
                  className="code_saga_web"
                />
              </div>
              <div className="saga-title">
                <p>
                  <span className="game_title"> Code Saga Website </span> <br />{" "}
                  Website for out project
                </p>
              </div>
            </div>

            <div className="code_saga_link">
              <div className="logo_div">
                <a
                  href="https://github.com/ReynielMahinay/code-saga-web"
                  target="_blank"
                  className="logo_git"
                >
                  <img src={git} alt="git" className="git_logo" />
                  source code
                </a>
              </div>

              <div className="logo_div">
                <a
                  href="https://code-saga.vercel.app/"
                  target="_blank"
                  className="logo_git"
                >
                  <img src={webpage} alt="download" className="git_logo" />
                  visit
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="project1"
            variants={fadeInAnimationBox3}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p>Upcoming!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
