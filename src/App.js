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
import Hp from "./pages/Hp";
import Asus from "./pages/Asus";
import Apple from "./pages/Apple";
import Dell from "./pages/Dell";
import Lenovo from "./pages/Lenovo";
import FAQ from "./pages/FAQ";

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
            <Route path="hp" element={<Hp />} />
            <Route path="asus" element={<Asus />} />
            <Route path="apple" element={<Apple />} />
            <Route path="dell" element={<Dell />} />
            <Route path="lenovo" element={<Lenovo />} />
            <Route path="product/:id" element={<Singleproduct />} />
            <Route path="hp/:id" element={<Singleproduct />} />
            <Route path="asus/:id" element={<Singleproduct />} />
            <Route path="lenovo/:id" element={<Singleproduct />} />
            <Route path="dell/:id" element={<Singleproduct />} />
            <Route path="apple/:id" element={<Singleproduct />} />
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

            <Route path="faq" element={<FAQ />} />
          </Route>

          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
