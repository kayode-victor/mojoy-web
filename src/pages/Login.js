import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput
                  className="mt-1"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <CustomInput
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password ?</Link>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button signup">
                      Sign Up
                    </Link>
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

export default Login;
