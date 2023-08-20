import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../features/user/userSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaArrowCircleDown } from "react-icons/fa";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.MyOrders?.orders);
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };
  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  return (
    <>
      <BreadCrumb title="My Orders" />
      <div className="laptop-view">
        <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <h5>Order Id</h5>
                </div>
                <div className="col-3">
                  <h5>Total Amount</h5>
                </div>
                <div className="col-3">
                  <h5>Total Amount After Discount</h5>
                </div>
                <div className="col-3">
                  <h5>Status</h5>
                </div>
              </div>
              <div className="col-12">
                {orderState && orderState.length > 0 ? (
                  orderState.map((item, index) => (
                    <div
                      style={{ backgroundColor: "#ffd333" }}
                      className="row pt-3"
                      key={index}
                    >
                      <div className="col-3">
                        <p>{item?._id}</p>
                      </div>
                      <div className="col-3">
                        <p>₦{item?.totalPrice / 100}</p>
                      </div>
                      <div className="col-3">
                        <p>₦{item?.totalPriceAfterDiscount / 100}</p>
                      </div>
                      <div className="col-3">
                        <p>{item?.orderStatus}</p>
                      </div>
                      <div className="col-12">
                        <div
                          style={{ backgroundColor: "#243850" }}
                          className="row  py-3"
                        >
                          <div className="col-3">
                            <h6 className="text-white">Product Name</h6>
                          </div>
                          <div className="col-3">
                            <h6 className="text-white">Quantity</h6>
                          </div>
                          <div className="col-3">
                            <h6 className="text-white">Price</h6>
                          </div>
                        </div>
                        {item?.orderItems?.map((i, index) => {
                          return (
                            <div
                              className="row "
                              style={{ backgroundColor: "#243850" }}
                              key={index}
                            >
                              <div className="col-3">
                                <p className="text-white">
                                  {i?.product?.title}
                                </p>
                              </div>
                              <div className="col-3">
                                <p className="text-white">{i?.quantity}</p>
                              </div>
                              <div className="col-3">
                                <p className="text-white">₦{i?.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <h4>No orders available.</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        <Container class1="cart-wrapper home-wrapper-3 ">
          {orderState && orderState.length > 0 ? (
            orderState.map((item, index) => (
              <div
                key={index}
                className="my-3 border border-dark align-items-center"
              >
                <div className="row px-3">
                  <div className="d-flex px-1 gap-1">
                    <p>Order Id:</p>
                    <p>{item?._id}</p>
                  </div>
                  <div className="d-flex px-1 gap-1">
                    <p>Total Amount:</p>
                    <p>₦{item?.totalPrice / 100}</p>
                  </div>
                  <div className="d-flex px-1 gap-1">
                    <p>Total Amount After Discount:</p>
                    <p>₦{item?.totalPriceAfterDiscount / 100}</p>
                  </div>
                  <div className="d-flex px-1 gap-1">
                    <p>Status:</p>
                    <p>{item?.orderStatus}</p>
                  </div>
                </div>
                <button
                  className="btn btn-link d-flex justify-content-between align-items-center w-100 p-0 text-dark"
                  onClick={() => toggleTab(index)}
                >
                  <span className="me-3">Show items</span>
                  {activeTab === index ? (
                    <AiOutlineCloseCircle size={20} className="text-dark" />
                  ) : (
                    <FaArrowCircleDown size={20} className="text-dark" />
                  )}
                </button>
                {activeTab === index && (
                  <div style={{ backgroundColor: "#ffd333" }} className="pt-2">
                    {item?.orderItems?.map((i, index) => (
                      <div
                        className=""
                        style={{ backgroundColor: "#243850" }}
                        key={index}
                      >
                        <div className="d-flex gap-2 px-1">
                          <p className="text-white">Product:</p>
                          <p className="text-white">{i?.product?.title}</p>
                        </div>
                        <div className="d-flex gap-2  px-1">
                          <p className="text-white">Quantity:</p>
                          <p className="text-white">{i?.quantity}</p>
                        </div>
                        <div className="d-flex gap-2  px-1">
                          <p className="text-white">Price:</p>
                          <p className="text-white">₦{i?.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-4">
              <h5>No orders available.</h5>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Orders;
