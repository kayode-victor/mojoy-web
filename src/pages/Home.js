import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services, bannerdata } from "../utils/Data";
const Home = () => {
  return (
    <>
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
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between px-2">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15">
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Computers & Laptops</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>All in One</h6>
                  <p>3 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p> Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Computers & Laptops</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>All in One</h6>
                  <p>3 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p> Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-4">
            <div className="famous-card position-relative">
              <img
                src="images/subbanner-01.png"
                className="img-fluid"
                alt="imageposter"
              />
              <div className="famous-content position-absolute">
                <h5>Advertise Product</h5>
                <h6>Lorem ipsum dolor sit amet consectetur</h6>
                <p>procing area</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="famous-card position-relative">
              <img
                src="images/subbanner-01.png"
                className="img-fluid"
                alt="imageposter"
              />
              <div className="famous-content position-absolute">
                <h5>Advertise Product</h5>
                <h6>Lorem ipsum dolor sit amet consectetur</h6>
                <p>procing area</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="famous-card position-relative">
              <img
                src="images/subbanner-01.png"
                className="img-fluid"
                alt="imageposter"
              />
              <div className="famous-content position-absolute">
                <h5>Advertise Product</h5>
                <h6>Lorem ipsum dolor sit amet consectetur</h6>
                <p>procing area</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
