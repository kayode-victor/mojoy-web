import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput
                  className="mt-1"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <CustomInput
                  className="mt-1"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <CustomInput
                  className="mt-1"
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 flex-column align-items-center">
                    <button className="button border-0">Signup</button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
