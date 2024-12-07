import { Link } from "react-router-dom";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { GiTimeBomb } from "react-icons/gi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footercopyright() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <motion.footer
        className="bg-gray-800 font-serif text-white p-16"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Colonne 1  */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Adresse</h3>
              <p>20250 Rue de chabab</p>
              <p>Casablanca, Maroc</p>
            </motion.div>

            {/* Colonne 2 : */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email : moustanaraavocat@cgmail.com</p>
              <p>Téléphone : + (224) 453-2345</p>
            </motion.div>

            {/* Colonne 3 :Ma partie Localisation */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Localisation</h3>
              <Link
                to="https://maps.app.goo.gl/bhFm2muorfyTZ6Ri8"
                className=" text-white flex items-center"
              >
                <FaMagnifyingGlassLocation size={30} className="mr-2" />{" "}
                Casablanca, ain sebaa,
                <br /> place republique
              </Link>
              <br />
              <p className="flex items-center">
                <GiTimeBomb size={30} className="mr-2" /> Lundi - Vendredi :
                09.00 - 18.00
              </p>
            </motion.div>

            {/* Colonne 4 : Informations supplémentaires */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Informations</h3>
              <p>© 2024 Cabinet Maitre oury</p>
              <p>Politique de confidentialité</p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
      <motion.div
        className="bg-gray-950 font-serif text-white p-1 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>&copy; 2024 Cabinet Maitre Amadou oury. Tous droits réservés.</p>
      </motion.div>
    </div>
  );
}
