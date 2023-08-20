import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { PaystackButton } from "react-paystack";
import { createAnOrder, emptyUserCart } from "../features/user/userSlice";

const shippingSchema = yup.object({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required"),
  address: yup.string().required("Address is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  other: yup.string(),
});

const paystackPublicKey = "pk_test_38a6eea1651297568eac0029e2ced0b985b46443";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  const cartState = useMemo(() => {
    return JSON.parse(localStorage.getItem("cartProduct"));
  }, []);

  const [shippingInfo, setShippingInfo] = useState(null);
  const [showPaystackButton, setShowPaystackButton] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      setShowPaystackButton(true);
      localStorage.setItem("address", values);
      console.log("Shipping Info submitted:", values); // Added console log here
      if (formik.isValid) {
        setShippingDetailsSubmitted(true);
      }
    },
  });
  useEffect(() => {
    for (let index = 0; index < cartState.length; index++) {}
  });

  const [totalAmount, setTotalAmount] = useState(null);
  const [selectedState, setSelectedState] = useState(formik.values.state || "");

  const shippingPrices = useMemo(
    () => ({
      Lagos: 3500,
      Abuja: 8000,
      PortHarcourt: 25000,
      Ogun: 12000,
      Oyo: 12000,
      Kwara: 12000,
    }),
    []
  );
  const defaultShippingPrice = 0;

  const handleStateChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedState(selectedValue);
    formik.handleChange("state")(event); // Call Formik's handleChange for the "state" field
  };

  const getShippingPrice = () => {
    if (shippingPrices[selectedState]) {
      return `₦${shippingPrices[selectedState]}`;
    } else {
      return `₦${defaultShippingPrice}`;
    }
  };
  useEffect(() => {
    // Calculate total amount when cartState or selectedState changes
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      // Calculate the total amount including shipping price
      let shippingPrice = shippingPrices[selectedState] || defaultShippingPrice;
      setTotalAmount(sum + shippingPrice);
    }
  }, [cartState, selectedState, shippingPrices]);

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const payConfig = {
    reference: `pay_${new Date().getTime()}`,
    email: userState?.email || "", // Use user's email if available
    amount: totalAmount ? totalAmount * 100 : 0, // Use the calculated totalAmount as the payment amount
    publicKey: paystackPublicKey,
  };
  const componentProps = {
    ...payConfig,
    text: "Pay with Paystack",
    onSuccess: (reference, response) =>
      handlePaystackSuccessAction(reference, response),
    onClose: () => handlePaystackCloseAction(),
  };
  const handlePaystackSuccessAction = async () => {
    setPaymentCompleted(true); // Set the paymentCompleted to true after successful payment
    console.log("succes");
    console.log(payConfig.reference);
  };

  const handlePaystackCloseAction = () => {
    // Handle the modal close event (optional)
    console.log("Payment modal closed.");
  };
  const [orderPlaced, setOrderPlaced] = useState(false); // New state to track whether the order has been placed or not

  // Function to handle placing the order
  const handlePlaceOrder = () => {
    // Check if the shipping information is available
    if (shippingInfo) {
      const totalPrice = totalAmount ? totalAmount * 100 : 0;
      const totalPriceAfterDiscount = totalPrice; // Implement this function if applicable
      const paymentId = payConfig.reference;
      // Dispatch the action to create the order
      const orderItems = cartState.map((cartItem) => ({
        product: cartItem.productId, // Use productId instead of product
        color: cartItem.color,
        quantity: cartItem.quantity,
        price: cartItem.price,
      }));
      console.log(orderItems);
      dispatch(
        createAnOrder({
          orderItems,
          shippingInfo,
          totalPrice,
          totalPriceAfterDiscount,
          paymentInfo: { payPaymentId: paymentId },
        })
      );
      // Optionally, you can show a success message or redirect to a confirmation page.
      // For this example, I'll just log a message.
      console.log("Order created successfully!");
      setOrderPlaced(true); // Set orderPlaced to true after placing the order
      setTimeout(() => {
        dispatch(emptyUserCart());
        navigate("/orders");
      }, 500);
    } else {
      console.log("Shipping information not available. Cannot place order.");
    }
  };
  const [shippingDetailsSubmitted, setShippingDetailsSubmitted] =
    useState(false);

  return (
    <>
      <div className="laptop-view">
        <Container class1="checkout-wrapper ">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data py-5">
                <h3 className="website-name text-dark">
                  <span className="tllogo2">Mo</span>
                  <span className="trlogo2">joy</span>
                </h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item " aria-current="page">
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact</h4>

                <p className="user-details">
                  ({userState?.email}/ +{userState?.mobile})
                </p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Email me with news and offers
                  </label>
                </div>
                <h4 className="title">Shipping Address</h4>
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <div className="form-floating flex-grow-1">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange("country")}
                        onBlur={formik.handleChange("country")}
                      >
                        <option value="" disabled>
                          Select Country
                        </option>
                        <option value="Nigeria">Nigeria</option>
                      </select>
                      <label htmlFor="floatingSelect">Country/Region</label>
                    </div>
                    <div className="error ms-2">
                      {formik.touched.country && formik.errors.country}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="First Name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange("firstName")}
                        onBlur={formik.handleChange("firstName")}
                      />
                      <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="error ms-2">
                      {formik.touched.firstName && formik.errors.firstName}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Last Name"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange("lastName")}
                        onBlur={formik.handleChange("lastName")}
                      />
                      <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="error ms-2">
                      {formik.touched.lastName && formik.errors.lastName}
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange("address")}
                        onBlur={formik.handleChange("address")}
                      />
                      <label htmlFor="floatingInput">Address</label>
                    </div>
                    <div className="error ms-2">
                      {formik.touched.address && formik.errors.address}
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Other"
                        name="other"
                        value={formik.values.other}
                        onChange={formik.handleChange("other")}
                        onBlur={formik.handleChange("other")}
                      />
                      <label htmlFor="floatingInput">
                        Apartment, Suite, etc(optional)
                      </label>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="City"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange("city")}
                        onBlur={formik.handleChange("city")}
                      />
                      <label htmlFor="floatingInput">City</label>
                    </div>
                    <div className="error ms-2">
                      {formik.touched.city && formik.errors.city}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <div className="form-floating flex-grow-1">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        name="state"
                        value={selectedState}
                        onChange={handleStateChange}
                        onBlur={formik.handleBlur("state")} // Call Formik's handleBlur for the "state" field
                      >
                        <option value="" disabled>
                          select State
                        </option>
                        <option value="Abuja">Abuja</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="PortHarcourt">Port-Harcourt</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Oyo">Oyo</option>
                      </select>
                      <label htmlFor="floatingSelect">State</label>
                    </div>
                    <div className="error ms-2">
                      {formik.touched.state && formik.errors.state}
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <MdArrowBackIos className="me-2" /> Return to Cart
                      </Link>
                      {/* Conditionally render one of the three buttons based on the current state */}
                      {paymentCompleted && !orderPlaced ? (
                        <button
                          type="button"
                          className="button"
                          onClick={handlePlaceOrder}
                        >
                          Place Order
                        </button>
                      ) : showPaystackButton ? (
                        <PaystackButton
                          {...componentProps}
                          className="button"
                        />
                      ) : (
                        <button
                          type="submit"
                          className="button"
                          onClick={formik.handleSubmit}
                        >
                          Set Shipping Details
                        </button>
                      )}
                    </div>
                  </div>
                </form>
                <div className="py-2">
                  <p>All rights reserved Mojoy</p>
                </div>
              </div>
            </div>
            <div className="col-5 home-wrapper-2">
              <div className="checkout-right-data">
                <div className="border-bottom py-3">
                  {cartState &&
                    cartState?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex gap-10 mb-2 align-items-center"
                        >
                          <div className="w-75 d-flex gap-30 align-items-center">
                            <div className="w-25 position-relative">
                              <span
                                style={{ top: "-10px", right: "5px" }}
                                className="badge bg-secondary position-absolute text-white rounded-circle p-2"
                              >
                                {item?.quantity}
                              </span>
                              <img
                                src={item?.productId?.images[0].url}
                                width={100}
                                height={100}
                                alt="product"
                              />
                            </div>
                            <div>
                              <h4 className="title">{item?.productId?.slug}</h4>
                              <p>{item?.color.title}</p>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h4>₦{item?.price * item?.quantity}</h4>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Subtotal</p>
                    <p>₦{totalAmount ? totalAmount : 0}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Shipping</p>
                    <p>{selectedState ? getShippingPrice() : "₦0"}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Total</h6>
                  <h6>₦{totalAmount ? totalAmount : 0}</h6>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        {shippingDetailsSubmitted ? (
          <Container className="checkout-wrapper">
            <div className="row ">
              <div className="w-100 d-flex justify-content-between">
                <h6 className="website-name text-dark py-2">
                  <span className="tllogo2">Mo</span>
                  <span className="trlogo2">joy</span>
                </h6>
                <h6 className="title py-2">Checkout</h6>
              </div>
              <div className="border-bottom py-4">
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div key={index} className="">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-5px", right: "-10px" }}
                            className="badge bg-secondary position-absolute text-white rounded-circle p-2"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0].url}
                            width={100}
                            height={100}
                            alt="product"
                          />
                        </div>
                        <div>
                          <p className="title">{item?.productId?.slug}</p>
                        </div>
                        <div className="flex-grow-1 d-flex  justify-content-between">
                          <p>{item?.color.title}</p>
                          <h5>₦{item?.price * item?.quantity}</h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Subtotal</p>
                  <p>₦{totalAmount ? totalAmount : 0}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Shipping</p>
                  <p>{selectedState ? getShippingPrice() : "₦0"}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h6>Total</h6>
                <h6>₦{totalAmount ? totalAmount : 0}</h6>
              </div>
              {paymentCompleted && !orderPlaced ? (
                <div className="py-4">
                  <button
                    type="button"
                    className="button w-100 mt-2"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              ) : (
                <div className="py-4">
                  <PaystackButton
                    {...componentProps}
                    className="button w-100"
                  />
                </div>
              )}
            </div>
          </Container>
        ) : (
          <Container class1="checkout-wrapper p-2">
            <div className="row">
              <div className="w-100 d-flex justify-content-between">
                <h6 className="website-name text-dark py-2">
                  <span className="tllogo2">Mo</span>
                  <span className="trlogo2">joy</span>
                </h6>
                <h6 className="title py-2">Shipping Address</h6>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between align-items-center py-3"
              >
                <div className="w-100">
                  <div className="form-floating flex-grow-1">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange("country")}
                      onBlur={formik.handleChange("country")}
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="Nigeria">Nigeria</option>
                    </select>
                    <label htmlFor="floatingSelect">Country/Region</label>
                  </div>
                  <div className="error ms-2">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="First Name"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange("firstName")}
                      onBlur={formik.handleChange("firstName")}
                    />
                    <label htmlFor="floatingInput">First Name</label>
                  </div>
                  <div className="error ms-2">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Last Name"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                      onBlur={formik.handleChange("lastName")}
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                  <div className="error ms-2">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleChange("address")}
                    />
                    <label htmlFor="floatingInput">Address</label>
                  </div>
                  <div className="error ms-2">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Other"
                      name="other"
                      value={formik.values.other}
                      onChange={formik.handleChange("other")}
                      onBlur={formik.handleChange("other")}
                    />
                    <label htmlFor="floatingInput">
                      Apartment, Suite, etc(optional)
                    </label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="City"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange("city")}
                      onBlur={formik.handleChange("city")}
                    />
                    <label htmlFor="floatingInput">City</label>
                  </div>
                  <div className="error ms-2">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1 w-100">
                  <div className="form-floating mb-2">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      name="state"
                      value={selectedState}
                      onChange={handleStateChange}
                      onBlur={formik.handleBlur("state")} // Call Formik's handleBlur for the "state" field
                    >
                      <option value="" disabled>
                        select State
                      </option>
                      <option value="Abuja">Abuja</option>
                      <option value="Kwara">Kwara</option>
                      <option value="Lagos">Lagos</option>
                      <option value="PortHarcourt">Port-Harcourt</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Oyo">Oyo</option>
                    </select>
                    <label htmlFor="floatingSelect">State</label>
                  </div>
                  <div className="error ms-2">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <button
                  type="submit"
                  className="button w-100"
                  onClick={formik.handleSubmit}
                >
                  Set Shipping Details
                </button>
              </form>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

export default Checkout;
