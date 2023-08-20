import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  AiFillHome,
  AiFillPhone,
  AiFillMail,
  AiFillInfoCircle,
} from "react-icons/ai";
import Container from "../components/Container";
import { useDispatch } from "react-redux";
import { createEnquiry } from "../features/contact/contactSlice";

const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is required"),
  mobile: yup
    .string()
    .default("")
    .nullable()
    .required("Mobile Number is required"),
  comment: yup.string().default("").required("Message is required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(
        createEnquiry({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          comment: values.comment,
        })
      );
    },
  });
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
          <div className="laptop-view">
            <div className="col-12 mt-4">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Send Us A message</h3>
                  <form
                    action=""
                    onSubmit={formik.handleSubmit}
                    className="d-flex flex-column gap-15 "
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="name"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        value={formik.values.name}
                      />
                      <div className="errors">
                        {formik.touched.name && formik.errors.name}
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="email"
                        className="form-control"
                        name="email"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        value={formik.values.email}
                      />
                      <div className="errors">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="form-control"
                        name="mobile"
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")}
                        value={formik.values.mobile}
                      />
                      <div className="errors">
                        {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </div>
                    <div>
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="comment"
                        onChange={formik.handleChange("comment")}
                        onBlur={formik.handleBlur("comment")}
                        value={formik.values.comment}
                      ></textarea>
                      <div className="errors">
                        {formik.touched.comment && formik.errors.comment}
                      </div>
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
                        <a href="mailto:mojoyici@gmail.com">
                          mojoyici@gmail.com
                        </a>
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
          <div className="mobile-view">
            <div className="row my-2">
              <h6 className="contact-title mb-4">Send Us A message</h6>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15 "
              >
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                    value={formik.values.name}
                  />
                  <div className="errors">
                    {formik.touched.name && formik.errors.name}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="email"
                    className="form-control"
                    name="email"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    value={formik.values.email}
                  />
                  <div className="errors">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="form-control"
                    name="mobile"
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    value={formik.values.mobile}
                  />
                  <div className="errors">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <div>
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="comment"
                    onChange={formik.handleChange("comment")}
                    onBlur={formik.handleBlur("comment")}
                    value={formik.values.comment}
                  ></textarea>
                  <div className="errors">
                    {formik.touched.comment && formik.errors.comment}
                  </div>
                </div>
                <div>
                  <button className="button w-100 border-0">Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h6 className="contact-title text-center my-3">
                Get in touch with Us
              </h6>
              <div>
                <ul className="ps-0">
                  <li className="mb-4 d-flex align-items-center gap-15">
                    <AiFillHome className="fs-5" />
                    <address className="mb-0 text-dark">
                      13 Oshitelu St, Computer Village 101233 Lagos, Nigeria
                    </address>
                  </li>
                  <li className="mb-4 d-flex align-items-center gap-15">
                    <AiFillPhone className="fs-5" />
                    <a className="text-dark" href="tel:+2348023636583">
                      (+234)802-363-6583
                    </a>
                  </li>
                  <li className="mb-4 d-flex align-items-center gap-15">
                    <AiFillMail className="fs-5" />
                    <a className="text-dark" href="mailto:mojoyici@gmail.com">
                      mojoyici@gmail.com
                    </a>
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
      </Container>
    </>
  );
};

export default Contact;
