import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Singleblog from "./pages/Singleblog";
import Privacypolicy from "./pages/Privacypolicy";
import Shippingpolicy from "./pages/Shippingpolicy";
import Refundpolicy from "./pages/Refundpolicy";
import Termandcondition from "./pages/Termandcondition";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Brandstore from "./pages/Brandstore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="store/:id" element={<Brandstore />} />
            <Route path="product/:id" element={<Singleproduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Singleblog />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<Privacypolicy />} />
            <Route path="shipping-policy" element={<Shippingpolicy />} />
            <Route path="refund-policy" element={<Refundpolicy />} />
            <Route path="terms-and-condition" element={<Termandcondition />} />
          </Route>

          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
