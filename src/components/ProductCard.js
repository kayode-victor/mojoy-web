import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/product/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  if (!Array.isArray(data)) {
    return null; // or return a loading state, error message, etc.
  }
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <div className="product-card position-relative bg-white">
              <div className="product-img">
                {grid === 12 && (
                  <>
                    <img
                      src={item?.images[0].url}
                      className="img-fluid"
                      alt="productImage"
                      style={{ width: "300px", height: "300px" }}
                    />
                    <img
                      src={item?.images[1].url}
                      className="img-fluid"
                      alt="productImage"
                      style={{ width: "300px", height: "300px" }}
                    />
                  </>
                )}
                {grid !== 12 && (
                  <>
                    <img
                      src={item?.images[0].url}
                      className="img-fluid"
                      alt="productImage"
                    />
                    <img
                      src={item?.images[1].url}
                      className="img-fluid"
                      alt="productImage"
                    />
                  </>
                )}
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">
                  {item?.title.substr(0, 30) + "..."}
                </h5>
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: item?.description.substr(0, 300) + "...",
                  }}
                ></p>
                <p className="price text-dark">₦{item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="circular-button">
                    <img
                      src={wish}
                      alt="wishlist"
                      onClick={(e) => {
                        addToWish(item?._id);
                      }}
                    />
                  </button>

                  <button className="circular-button">
                    <img
                      onClick={() => navigate("/product/" + item?._id)}
                      src={view}
                      alt="view"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
