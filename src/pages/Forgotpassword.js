import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Reset Your Password</h3>
              <p className="text-center my-2">
                We will send you an email to reset your Password
              </p>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput
                  className="mt-1"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />

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
    </>
  );
};

export default Forgotpassword;
