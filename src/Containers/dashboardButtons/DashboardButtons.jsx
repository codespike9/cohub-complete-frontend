import Pattern from "../../assets/pattern.png";
import { Link } from "react-router-dom";
import Idea from "../../assets/idea.svg";
import Sell from "../../assets/sell.svg";
import Marketplace from "../../assets/marketplace.svg";
import Rent from "../../assets/rent-product.svg";
import "./dashboardButtons.css";

const DashboardButtons = () => {
  return (
    <div>
      <div className="dashboard__header-buttons_container">
        <Link to="/start-project">
          <div className="start_container hover-effect">
            <div className="start-text_container">
              <div className="icon_container">
                <img src={Idea} alt="idea" />
              </div>
              <Link className="start" to="/login">
                Start New Project
              </Link>
            </div>
            <img src={Pattern} alt="Pattern" className="background-pattern" />
          </div>
        </Link>

        <div className="sell-rent_container">
          <div className="sell_container hover-effect">
            <Link className="sell" to="/dashboard/srform">
              <div className="sell-text_container">
                <div className="icon_container">
                  <img src={Sell} alt="sell" />
                </div>
                Sell
              </div>
            </Link>
            <img src={Pattern} alt="Pattern" className="background-pattern" />
          </div>

          <div className="rent_container hover-effect">
            <Link className="rent" to="/dashboard/srform">
              <div className="rent-text_container">
                <div className="icon_container">
                  <img src={Rent} alt="rent" />
                </div>
                Rent
              </div>
            </Link>
            <img src={Pattern} alt="Pattern" className="background-pattern" />
          </div>
        </div>
        <Link to="/products">
          <div className="buy_container hover-effect">
            <div className="buy-text_container">
              <div className="icon_container">
                <img src={Marketplace} alt="marketplace" />
              </div>
              <Link className="buy" to="/products">
                Visit Marketplace
              </Link>
            </div>
            <img src={Pattern} alt="Pattern" className="background-pattern" />
          </div>
        </Link>
        <Link to="/dashboard/my-product">
          <div className="buy_container hover-effect">
            <div className="buy-text_container">
              <div className="icon_container">
                <img src={Marketplace} alt="marketplace" />
              </div>
              <Link className="buy" to="/dashboard/my-product">
                My Products
              </Link>
            </div>
            <img src={Pattern} alt="Pattern" className="background-pattern" />
          </div>
        </Link>
        <Link to="/dashboard/rented-products">
          <div className="buy_container hover-effect">
            <div className="buy-text_container">
              <div className="icon_container">
                <img src={Marketplace} alt="marketplace" />
              </div>
              <Link className="buy" to="/dashboard/rented-products">
                Rented Products
              </Link>
            </div>
            <img src={Pattern} alt="Pattern" className="background-pattern" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardButtons;
