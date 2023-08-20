import React from "react";
import { Link } from "react-router-dom";

const FamousCard = ({ product }) => {
  return (
    <div
      style={{ backgroundColor: product.color }}
      className="famous-card position-relative"
    >
      <Link to={product.link}>
        <img src={product.imageSrc} className="img-fluid" alt="imageposter" />
      </Link>
      <div className="famous-content position-absolute">
        <h5>{product.productName}</h5>
        <h6>{product.description}</h6>
        <p>{product.pricing}</p>
      </div>
    </div>
  );
};

export default FamousCard;
