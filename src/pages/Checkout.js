import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper ">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data py-5">
              <h3 className="website-name text-dark">
                <span className="tllogo2">Mo</span>
                <span className="trlogo2">joy</span>
              </h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item " aria-current="page">
                    Information
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact</h4>
              <p className="user-details">
                Kayode Victor (kayode.o.vic@gmail.com)
              </p>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  Email me with news and offers
                </label>
              </div>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <h4 className="title">Shipping Address</h4>
                <div className="w-100">
                  <div className="form-floating flex-grow-1">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected disabled>
                        Nigeria
                      </option>
                    </select>
                    <label for="floatingSelect">Country/Region</label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="First Name"
                    />
                    <label for="floatingInput">First Name</label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Last Name"
                    />
                    <label for="floatingInput">Last Name</label>
                  </div>
                </div>
                <div className="w-100">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Address"
                    />
                    <label for="floatingInput">Address</label>
                  </div>
                </div>
                <div className="w-100">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Last Name"
                    />
                    <label for="floatingInput">
                      Apartment, Suite, etc(optional)
                    </label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="City"
                    />
                    <label for="floatingInput">City</label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating flex-grow-1">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected disabled>
                        Lagos
                      </option>
                    </select>
                    <label for="floatingSelect">State</label>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <MdArrowBackIos className="me-2" /> Return to Cart
                    </Link>
                    <Link to="/cart" className="button-2">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
              <div className="py-2">
                <p>All rights reserved Mojoy</p>
              </div>
            </div>
          </div>
          <div className="col-5 home-wrapper-2">
            <div className="checkout-right-data">
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-30 align-items-center">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "1px" }}
                        className="badge bg-secondary position-absolute text-white rounded-circle p-2"
                      >
                        1
                      </span>
                      <img
                        src="https://www.laptop.lk/wp-content/uploads/2022/03/Hp-Omen-16-b0234TX-04.jpg"
                        className="img-fluid"
                        alt="product"
                      />
                    </div>
                    <div>
                      <h4 className="title">Hp Omen 16 - B0234TX (i7)</h4>
                      <p>S / #777777</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h4>₦625,000.00</h4>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Subtotal</p>
                  <p>₦625,000.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Shipping</p>
                  <p>₦3,500.00</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4>Total</h4>
                <h4>₦628,500.00</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
