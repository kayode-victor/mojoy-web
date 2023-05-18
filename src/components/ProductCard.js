import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ||
          location.pathname.startsWith("/hp") ||
          location.pathname.startsWith("/asus") ||
          location.pathname.startsWith("/dell") ||
          location.pathname.startsWith("/lenovo") ||
          location.pathname.startsWith("/apple")
            ? `gr-${grid}`
            : "col-3"
        }`}
      >
        <Link
          to={`${location.pathname === "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon  position-absolute">
            <button className="border-0 bg-white">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-img w-100 align-items-center">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81qy1BWunvL._AC_UL600_SR600,600_.jpg"
              className="img-fluid"
              alt="productImage"
            />
            <img
              src="https://www.laptop.lk/wp-content/uploads/2022/03/Hp-Omen-16-b0234TX-03.jpg"
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">hp</h6>
            <h5 className="product-title">Hp Omen 16 - B0234TX (i7)</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              You’ve got places to go, plays to make, and power to proclaim.
              With the OMEN by HP 15 Laptop, you can play at your best from
              anywhere - without sacrificing performance. Keep moving and
              improving your skills on a compact, portable rig designed to
              deliver desktop-class graphics performance, total immersion, and
              easy upgradability.....
            </p>
            <p className="price text-dark">₦750,000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-10">
              <button className="border-0 bg-white">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-white">
                <img src={addcart} alt="addcartiew" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
