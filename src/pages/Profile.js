import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const profileSchema = yup.object({
  firstname: yup.string().required("First name is required."),
  lastname: yup.string().required("Last name is required."),
  mobile: yup.string().required("Mobile number is required."),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required."),
});
const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  const [edit, setEdit] = useState(true);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState?.firstname || "", // Set the initial value from userState
      lastname: userState?.lastname || "", // Set the initial value from userState
      mobile: userState?.mobile, // Set the initial value from userState
      email: userState?.email, // Set the initial value from userState
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setEdit(true);
    },
  });

  return (
    <>
      <BreadCrumb title="My Profile" />
      <div className="laptop-view">
        <Container class1="cart-wrapper home-wrapper-2 px-5 py-3">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="">Update Profile</h3>
                <FiEdit className="fs-3" onClick={() => setEdit(false)} />
              </div>
            </div>
            <div className="col-12">
              <form className="gap-20" onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                    disabled={edit}
                  />
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                    disabled={edit}
                  />
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile No</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    disabled={edit}
                    readOnly
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    disabled={edit}
                    readOnly
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="form-text py-3">
                  We'll never share your information with anyone else.
                </div>
                {edit === false && (
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                )}
              </form>
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        <Container class1="cart-wrapper home-wrapper-2 py-2">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="">Update Profile</h5>
              <FiEdit className="fs-3" onClick={() => setEdit(false)} />
            </div>
          </div>
          <div>
            <form className="gap-2" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                  disabled={edit}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                  disabled={edit}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile No</label>
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  disabled={edit}
                  readOnly
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  disabled={edit}
                  readOnly
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div className="form-text py-3">
                We'll never share your information with anyone else.
              </div>
              {edit === false && (
                <button type="submit" className="btn btn-primary w-100 mb-2">
                  Update
                </button>
              )}
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;
