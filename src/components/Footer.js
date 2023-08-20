import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h4 className="text-white">Contact Us</h4>
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
            <div className="col-md-6 col-lg-3 col-12 ">
              <h4 className="text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-1 ">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-condition" className="text-white py-1 ">
                  Terms & Condition
                </Link>
                <Link to="/blog" className="text-white py-1 ">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h4 className="text-white">Account</h4>
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
      </div>
      <div className="Last-footer">
        <p className="text-center mb-0 text-white">
          &copy; {new Date().getFullYear()}; Powered by 93-media
        </p>
      </div>
    </>
  );
};

export default Footer;
