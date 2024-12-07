import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animate } from "popmotion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homefond.css";
import "./MarqueeText.css";
import maitre7 from "../assets/Image/maitre7.jpg";

export default function Fond() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-900 text-white min-h-screen">
      <MarqueeText />
    </div>
  );
}

const MarqueeText = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      animate({
        from: 0,
        to: 1,
        duration: 1000,
        onUpdate: (latest) => {
          document.getElementById("marquee-image").style.opacity = latest;
        },
      });
    }
  }, [inView]);

  return (
    <div
      className="container mx-auto mt-8 p-6 bg-gray-800 rounded-lg shadow-xl"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 pr-0 md:pr-8"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={maitre7}
            alt="À propos"
            id="marquee-image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Texte */}
        <div className="w-full md:w-1/2 pl-0 md:pl-8 font-serif text-center md:text-left">
          <ScrollText />
        </div>
      </div>
    </div>
  );
};

const ScrollText = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          Bienvenue chez Maitre Oury
        </h1>
        <p className="text-lg text-gray-400 mb-4">
          Découvrez nos services exceptionnels :
        </p>
        <DefilTextBoucle />
      </motion.div>
    </div>
  );
};

const DefilTextBoucle = () => {
  const texts = [
    "Droit commercial et des affaires",
    "Droit de la famille",
    "Technologie de l'information",
    "Droit du travail",
    "Droit public",
    "Données à caractère personnel",
    "Droit international",
    "Propriété intellectuelle",
    "Droit des marques, brevets",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [currentTextIndex]);

  return (
    <motion.div
      className="text-2xl font-semibold text-blue-400"
      key={currentTextIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {texts[currentTextIndex]}
    </motion.div>
  );
};
