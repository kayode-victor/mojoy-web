import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Termandcondition = () => {
  return (
    <>
      <Meta title={"Terms and Condition"} />
      <BreadCrumb title="Terms and Condition" />
      <section className="policy-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="policy">
              <h6>Mojoy Ecommerce Company - Terms and Conditions</h6>
              <p>
                Welcome to Mojoy, your go-to destination for a seamless online
                shopping experience. By using our services, you agree to abide
                by the following Terms and Conditions. Please take a moment to
                read through these terms carefully before proceeding with your
                purchases.
              </p>
            </div>
            <div className="policy">
              <h6>1. Order Placement and Confirmation:</h6>
              <p>
                When placing an order with Mojoy, you acknowledge that you are
                legally authorized to make the purchase. We reserve the right to
                accept or decline orders at our discretion. Upon confirmation of
                your order, you will receive an email with the order details,
                including payment information.
              </p>
            </div>
            <div className="policy">
              <h6>2. Product Information:</h6>
              <p>
                We strive to provide accurate product descriptions, images, and
                prices. However, there may be occasional errors or
                discrepancies. In such cases, we reserve the right to correct
                the information and cancel any orders affected by inaccuracies.
              </p>
            </div>
            <div className="policy">
              <h6>3. Payment:</h6>
              <p>
                We offer secure payment options to ensure a safe shopping
                experience. All payments are processed through trusted and
                reliable payment gateways. By making a purchase, you agree to
                provide accurate and up-to-date payment information.
              </p>
            </div>
            <div className="policy">
              <h6>4. Shipping and Delivery:</h6>
              <p>
                We strive to deliver your orders promptly and efficiently.
                However, delivery times may vary based on your location and
                other factors. You will be provided with tracking information to
                monitor the status of your order. Please ensure you provide
                accurate shipping details to avoid delays or delivery issues.
              </p>
            </div>
            <div className="policy">
              <h6>5. Returns and Exchanges:</h6>
              <p>
                If you're not completely satisfied with your purchase, we offer
                a hassle-free return and exchange policy. Please review our
                Returns and Exchanges policy on our website for detailed
                instructions on the process and eligibility criteria.
              </p>
            </div>
            <div className="policy">
              <h6>6. Privacy and Security:</h6>
              <p>
                Protecting your personal information is our top priority. We
                have implemented strict security measures to safeguard your
                data. By using our services, you agree to our Privacy Policy,
                which outlines how we collect, use, and protect your
                information.
              </p>
            </div>
            <div className="policy">
              <h6>7. Intellectual Property:</h6>
              <p>
                All content on our website, including images, text, and designs,
                are the property of Mojoy Ecommerce Company. Unauthorized use,
                reproduction, or distribution of our intellectual property is
                strictly prohibited.
              </p>
            </div>
            <div className="policy">
              <h6>8. Contact Us:</h6>
              <p>
                If you have any questions, concerns, or feedback regarding our
                Terms and Conditions, please don't hesitate to reach out to our
                Customer Support team. We are here to assist you and provide a
                satisfactory shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Termandcondition;
