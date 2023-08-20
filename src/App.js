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
import Termandcondition from "./pages/Termandcondition";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Hp from "./pages/Hp";
import Asus from "./pages/Asus";
import Apple from "./pages/Apple";
import Dell from "./pages/Dell";
import Lenovo from "./pages/Lenovo";
import FAQ from "./pages/FAQ";
import { PrivateRoutes } from "./routing/privateRoutes";
import { OpenRoutes } from "./routing/openRoutes";
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
            <Route
              path="wishlist"
              element={
                <PrivateRoutes>
                  <Wishlist />
                </PrivateRoutes>
              }
            />
            <Route
              path="cart"
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route
              path="orders"
              element={
                <PrivateRoutes>
                  <Orders />
                </PrivateRoutes>
              }
            />
            <Route
              path="profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
            <Route
              path="login"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route path="signup" element={<Signup />} />
            <Route
              path="forgot-password"
              element={
                <OpenRoutes>
                  <Forgotpassword />
                </OpenRoutes>
              }
            />
            <Route
              path="reset-password/:token"
              element={
                <OpenRoutes>
                  <Resetpassword />
                </OpenRoutes>
              }
            />
            <Route path="privacy-policy" element={<Privacypolicy />} />
            <Route path="terms-and-condition" element={<Termandcondition />} />

            <Route path="faq" element={<FAQ />} />
          </Route>

          <Route
            path="checkout"
            element={
              <PrivateRoutes>
                <Checkout />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
