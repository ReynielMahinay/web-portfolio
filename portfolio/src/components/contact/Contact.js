import "./Contact.css";
import Lottie from "lottie-react";
import envelope from "../../assets/envelope.json";
import Email from "../../assets/email.png";
import Linkedin from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import { motion } from "framer-motion";
export default function Contact() {
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

  const FadeInAnimationTitle = createFadeInAnimation(0.2);
  const FadeInAnimationIntro = createFadeInAnimation(0.4);
  const FadeInAnimationContactList = createFadeInAnimation(0.6);
  const fadeInAnimationEnvelope = createFadeInAnimation(0.8);

  return (
    <section className="contact">
      <div className="inner_contact">
        <motion.div
          className="title_contact"
          variants={FadeInAnimationTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>LET'S CONNECT</p>
        </motion.div>
        <motion.div
          className="contact_intro"
          variants={FadeInAnimationIntro}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            Got a question or proposal, or just want to say hello? <br />
            <span className="go">Go ahead.</span>
          </p>
        </motion.div>
        <div className="contact_content">
          <motion.div
            className="contact_list"
            variants={FadeInAnimationContactList}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="contact_display">
              <div className="contact_email">
                <img src={Email} alt="Email" />
                <p>reyniel.mahinay@gmail.com</p>
              </div>
              <div className="lk">
                <a
                  href="
          https://www.linkedin.com/in/reyniel-mahinay-20327028a/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact_linkedin"
                >
                  <img src={Linkedin} alt="Linkedin" />
                  <p>linkedin</p>
                </a>
              </div>
              <div className="contact_facebook">
                <a
                  href="https://www.facebook.com/knoxx00/"
                  target="_blank"
                  rel="noreferrer"
                  className="fb"
                >
                  <img src={Facebook} alt="Facebook" />
                  <p>facebook</p>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="animation_contact"
            variants={fadeInAnimationEnvelope}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Lottie animationData={envelope} className="envelope" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
