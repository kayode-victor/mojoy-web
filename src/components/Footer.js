import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-top">
        <div className="container-xxl p-5">
          <div className="row align-items-center">
            <div className=" d-flex align-items-center">
              <div className="col-5">
                <div className="footer-top-data d-flex gap-15 align-items-center">
                  <img src={newsletter} alt="newsletter" />
                  <p className="mb-0 text-white">Subscribe for Newsletter</p>
                </div>
              </div>
              <div className="col-7">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email..."
                    aria-label="Your Email..."
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-middle">
        <div className="container-xxl py-2">
          <div className="row">
            <div className="col-6">
              <h5>Contact Us</h5>
              <div>
                <address className="text-white">
                  13 Oshitelu St, Computer Village , 101233 <br /> Lagos,
                  Nigeria
                </address>
                <a className="text-white d-block " href="tel:+2348023636583">
                  <p>(+234)802-363-6583</p>
                </a>
                <a className="text-white d-block " href="tel:+2348023230471">
                  <p>(+234)802-323-0471</p>
                </a>
                <a className="text-white d-block " href="tel:+2348131098419">
                  <p>(+234)813-109-8419</p>
                </a>
                <div className="social_icons d-flex align-items-center gap-3 gap-md-15">
                  <a href=" ">
                    <FaFacebookF className="text-white fs-5" />
                  </a>
                  <a href=" ">
                    <FaInstagram className="text-white fs-5" />
                  </a>
                  <a href=" ">
                    <FaLinkedin className="text-white fs-5" />
                  </a>
                  <a href=" ">
                    <FaTwitter className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5>Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-1 ">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-1 ">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-1 ">
                  Shipping Policy
                </Link>
                <Link to="/terms-and-condition" className="text-white py-1 ">
                  Terms & Condition
                </Link>
                <Link to="/blog" className="text-white py-1 ">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h5>Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link to="about" className="text-white py-1 ">
                  About Us
                </Link>
                <Link to="faq" className="text-white py-1 ">
                  FAQ
                </Link>
                <Link to="contact" className="text-white py-1 ">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-last">
        <div className="container-xxl py-2">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by 93-media
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
