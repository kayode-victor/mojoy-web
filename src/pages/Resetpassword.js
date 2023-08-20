import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { resetPassword } from "../features/user/userSlice";

const passwordSchema = yup.object({
  password: yup.string().required("Password is required"),
});

const Resetpassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values?.password }));
      setTimeout(() => {
        navigate("/login");
      }, 10000);
    },
  });
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="laptop-view">
        <Container class1="login-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Reset Your Password</h3>
                <p className="text-center my-2">Enter new password</p>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-30"
                >
                  <CustomInput
                    className="mt-1"
                    type="password"
                    name="password"
                    placeholder="New Password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="error m-2">
                    {formik.touched.password && formik.errors.password}
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
        <Container class1="login-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="auth-card-2">
              <h5 className="text-center">Reset Your Password</h5>
              <p className="text-center my-2">Enter new password</p>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-30"
              >
                <CustomInput
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="New Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error m-2">
                  {formik.touched.password && formik.errors.password}
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

export default Resetpassword;
