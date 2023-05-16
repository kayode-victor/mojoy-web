import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Singleproduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images-na.ssl-images-amazon.com/images/I/81qy1BWunvL._AC_UL600_SR600,600_.jpg",
  };

  const [orderedProduct, setOrderProduct] = useState(true);
  console.log(setOrderProduct);
  return (
    <>
      <Meta title={"Hp Omen 16 - B0234TX (i7) "} />
      <BreadCrumb title="Hp Omen 16 - B0234TX (i7)" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15 justify-content-between">
              <div>
                <img
                  src="https://www.laptop.lk/wp-content/uploads/2022/03/Hp-Omen-16-b0234TX-03.jpg"
                  alt="product"
                  className="img-fluid w-100"
                />
              </div>
              <div>
                <img
                  src="https://www.omen.com/content/dam/sites/omen/worldwide/laptops/2021-omen-16-intel/2021-omen-16-intel-2-0/21-c-1-omen-ralph-16-80-w-non-numpad-rgb-lcd-shadow-black-nt-h-dcam-non-odd-win-10-core-set-front-copy.png"
                  alt="product"
                  className="img-fluid w-100"
                />
              </div>

              <div>
                <img
                  src="https://www.omen.com/content/dam/sites/omen/worldwide/laptops/2023-omen-transcend-intel/Hero%20Image%201@2x.png"
                  alt="product"
                  className="img-fluid w-100"
                />
              </div>
              <div>
                <img
                  src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/YadcYyEENMXNLponqcMqjD_1920_80.png"
                  alt="product"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Hp Omen 16 - B0234TX (i7)</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">₦625,000.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 reviews)</p>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Category : </h3>
                  <p className="product-data">Laptops </p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Brands : </h3>
                  <p className="product-data">hp </p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Tags : </h3>
                  <p className="product-data">gaming-laptop </p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Availabity : </h3>
                  <p className="product-data">In Stock(10) </p>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Color : </h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row my-3">
                  <h3 className="product-heading">Quantity : </h3>
                  <div className="">
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="d-flex  gap-30 align-items-center ms-5">
                    <button className="button border-0">Add to cart</button>
                    <button className="button signup">Buy Now</button>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <div>
                    <Link to="">
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
                    <b> 5-10 business days!</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-3 rounded-3">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h3 className="mb-2">Customer Reviews</h3>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 reviews </p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <Link className="text-dark text-decoration-underline" to="">
                      Write a Review
                    </Link>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write A Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      placeholder="Review"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Kayode Victor</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum
                  </p>
                </div>
                <div className="review mt-4">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Kayode Peter</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="Popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleproduct;
