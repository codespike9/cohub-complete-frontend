import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./product.css";
import { Navbar } from "../../Components";
import { Footer } from "../../Containers";
import ProductData from "./ProductData";
const Product = () => {
  const [details, setDetails] = useState(null);

  const detailPage = (product) => {
    setDetails(product);
  };

  return (
    <>
      <div className="gradient_bg">
        <Navbar />
        {details && (
          <div className="overlay">
            <div className="detail_container">
              <button className="close" onClick={() => setDetails(null)}>
                <AiFillCloseCircle size={30} />
              </button>
              <div className="detail_content">
                <div className="detail_info">
                  <div className="img-box">
                    <img src={details.Image} alt={details.title} />
                  </div>
                  <div className="product_detail">
                    <h2>{details.title}</h2>
                    <h3>${details.Price}</h3>
                    <p>{details.Description}</p>
                    <button>Buy/Rent</button>
                    <button id="bookNow">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="product__heading">
          <h1>Products</h1>
          <div className="product__line" />
        </div>
        <div className="product_container">
          {ProductData.map((product, index) => (
            <div className="box" key={index}>
              <div className="content">
                <div className="img-box">
                  <img src={product.Image} alt={product.title} />
                </div>
                <div className="details">
                  <div className="info">
                    <h3>{product.title}</h3>
                    <p>${product.Price}</p>
                  </div>
                  <button onClick={() => detailPage(product)}>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
