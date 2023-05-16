import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import cart from "../images/cart.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import menu from "../images/menu.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over ₦1M items in Nigeria & Free Returns.
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :
                <a className="text-white px-1" href="tel:+2348023636583">
                  +234 802-363-6583
                </a>
                | Email :
                <a className="text-white px-1" href="mailto mojoyicl@gmail.com">
                  mojoyicl@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2 px-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link>
                  <span className="tllogo">Mo</span>
                  <span className="trlogo">joy</span>
                </Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-1" id="basic-addon2">
                  <FaSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-end gap-30">
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favorite
                      <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">₦0.00</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10"
                  >
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      Login
                      <br />
                      Account
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center "
                      type="button"
                      id="dropdownMenuBottom1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuBottom1"
                    >
                      <li>
                        <Link className="dropdown-item" to="#"></Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#"></Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#"></Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="product">Our Store</NavLink>
                  </div>
                </div>
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center "
                      type="button"
                      id="dropdownMenuBottom1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Top Brand
                    </button>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuBottom1"
                    >
                      <li>
                        <Link className="dropdown-item" to="store/:id">
                          Hp
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          dell
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Asus
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
