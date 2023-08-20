import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { forgetPasswordToken } from "../features/user/userSlice";

const emailSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
});
const Forgotpassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      dispatch(forgetPasswordToken(values));
      setTimeout(() => {
        navigate("/login");
      }, 10000);
    },
  });
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className="laptop-view">
        <Container class1="login-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Reset Your Password</h3>
                <p className="text-center my-2">
                  We will send you an email to reset your Password
                </p>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column"
                >
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="error m-2">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <div>
                    <div className="d-flex mt-3 justify-content-center flex-column gap-10 align-items-center">
                      <button className="button border-0">Sumbit</button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        <Container class1="home-wrapper-2 py-3">
          <div className="row">
            <div className="auth-card-2">
              <h5 className="text-center">Reset Your Password</h5>
              <p className="text-center my-2">
                We will send you an email to reset your Password
              </p>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error m-2">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div>
                  <div className="d-flex mt-3 flex-column">
                    <button className="button border-0">Sumbit</button>
                    <Link
                      to="/login"
                      className="button signup text-center mt-3"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Forgotpassword;
