import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import gr from "../images/gr.svg";
import gr2 from "../images/gr2.svg";
import gr3 from "../images/gr3.svg";

const Brandstore = () => {
  const [grid, setGrid] = useState(3);
  return (
    <>
      <Meta title={"Hp"} />
      <BreadCrumb title="Hp" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="logo-banner">
              <img
                className="logo"
                src="https://cdn.cdnlogo.com/logos/h/13/hp.png"
                alt="logo"
              />
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>All-in-one</li>
                  <li>Laptop</li>
                  <li>Desktop</li>
                  <li>Printer</li>
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
                      In Stock (1)
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
                      out of Stock(0)
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
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Desktop
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    All-in-one
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Gaming-PC
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Laptop-Bags
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Mouse
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Printers
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Keyboard
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    scanner
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
                      src={gr3}
                      className=" d-block imag-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src={gr2}
                      className="d-block imag-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={gr}
                      className="d-block imag-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list py-3">
              <div className="d-flex flex-wrap gap-3">
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
export default Brandstore;
