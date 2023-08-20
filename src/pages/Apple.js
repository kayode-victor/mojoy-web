import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../features/product/productSlice";
import wish from "../images/wish.svg";
import { addToWishlist } from "../features/product/productSlice";
import view from "../images/view.svg";
import { Modal } from "react-bootstrap";

const Apple = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productState = useSelector((state) => state?.product?.product);

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const addToWish = (id) => {
    alert(id);
    dispatch(addToWishlist(id));
  };
  //filter
  const brand = "apple";

  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  //sort
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let category = [];
    let newtags = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      category.push(element.category);
      newtags.push(element.tags);
    }
    setCategories(category);
    setTags(newtags);
  }, [productState]);
  useEffect(() => {
    const getProducts = () => {
      dispatch(
        getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
      );
    };
    getProducts();
  }, [brand, category, dispatch, maxPrice, minPrice, sort, tag]);

  const handleResetFilters = () => {
    // Reset the filters to their initial values or null

    setCategory(null);
    setMinPrice(null);
    setMaxPrice(null);
    setSort(null);
    setTag(null);
  };

  const [showModal, setShowModal] = useState(false);

  const handleFilterClick = () => {
    setShowModal(true); // Show the modal when the "Filter" button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal when needed
  };
  const ads = [
    "https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png",
    "https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png",
    "https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png",
  ];
  return (
    <>
      <Meta title={"Apple"} />
      <BreadCrumb title="Apple" />
      <div className="laptop-view">
        <Container class1="banner-wrapper home-wrapper-2 py-1">
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img
                      src="https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="10000">
                    <img
                      src="https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="10000">
                    <img
                      src="https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
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
                  data-bs-target="#carouselExampleCaptions"
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
          </div>
        </Container>
        <Container class1="store-wrapper home-wrapper-2 py-2">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    {categories &&
                      [...new Set(categories)].map((item, index) => {
                        return (
                          <li key={index} onClick={() => setCategory(item)}>
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                        onClick={(e) => setMinPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                        onClick={(e) => setMaxPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => setTag(item)}
                            className="tag badge bg-light  text-secondary rounded-3 py-2 px-1"
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              <button className="button-2" onClick={handleResetFilters}>
                Reset Filters
              </button>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10 mb-0">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select
                      name=""
                      onChange={(e) => setSort(e.target.value)}
                      className="form-control form-select"
                      id=""
                    >
                      <option value="title">Alphabetically, A-Z</option>
                      <option value="price">Price, Low to High</option>
                      <option value="created">Date, Old to New</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products  my-2">
                      {productState.length} products
                    </p>
                  </div>
                </div>
              </div>
              <div className="products-list py-3">
                <div className="d-flex flex-wrap  gap-15">
                  {productState && productState?.length === 0 && (
                    <div className="text-center">
                      <h3>No Items</h3>
                    </div>
                  )}
                  {productState &&
                    productState.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="align-items-center p-2"
                          style={{ width: "310px" }}
                        >
                          <div className="product-card position-relative bg-white">
                            <div className="product-img">
                              <img
                                src={item?.images[0].url}
                                className="img-fluid w-100"
                                alt="productImage"
                              />
                              <img
                                src={item?.images[1].url}
                                className="img-fluid w-100"
                                alt="productImage"
                              />
                            </div>
                            <div className="product-details">
                              <h5 className="product-title">
                                {item?.title.substr(0, 30) + "..."}
                              </h5>

                              <p className="price text-dark">₦ {item?.price}</p>
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
                                    onClick={() =>
                                      navigate("/product/" + item?._id)
                                    }
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        <div className="banner">
          <Marquee className="">
            {ads.map((ads, index) => (
              <img
                key={index}
                src={ads}
                alt={`Ads ${index}`}
                style={{ height: "200px" }}
                className="d-inline-block w-100"
              />
            ))}
          </Marquee>
        </div>
        <div>
          <div className=" d-flex flex-column align-items-center">
            <div className="filter-sort-grid mb-3 ">
              <div className="d-flex align-items-center gap-30">
                <div className="d-flex align-items-center mb-0">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    onChange={(e) => setSort(e.target.value)}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="price">Price, Low to High</option>
                    <option value="created">Date, Old to New</option>
                  </select>
                </div>
                <div>
                  <button
                    className="button"
                    onClick={handleFilterClick} // Open the modal when the "Filter" button is clicked
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="products-list py-3">
              <div className="d-flex flex-wrap gap-15">
                {productState && productState?.length === 0 && (
                  <div className="text-center">
                    <h3>No Items</h3>
                  </div>
                )}
                <div className="row gap-20">
                  {productState &&
                    productState.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex flex-column align-items-center gap-2"
                        >
                          <div className="product-card card-size-2 position-relative bg-white">
                            <div className="product-img ">
                              <img
                                src={item?.images[0].url}
                                className="img-fluid w-100"
                                alt="productImage"
                              />
                              <img
                                src={item?.images[1].url}
                                className="img-fluid w-100"
                                alt="productImage"
                              />
                            </div>
                            <div className="product-details">
                              <h4 className="product-title">
                                {item?.title.substr(0, 30) + "..."}
                              </h4>

                              <h4 className="price text-dark">
                                ₦ {item?.price}
                              </h4>
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
                                    onClick={() =>
                                      navigate("/product/" + item?._id)
                                    }
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
                </div>
              </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} className="pt-5">
              <Modal.Header closeButton>
                <Modal.Title>Filter By:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                        onClick={(e) => setMinPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                        onClick={(e) => setMaxPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Category</h5>
                  <div>
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Select Category</option>

                        {categories &&
                          [...new Set(categories)].map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                      </select>
                      <label htmlFor="floatingSelectGrid">
                        Select Category
                      </label>
                    </div>
                  </div>

                  <div className="filter-card mb-3">
                    <h3 className="filter-title">Product Tags</h3>
                    <div>
                      <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        {tags &&
                          [...new Set(tags)].map((item, index) => {
                            return (
                              <span
                                key={index}
                                onClick={() => setTag(item)}
                                className="tag badge bg-light  text-secondary rounded-3 py-2 px-1"
                              >
                                {item}
                              </span>
                            );
                          })}
                      </div>
                    </div>
                    <p className="total-products  my-2">
                      {productState.length} products
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="d-flex gap-30 justify-content-between">
                  <button className="button" onClick={handleResetFilters}>
                    Reset Filters
                  </button>
                  <button className="button" onClick={handleCloseModal}>
                    Done
                  </button>
                </div>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apple;
