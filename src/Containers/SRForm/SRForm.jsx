// import React from "react";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useState, useEffect } from "react";
import getBearerToken from "../../Helper/getBearerToken";
import userApiService from "../../../apiServices/user.apiService";
import axios from "axios";

const SRForm = () => {

  const [productInfo, setProductInfo] = useState({
    name: "",
    type: "",
    description: "",
    selling_price: "",
    rentPrice_perDay: "",
    longitude: "",
    latitude: "",
    image: null,
    video: null,
  });

  const { loggedIn } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({
      ...productInfo,
      [name]: value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductInfo({
      ...productInfo,
      image: file
    });
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setProductInfo({ ...productInfo, video: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', productInfo.name);
      formData.append("type", productInfo.type);
      formData.append("description", productInfo.description);
      formData.append("selling_price", productInfo.selling_price);
      formData.append("rentPrice_perDay", productInfo.rentPrice_perDay);
      formData.append("pickup_location", JSON.stringify({
        type: 'Point',
        coordinates: [parseFloat(productInfo.longitude), parseFloat(productInfo.latitude)]
      }));
      formData.append("image", productInfo.image);
      formData.append("video", productInfo.video);

      console.log(productInfo.selling_price);
      const response = await axios.post(
        `${userApiService.api}/addProduct`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getBearerToken()}`,
          },
        }
      );
      console.log(response.data);
      // Reset form fields after successful submission
      setProductInfo({
        name: "",
        type: "",
        description: "",
        selling_price: "",
        rentPrice_perDay: "",
        longitude: "",
        latitude: "",
      });
      navigate('/dashboard');
    } catch (error) {
      console.error("Error in srform:", error);
    }
  };

  return (
    <div className="main_container ">
      <div className="form_container">
        <p className="form_heading">
          Fill the form below to sell or rent your product
        </p>
        <form className="form_container_main" onSubmit={handleSubmit}>
          <div className="product_details">
            <div className="product_details_heading">
              <div className="product_details_heading-logo">
                <img src={one} alt="" />
              </div>
              <div className="product_details_heading-text">
                <p>Product Details</p>
              </div>
            </div>
            <div className="product_details_input">
              <div className="type_productname">
                <div className="product_name">
                  <input type="text" onChange={handleInputChange} name="name" placeholder="Product Name" required />
                </div>
                <div className="product_type">
                  <input type="text" onChange={handleInputChange} name="type" placeholder="Product Type" required />
                </div>
              </div>
              <div className="product_description">
                <textarea
                  className="product_description_text"
                  placeholder="Product Description"
                  cols={25}
                  name="description"
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="price_image">
                <div className="price">
                  <input type="text" onChange={handleInputChange} name="selling_price" placeholder="Enter Selling Price" required />
                </div>
              </div>
              <div className="price_image">
                <div className="price">
                  <input type="text" onChange={handleInputChange} name="rentPrice_perDay" placeholder="Enter Renting/Day" required />
                </div>
              </div>
              <div className="pickup_location">
                <input type="text" name="latitude" onChange={handleInputChange} placeholder="Latitude" required />
              </div>
              <div className="pickup_location">
                <input type="text" name="longitude" onChange={handleInputChange} placeholder="Longitude" required />
              </div>
              <div className="product_image">
                <label>Upload image </label>
                <input type="file" name="image" onChange={handleImageUpload} accept="image/png, image/jpeg" required />
              </div>
              <div className="product_video">
                <label>Upload video </label>
                <input type="file" name="video" onChange={handleVideoUpload} accept="video" />
              </div>
            </div>
          </div>
          {/* <div className="radio">
            <div className="radio_sell">
              <input type="radio" id="radio_sell_text" name="radio_btn" />
              <label htmlFor="radio_sell_text">Sell</label>
            </div>
            <div className="radio_rent">
              <input type="radio" id="radio_rent_text" name="radio_btn" />
              <label htmlFor="radio_rent_text">Rent</label>
            </div>
          </div> */}
          <div className="submit">
            <button className="submit_btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SRForm;
