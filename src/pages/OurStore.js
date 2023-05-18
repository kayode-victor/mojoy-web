import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(3);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Laptop</li>
                  <li>Desktop</li>
                  <li>Headset</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Brand</h5>
                <div>
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelectGrid"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue="">none</option>
                      <option value="1">Hp</option>
                      <option value="2">Dell</option>
                      <option value="3">Asus</option>
                    </select>
                    <label htmlFor="floatingSelectGrid">Select Brand</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Headphone
                  </span>
                  <span className="tag badge bg-light  text-secondary rounded-3 py-2 px-1">
                    Laptop
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Phone
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    iPhone
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    All-in-one
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Gaming-PC
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Laptop-Bags
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Mouse
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Printers
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Gaming Pad
                  </span>
                  <span className="tag badge bg-light text-secondary rounded-3 py-2 px-1">
                    Ps-4
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10 mb-0">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling" defaultValue="selected">
                      Best Selling
                    </option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, Low to High</option>
                    <option value="price-descending">Price, High to Low</option>
                    <option value="created-ascending">Date, Old to New</option>
                    <option value="created-descending">Date, New to Old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products  my-2">4 products</p>
                  <div className="d-flex align-items-center gap-15 grid -3">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr3.svg"
                      className=" d-block imag-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block imag-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block imag-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list py-3">
              <div className="d-flex flex-wrap gap-15 justify-content-between">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
