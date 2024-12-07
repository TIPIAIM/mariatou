import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animate } from "popmotion";
import AOS from "aos";
import "aos/dist/aos.css";

import Telephone from "./Telephonenav";
import Fond from "./Fond";
import BardeNavigation from "./BardeNavigation";
import Footercopyright from "./Piedpage/Footercopyright";
import Liensoci from "./Liensoci";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const { ref: navbarRef, inView: navbarInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (navbarInView) {
      animate({
        from: 0,
        to: 1,
        duration: 1000,
        onUpdate: (latest) => {
          document.getElementById("navbar").style.opacity = latest;
        },
      });
    }
  }, [navbarInView]);

  return (
    <div>
      <Telephone />
      <motion.div
        id="navbar"
        ref={navbarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: navbarInView ? 1 : 0 }}
      >
        <BardeNavigation />
      </motion.div>
      <Liensoci />
      <div data-aos="fade-up">
        <Fond />
      </div>
      <Footercopyright />
    </div>
  );
};

export default Home;
