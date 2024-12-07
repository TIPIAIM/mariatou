import { Link } from "react-router-dom";
const Telephone = () => {
  // Fonction pour ouvrir le numéro de téléphone dans l'application de numérotation par défaut
  const handlePhoneClick = () => {
    window.location.href = "tel:+212770471461";
  };

  return (
    <nav className="bg-gray-900 p-2 font-bold text-white">
      <div className=" mx-auto flex justify-between items-center">
        <div className="">
          <Link
            to="/pagedechoix"
            className="ml-4 no-underline font-serif font-bold animate-ping hover:text-white"
          >
            Se connecter comme client{" "}
          </Link>
        </div>

        <div className="  px-1 mx-3 md:flex items-center space-x-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={handlePhoneClick}
          >
            <span className="">&#9742;</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Telephone;
