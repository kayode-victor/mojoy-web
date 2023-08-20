import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { services, bannerdata } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import moment from "moment";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import { addToWishlist } from "../features/product/productSlice";
import { getAllProducts } from "../features/product/productSlice";
import { getProductCategories } from "../features/pcategory/pcategorySlice";
import view from "../images/view.svg";
import { Carousel } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  const pCategorystate = useSelector((state) => state?.pcategory?.pCategories);

  useEffect(() => {
    const getBlogsAndProducts = () => {
      dispatch(getAllBlogs());
      dispatch(getAllProducts());
      dispatch(getProductCategories());
    };
    getBlogsAndProducts();
  }, [dispatch]);

  const addToWish = (id) => {
    alert(id);
    dispatch(addToWishlist(id));
  };
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardWidth = 320; // Adjust card width to match your design

  const handleScroll = (scrollAmount) => {
    const newScrollLeft = scrollLeft + scrollAmount;
    if (containerRef.current) {
      containerRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  };
  return (
    <>
      <div className="laptop-view">
        <Container class1="home-wrapper-1">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative py-5">
                <img
                  src={bannerdata.mainBanner.imageSrc}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>{bannerdata.mainBanner.title}</h4>
                  <h5>{bannerdata.mainBanner.subtitle}</h5>
                  <p>
                    {bannerdata.mainBanner.price
                      .split("\n")
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                  <Link className="button">
                    {bannerdata.mainBanner.buttonText}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center py-5">
                {bannerdata.smallBanners.map((banner, index) => (
                  <div className="small-banner position-relative" key={index}>
                    <img
                      src={banner.imageSrc}
                      className="img-fluid rounded-3"
                      alt="small banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>{banner.title}</h4>
                      <h5>{banner.subtitle}</h5>
                      <p>
                        {banner.price.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <Container class1="home-wrapper-2 px-1 py-1">
          <div className="row">
            <div className="overflow-auto">
              <Container class1="">
                <div className="d-flex flex-nowrap">
                  {services?.map((i, j) => (
                    <div
                      className="d-flex align-items-center gap-20 service-item"
                      key={j}
                    >
                      <img src={i.image} alt="services" />
                      <div className="" style={{ width: "200px" }}>
                        <h6>{i.title}</h6>
                        <div className="service-tagline">
                          <p>{i.tagline}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </div>
          </div>
        </Container>
        <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h4 className="section-heading">Categories</h4>
            </div>
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                {pCategorystate &&
                  pCategorystate.map((item, index) => {
                    return (
                      <div
                        key={index}
                        id={item?._id}
                        className="py-2 text-center d-flex flex-column align-items-center mb-3"
                        style={{ flex: "0 0 200px", height: "200px" }} // Adjust the width as needed
                      >
                        <img
                          src={item?.images[0].url}
                          className="w-50 h-50 my-2"
                          alt={item?.title}
                        />
                        <div>
                          <h5>{item?.title}</h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </Container>
        <Container class1="popular-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h4 className="section-heading-1">Popular Products</h4>
            </div>
            <div className="d-flex gap-20">
              {productState &&
                productState
                  .filter((item) => item.tags === "Popular")
                  .slice(0, 4) // Show only the first 4 popular products
                  .map((item, index) => {
                    if (item.tags === "Popular") {
                      return (
                        <div
                          key={index}
                          className="align-items-center border"
                          style={{ width: "300px" }}
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
                              <h6 className="brand">{item?.brand}</h6>
                              <h4 className="product-title">
                                {item?.title.substr(0, 30) + "..."}
                              </h4>

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
                    }
                  })}
            </div>
          </div>
        </Container>
        <Container class1="marquee-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="mt-4"
                      src="https://cdn.cdnlogo.com/logos/h/13/hp.png"
                      style={{ width: "100px" }}
                      alt="brands"
                    />
                  </div>
                  <div className="mt-5 w-25">
                    <img
                      className="mt-3"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png"
                      style={{ width: "100px" }}
                      alt="brands"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </Container>
        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Top Blogs</h3>
            </div>
          </div>
          <div className="row">
            {Array.isArray(blogState) && blogState?.length === 0 && (
              <div className="text-center">
                <h3>No Blogs</h3>
              </div>
            )}

            {Array.isArray(blogState) &&
              blogState
                .slice() // Create a shallow copy of the blogState array
                .sort((a, b) => b.numViews - a.numViews) // Sort the copied array by numViews in descending order
                .slice(0, 4) // Get the top 8 blogs
                .map((item, index) => (
                  <div className="col-3 mb-3" key={index}>
                    <BlogCard
                      height="450px"
                      date={moment(item?.createdAt).format("MMM Do YY")}
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0].url}
                    />
                  </div>
                ))}
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        <Container class1="home-wrapper-1">
          <div>
            <div className="main-banner position-relative py-3">
              <img
                src={bannerdata.mainBanner.imageSrc}
                className="img-fluid"
                alt="main banner"
              />
              <div className="main-banner-content-m position-absolute">
                <h4>{bannerdata.mainBanner.title}</h4>
                <h5>{bannerdata.mainBanner.subtitle}</h5>
                <p>
                  {bannerdata.mainBanner.price
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </div>
            </div>
            <div>
              <div className=" position-relative py-3">
                <Carousel interval={3000} controls={true} indicators={false}>
                  {bannerdata.smallBanners.map((banner, index) => (
                    <Carousel.Item key={index}>
                      <div className=" position-relative">
                        <img
                          src={banner.imageSrc}
                          className="img-fluid w-100"
                          alt="small banner"
                        />
                        <div className="small-banner-content position-absolute">
                          <h4>{banner.title}</h4>
                          <h5>{banner.subtitle}</h5>
                          <p>
                            {banner.price.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </Container>
        <div className="overflow-auto">
          <Container class1="">
            <div className="d-flex flex-nowrap">
              {services?.map((i, j) => (
                <div
                  className="d-flex align-items-center gap-20 service-item"
                  key={j}
                >
                  <img src={i.image} alt="services" />
                  <div className="" style={{ width: "200px" }}>
                    <h6>{i.title}</h6>
                    <div className="service-tagline">
                      <p>{i.tagline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
        <Container class1="home-wrapper-2 py-4">
          <div>
            '<h4 className="section-heading-1"> Categories</h4>
          </div>
          <div className="categories d-flex flex-wrap justify-content-between align-items-center">
            {pCategorystate &&
              pCategorystate.map((item, index) => {
                return (
                  <div
                    key={index}
                    id={item?._id}
                    className=" text-center d-flex flex-column align-items-center"
                    style={{ flex: "0 0 150px", height: "150px" }} // Adjust the width as needed
                  >
                    <img
                      src={item?.images[0].url}
                      className="w-50 h-50 my-2"
                      alt={item?.title}
                    />
                    <div>
                      <h5>{item?.title}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
        <Container class1="popular-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="">
              <h4 className="section-heading-1">Popular Products</h4>
            </div>
            <div className="row gap-20">
              {productState &&
                productState
                  .filter((item) => item.tags === "Popular")
                  .slice(0, 4) // Show only the first 4 popular products
                  .map((item, index) => {
                    if (item.tags === "Popular") {
                      return (
                        <div
                          key={index}
                          className="d-flex flex-column align-items-center"
                          width="250px"
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
                              <h6 className="brand">{item?.brand}</h6>
                              <h4 className="product-title">
                                {item?.title.substr(0, 30) + "..."}
                              </h4>

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
                                  <img src={addcart} alt="addcartview" />
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
                    }
                  })}
            </div>
          </div>
        </Container>
        <Container class1="marquee-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="mt-4"
                      src="https://cdn.cdnlogo.com/logos/h/13/hp.png"
                      style={{ width: "100px" }}
                      alt="brands"
                    />
                  </div>
                  <div className="mt-5 w-25">
                    <img
                      className="mt-3"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png"
                      style={{ width: "100px" }}
                      alt="brands"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </Container>
        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="d-flex justify-content-between py-3">
              <div className="">
                <h4 className="section-heading-1">Top Blogs</h4>
              </div>
              <div className="slider-controls d-flex">
                <button
                  className="button-3"
                  onClick={() => handleScroll(-cardWidth)}
                >
                  <FiChevronLeft />
                </button>
                <button
                  className="button-3"
                  onClick={() => handleScroll(cardWidth)}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {Array.isArray(blogState) && blogState?.length === 0 && (
              <div className="text-center">
                <h3>No Blogs</h3>
              </div>
            )}

            <div className="d-flex gap-20 overflow-x-scroll" ref={containerRef}>
              {Array.isArray(blogState) &&
                blogState
                  .slice()
                  .sort((a, b) => b.numViews - a.numViews)
                  .slice(0, 4)
                  .map((item, index) => (
                    <div className="d-flex px-2" key={index}>
                      <BlogCard
                        height="400px"
                        width="330px"
                        date={moment(item?.createdAt).format("MMM Do YY")}
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images[0].url}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
