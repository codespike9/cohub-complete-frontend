import { useEffect, useState } from "react";
import "./displayToggle.css";
import userApiService from "../../../apiServices/user.apiService";

const DisplayToggle = () => {

  const [projects, setProjects] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    userApiService.fetchProjects().then((data) => setProjects(data));
    userApiService.fetchBookedProducts().then((data) => setProducts(data));
  }, []);

  const [showProducts, setShowProducts] = useState(true);
  const [activeButton, setActiveButton] = useState("products");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowProducts(buttonName === "products");
  };
  
  return (
    <div className="text-white font-outfit p-8 mt-10 container">
      <div className="flex justify-start items-center mb-4">
        <div>
          <button
            className={`px-4 py-2 font-roboto-mono text-xl rounded-md transition-all ${activeButton === "products" ? " text-[#66fcf1]" : "text-white"
              }`}
            onClick={() => handleButtonClick("products")}
          >
            Booked Products
          </button>
          <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
        </div>

        <div className=" w-1 h-6 bg-lilac"></div>
        <button
          className={`px-4 py-2 font-roboto-mono text-xl rounded-md transition-all ${activeButton === "projects" ? " text-[#66fcf1]" : "text-white"
            }`}
          onClick={() => handleButtonClick("projects")}
        >
          My Projects
        </button>
      </div>

      {showProducts ? (
        <div className="container"> {/* Added container */}
          <ul className="mt-4">
            {products.map((product) => (
              <li
                key={product.id}
                className="mb-4 transition duration-300 ease-in-out hover:scale-105 bg-[#D9D9D91A] p-4 rounded-md shadow-md"
              >
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p>Starting Date: {new Date(product.booking_date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="container"> {/* Added container */}
          <ul className="mt-4">
            {projects.map((project, index) => (
              <li
                key={index}
                className="mb-4 transition duration-300 ease-in-out hover:scale-105 bg-[#D9D9D91A] p-4 rounded-md shadow-md"
              >
                <h3 className="text-lg font-medium">{project.name}</h3>
                <p>Starting Date: {new Date(project.startedAt).toLocaleDateString()}</p>
                <p>Type: {project.type}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DisplayToggle;
