import Lottie from "lottie-react";
import laptopAnim from "../../assets/laptop.json";
import "./HomePage.css";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";

export default function HomePage() {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 50,
    },
    transition: { type: "spring", bounce: 0.5, duration: 1 },
  };
  return (
    <section className="homepage">
      <motion.div
        className="inner"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <p className="name">Hi, I'm Reyniel Mahinay</p>
        <p className="title">Front-end Developer</p>
        <p className="quote">I code with passion</p>
        <a href={resume} download="Mahinay, Reyniel T" className="downloadbtn">
          <button className="resume">
            Resume
            <svg
              className="download"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z" />
            </svg>
          </button>
        </a>
      </motion.div>
      <div className="animation">
        <Lottie animationData={laptopAnim} />
      </div>
    </section>
  );
}
