import "./MyProjects.css";
import { motion } from "framer-motion";

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
            <p>Upcoming!</p>
          </motion.div>
          <motion.div
            className="project1"
            variants={fadeInAnimationBox2}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p>Upcoming!</p>
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
