/* eslint-disable no-script-url */
import React, { useState, useEffect } from "react";
import Color from "../components/Color";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, getAProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";
import {
  addProdToCart,
  getUserCart,
  getUserOrder,
} from "../features/user/userSlice";
const Singleproduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];

  const [color, setColor] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const cartState = useSelector((state) => state?.auth?.CartProducts);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    dispatch(getUserOrder());
  }, [dispatch, getProductId]);

  useEffect(() => {
    if (cartState && cartState.length > 0) {
      // Add this conditional check
      for (let index = 0; index < cartState?.length; index++) {
        if (getProductId === cartState[index]?.productId?._id) {
          setAlreadyAdded(true);
          break; // Once found, no need to continue the loop
        }
      }
    }
  }, [cartState, getProductId]);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please choose a color");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <div className="laptop-view">
        <Container class1="main-product-wrapper py-3 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <img
                    src={productState?.images[0]?.url}
                    alt="product"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 justify-content-between">
                {productState?.images.map((item) => {
                  return (
                    <div key={item._id}>
                      <img
                        src={item?.url}
                        alt="product"
                        className="img-fluid w-100"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">₦{productState?.price}</p>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Category : </h3>
                    <p className="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Brands : </h3>
                    <p className="product-data">{productState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Availabity : </h3>
                    <p className="product-data">
                      {productState?.quantity > 0 ? `In Stock` : "Out of Stock"}
                    </p>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  {alreadyAdded === false && (
                    <>
                      <div className="d-flex gap-10 flex-column my-3">
                        <h3 className="product-heading">Color : </h3>
                        <div className="d-flex">
                          <Color
                            setColor={setColor}
                            colorData={productState?.color}
                          />
                          {color && (
                            <AiOutlineCheck className="selected-icon" />
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="d-flex align-items-center gap-15 flex-row my-3">
                    {alreadyAdded === false && (
                      <>
                        <h3 className="product-heading">Quantity : </h3>
                        <div className="d-flex">
                          <input
                            className="form-control"
                            type="number"
                            name=""
                            min={1}
                            max={productState?.quantity}
                            style={{ width: "50px" }}
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                          />

                          {quantity && (
                            <AiOutlineCheck className="selected-icon" />
                          )}
                        </div>
                      </>
                    )}
                    <div className={"d-flex  gap-30 align-items-center ms-5"}>
                      <button
                        className="button border-0"
                        type="button"
                        onClick={() => {
                          alreadyAdded
                            ? navigate("/cart")
                            : uploadCart(productState?._id);
                        }}
                      >
                        {alreadyAdded ? "Go To Cart" : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <div>
                      <Link
                        onClick={(e) => {
                          addToWish(productState?._id);
                        }}
                      >
                        <AiOutlineHeart className="fs-5 mb-0" />
                        Add to WishList
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column">
                    <h3 className="product-heading">Shipping & Return : </h3>
                    <p className="product-data">
                      Shipping and returns available on all orders!
                      <br /> We ship all Nigeria domestic orders within
                      <b> 1-5 business days!</b>
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Share:</h3>
                  <Link
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Copy Product Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container class1="description-wrapper home-wrapper-2 py-2">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3 rounded-3">
                <h4>Description</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        <Container class1="py-2 home-wrapper-3">
          <div className="row">
            <div className="main-product-detail-ms">
              <div className="border-bottom">
                <h6 className="title">{productState?.title}</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {productState?.images.map((item, index) => (
                  <div
                    key={item._id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={item?.url}
                      alt="product"
                      className="d-block w-100"
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="row mx-1">
            <div className="main-product-details-ms border-bottom mt-2 d-flex justify-content-between align-items-center">
              <div className="">
                <p className="price">₦{productState?.price}</p>
              </div>
              <div className="">
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Category : </h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Brands : </h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Availabity : </h3>
                  <p className="product-data">
                    {productState?.quantity > 0 ? `In Stock` : "Out of Stock"}
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between  py-3">
              <div className="">
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10">
                      <h6 className="product-heading mt-2">Select Color : </h6>
                      <Color
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                      {color && <AiOutlineCheck className="selected-icon" />}
                    </div>
                  </>
                )}
              </div>

              <div className="">
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex  gap-10">
                      <h6 className="product-heading mt-2">Set Quantity : </h6>
                      <div className="d-flex">
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          min={1}
                          max={productState?.quantity}
                          style={{ width: "60px" }}
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                        {quantity && (
                          <AiOutlineCheck className="selected-icon" />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <Link
                  onClick={(e) => {
                    addToWish(productState?._id);
                  }}
                >
                  <AiOutlineHeart className="fs-5 mb-0" />
                  Add to WishList
                </Link>
              </div>
              <div className="d-flex align-items-center ms-5">
                <button
                  className="button border-0"
                  type="button"
                  onClick={() => {
                    alreadyAdded
                      ? navigate("/cart")
                      : uploadCart(productState?._id);
                  }}
                >
                  {alreadyAdded ? "Go To Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
            <div className="d-flex gap-10 flex-column">
              <h6 className="product-heading">Shipping & Return : </h6>
              <p className="product-data">
                Shipping and returns available on all orders! We ship all
                Nigeria domestic orders within
                <b> 1-5 business days!</b>
              </p>
            </div>
            <div className="d-flex gap-10 align-items-center my-2">
              <h6 className="product-heading">Share:</h6>
              <Link
                href="javascript:void(0);"
                onClick={() => {
                  copyToClipboard(window.location.href);
                }}
              >
                <p className="pt-3"> Copy Product Link</p>
              </Link>
            </div>
          </div>
        </Container>
        <Container class1="description-wrapper home-wrapper-3 py-2">
          <div className="row">
            <div className="bg-white p-3 rounded-3">
              <h4>Description</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: productState?.description,
                }}
              ></p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Singleproduct;
