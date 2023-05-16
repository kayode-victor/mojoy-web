import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <div>
      <>
        <Meta title={"Cart"} />
        <BreadCrumb title="Cart" />
        <Container className="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3  d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="https://www.laptop.lk/wp-content/uploads/2022/03/Hp-Omen-16-b0234TX-04.jpg"
                      className="img-fluid"
                      alt="productImage"
                    />
                  </div>
                  <div className="w-75 px-2">
                    <p>Hp Omen 16 - B0234TX (i7)</p>
                    <p>Size: M</p>
                    <p>Color: #777777</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₦625,000.00</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={1}
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₦625,000.00</h5>
                </div>
              </div>
              <div className="col-12 pb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/product" className="button">
                    Continue Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>Subtotal: ₦625,000.00</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    </div>
  );
};

export default Cart;
