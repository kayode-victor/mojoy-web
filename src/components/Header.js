import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import cart from "../images/cart.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/product/productSlice";
import DrawerMenu from "./drawerMenu";

const Header = () => {
  const dispatch = useDispatch();
  const [total, SetTotal] = useState(null);
  const cartState = useSelector((state) => state?.auth?.CartProducts);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.product);
  const [productOpt, setProductOpt] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      SetTotal(sum);
    }
  }, [cartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="laptop-view">
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
                  <a
                    className="text-white px-1"
                    href="mailto mojoyicl@gmail.com"
                  >
                    mojoyicl@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
        <header className="header-upper py-3 px-5">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-2">
                <h3>
                  <Link to="/">
                    <span className="tllogo fs-1">Mo</span>
                    <span className="trlogo fs-1">joy</span>
                  </Link>
                </h3>
              </div>
              <div className="col-5">
                <div className="input-group">
                  <Typeahead
                    id="example"
                    onChange={(selected) => {
                      if (selected && selected.length > 0) {
                        const selectedProduct = selected[0];
                        if (selectedProduct && selectedProduct.prod) {
                          navigate(`/product/${selectedProduct.prod}`);
                          dispatch(getAProduct(selectedProduct.prod));
                        }
                      }
                    }}
                    minLength={2}
                    options={productOpt}
                    labelKey={"name"}
                    placeholder="Search for products here..."
                  />
                  <span className="input-group-text py-2" id="basic-addon2">
                    <FaSearch className="fs-5" />
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
                    <Link
                      to="/cart"
                      className="d-flex align-items-center gap-10"
                    >
                      <img src={cart} alt="cart" />
                      <div className="d-flex flex-column gap-10">
                        <span className="badge bg-white text-dark">
                          {cartState?.length ? cartState?.length : 0}
                        </span>
                        <p className="mb-0">₦{total ? total : 0}</p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={authState?.user === null ? "/login" : ""}
                      className="d-flex align-items-center gap-10"
                    >
                      <img src={user} alt="user" />
                      {authState?.user === null ? (
                        <p className="mb-0">
                          Log In
                          <br />
                          My Account
                        </p>
                      ) : (
                        <div className="dropdown ">
                          <button
                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center "
                            type="button"
                            id="dropdownMenuBottom1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="me-5 d-inline-block">
                              Welcome
                              <br />
                              {authState?.user?.firstname +
                                "  " +
                                authState?.user?.lastname}
                            </span>
                          </button>

                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuBottom1"
                          >
                            <li>
                              <Link className="dropdown-item" to="/orders">
                                My Orders
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/profile">
                                My Profile
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={handleLogout}
                              >
                                Log Out
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
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
                <div className="menu-bottom d-flex align-items-center justify-content-center gap-30 py-2">
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-20">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="product">Our Store</NavLink>

                      <NavLink to="hp">Hp</NavLink>
                      <NavLink to="asus">Asus</NavLink>
                      <NavLink to="lenovo">Lenovo</NavLink>
                      <NavLink to="dell">Dell</NavLink>
                      <NavLink to="apple">Apple</NavLink>
                      <NavLink to="blog">Blogs</NavLink>
                      <NavLink to="contact">Contact Us</NavLink>
                      <NavLink to="about">About Us</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="mobile-view">
        <div className="row d-flex flex-column gap-20">
          <header className="navbar d-flex justify-content-between fixed-top">
            <div className="d-flex gap-10">
              <div>
                <Link
                  to="/wishlist"
                  className="d-flex align-items-center gap-10"
                >
                  <img src={wishlist} alt="wishlist" />
                </Link>
              </div>
              <div>
                <Link to="/cart" className="d-flex align-items-center gap-10">
                  <img src={cart} alt="cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">
                      {cartState?.length ? cartState?.length : 0}
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <DrawerMenu />
            </div>
          </header>
          <header className="navbar border border-dark border-top">
            <div className="input-group">
              <Typeahead
                id="example"
                onChange={(selected) => {
                  if (selected && selected.length > 0) {
                    const selectedProduct = selected[0];
                    if (selectedProduct && selectedProduct.prod) {
                      navigate(`/product/${selectedProduct.prod}`);
                      dispatch(getAProduct(selectedProduct.prod));
                    }
                  }
                }}
                minLength={2}
                options={productOpt}
                labelKey={"name"}
                placeholder="Search for products here..."
              />
              <span className="input-group-text" id="basic-addon2">
                <FaSearch className="fs-5" />
              </span>
            </div>
          </header>
        </div>
        <div className="mobile-view">
          <div className="row d-flex flex-column gap-20">
            <header className="navbar d-flex justify-content-between fixed-top">
              <div className="d-flex gap-10">
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10"
                  >
                    <img src={wishlist} alt="wishlist" />
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <DrawerMenu />
              </div>
            </header>

            <header className="navbar border border-dark border-top">
              <div className="container">
                <div className="input-group">
                  <Typeahead
                    id="example"
                    onChange={(selected) => {
                      if (selected && selected.length > 0) {
                        const selectedProduct = selected[0];
                        if (selectedProduct && selectedProduct.prod) {
                          navigate(`/product/${selectedProduct.prod}`);
                          dispatch(getAProduct(selectedProduct.prod));
                        }
                      }
                    }}
                    minLength={2}
                    options={productOpt}
                    labelKey={"name"}
                    placeholder="Search for products here..."
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <FaSearch className="fs-5" />
                  </span>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
