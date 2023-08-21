import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.CartProducts);
  const cartProducts = useSelector((state) => state?.auth?.CartProducts);
  const [cartProduct, setCartProduct] = useState(() => {
    const storedCartProduct = localStorage.getItem("cartProduct");
    return storedCartProduct ? JSON.parse(storedCartProduct) : cartProducts;
  });
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartProduct?.length; index++) {
      sum =
        sum + Number(cartProduct[index].quantity) * cartProduct[index].price;
      setTotalAmount(sum);
    }
  }, [cartProduct]);

  // Sync cartProduct with the cartProducts from the Redux store
  useEffect(() => {
    setCartProduct(cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    const storedCartProduct = localStorage.getItem("cartProduct");
    console.log("Stored Cart Product:", storedCartProduct);
    setCartProduct(
      storedCartProduct ? JSON.parse(storedCartProduct) : cartProducts
    );
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);
  // Update localStorage whenever cartProduct changes
  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);
  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 300);
    }
  }, [dispatch, productUpdateDetail]);
  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 300);
  };
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;
      setTotalAmount(sum);
    }
  }, [userCartState]);
  return (
    <div>
      <>
        <Meta title={"Cart"} />
        <BreadCrumb title="Cart" />
        <div className="laptop-view">
          <Container className="contact-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="col-12">
                <div className="cart-header py-3  d-flex justify-content-between align-items-center">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">SubTotal</h4>
                </div>
                <div>
                  {userCartState && userCartState.length > 0 ? (
                    userCartState.map((item, index) => (
                      <div
                        key={index}
                        className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                      >
                        <div className="cart-col-1 d-flex align-items-center">
                          <div className="w-25">
                            <img
                              src={item?.productId.images[0].url}
                              className="img-fluid"
                              alt="productImage"
                            />
                          </div>
                          <div className="w-75 px-2">
                            <h6>{item?.productId.title}</h6>
                            <div className="d-flex gap-3">
                              <span>Color:</span>
                              <ul className="colors ps-0">
                                <li
                                  style={{ backgroundColor: item?.color.title }}
                                ></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="cart-col-2">
                          <h5 className="price">₦{item?.price}</h5>
                        </div>
                        <div className="cart-col-3 d-flex align-items-center">
                          <div>
                            <input
                              className="form-control"
                              type="number"
                              min={1}
                              max={item?.productId.quantity}
                              value={
                                productUpdateDetail?.quantity
                                  ? productUpdateDetail?.quantity
                                  : item?.quantity
                              }
                              onChange={(e) => {
                                setProductUpdateDetail({
                                  cartItemId: item?._id,
                                  quantity: e.target.value,
                                });
                              }}
                              name=""
                              id=""
                            />
                          </div>
                          <div className="px-3">
                            <AiFillDelete
                              onClick={() => {
                                deleteACartProduct(item?._id);
                              }}
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="cart-col-4">
                          <h5 className="price">
                            ₦{item?.price * item?.quantity}
                          </h5>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-3">
                      <h4>No items in the cart</h4>
                    </div>
                  )}
                </div>

                <div className="col-12 pb-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/product" className="button">
                      Continue Shopping
                    </Link>
                    {userCartState && userCartState.length > 0 && (
                      <div className="d-flex flex-column align-items-end">
                        <h4 className="mx-5">TOTAL: ₦{totalAmount}</h4>
                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to="/checkout" className="button">
                          Checkout
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="mobile-view">
          <Container className="contact-wrapper home-wrapper-2 py-2">
            <div className="row m-1">
              <div>
                {userCartState && userCartState.length > 0 ? (
                  userCartState.map((item, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex">
                        <div className="w-50 ">
                          <img
                            src={item?.productId.images[0].url}
                            className="w-100"
                            alt="productImage"
                          />
                        </div>
                        <div className="flex-col p-2 align-items-ends ">
                          <div className="">
                            <p>{item?.productId.title}</p>
                            <div className="d-flex gap-3">
                              <span>Color:</span>
                              <ul className="colors ps-0">
                                <li
                                  style={{ backgroundColor: item?.color.title }}
                                ></li>
                              </ul>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <h6 className="price mt-2">₦{item?.price}</h6>
                            <div>
                              <input
                                className="form-control"
                                type="number"
                                min={1}
                                max={item?.productId.quantity}
                                value={
                                  productUpdateDetail?.quantity
                                    ? productUpdateDetail?.quantity
                                    : item?.quantity
                                }
                                onChange={(e) => {
                                  setProductUpdateDetail({
                                    cartItemId: item?._id,
                                    quantity: e.target.value,
                                  });
                                }}
                                name=""
                                id=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between p-1">
                        <div>
                          <AiFillDelete
                            onClick={() => {
                              deleteACartProduct(item?._id);
                            }}
                            className="text-danger"
                          />
                        </div>
                        <div className="">
                          <h5 className="price">
                            ₦{item?.price * item?.quantity}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="text-center p-5">
                      <h4>No items in the cart</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link to="/product" className="button w-100 text-center">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="pb-2">
                <div className="">
                  {userCartState && userCartState.length > 0 && (
                    <div>
                      <div className="d-flex flex-column align-items-end">
                        <h4 className="">TOTAL: ₦{totalAmount}</h4>
                        <p>Taxes and shipping calculated at checkout</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Link to="/product" className="button">
                          Continue Shopping
                        </Link>
                        {userCartState && userCartState.length > 0 && (
                          <Link to="/checkout" className="button">
                            Checkout
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    </div>
  );
};

export default Cart;
