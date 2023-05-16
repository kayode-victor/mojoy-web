import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

import {
  AiFillHome,
  AiFillPhone,
  AiFillMail,
  AiFillInfoCircle,
} from "react-icons/ai";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              title="Mojoy Computers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4198751140207!2d3.335353569296202!3d6.594623307771177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92273801b885%3A0x2961cfdc611b8d39!2sMojoy%20Computers!5e0!3m2!1sen!2sng!4v1683891863348!5m2!1sen!2sng"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-12 mt-4">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      placeholder="Comments"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>

              <div>
                <h3 className="contact-title mb-4"> Get in touch with Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-4 d-flex align-items-center gap-15">
                      <AiFillHome className="fs-5" />
                      <address className="mb-0">
                        13 Oshitelu St, Computer Village 101233 Lagos, Nigeria
                      </address>
                    </li>
                    <li className="mb-4 d-flex align-items-center gap-15">
                      <AiFillPhone className="fs-5" />
                      <a href="tel:+2348023636583">(+234)802-363-6583</a>
                    </li>
                    <li className="mb-4 d-flex align-items-center gap-15">
                      <AiFillMail className="fs-5" />
                      <a href="mailto:mojoyici@gmail.com">mojoyici@gmail.com</a>
                    </li>
                    <li className="mb-4 d-flex align-items-center gap-15">
                      <AiFillInfoCircle className="fs-5" />
                      <p className="mb-0">
                        Monday - Friday (9am - 6pm), Saturday(9am to 3pm)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
