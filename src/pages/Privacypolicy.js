import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Privacypolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="policy">
            <h5>Last updated: 14th of August, 2023</h5>
            <p>
              Certainly, here's a sample Privacy Policy for Mojoy: Privacy
              Policy Last updated: 14th of August, 2023. Mojoy Ecommerce Company
              operates "www.mojoy.com". This page informs you of our policies
              regarding the collection, use, and disclosure of Personal
              Information we receive from users of the Site.
            </p>
          </div>
          <div className="policy">
            <h6>Information Collection and Use</h6>
            <p>
              While using our Site, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include but
              is not limited to your name, email address, postal address, and
              phone number ("Personal Information").
            </p>
          </div>
          <div className="policy">
            <h6>Log Data</h6>
            <p>
              Like many site operators, we collect information that your browser
              sends whenever you visit our Site ("Log Data"). This Log Data may
              include information such as your computer's Internet Protocol
              ("IP") address, browser type, browser version, the pages of our
              Site that you visit, the time and date of your visit, the time
              spent on those pages, and other statistics. In addition, we may
              use third-party services such as Google Analytics that collect,
              monitor, and analyze this data.
            </p>
          </div>
          <div className="policy">
            <h6>Cookies</h6>
            <p>
              Cookies are files with a small amount of data, which may include
              an anonymous unique identifier. Cookies are sent to your browser
              from a website and stored on your computer's hard drive. Like many
              sites, we use "cookies" to collect information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our Site.
            </p>
          </div>
          <div className="policy">
            <h6>Security</h6>
            <p>
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>
          </div>
          <div className="policy contact-info">
            <h6>Contact Us</h6>
            <p>
              We'd love to hear from you! Feel free to reach out to us with any
              questions, concerns, or feedback. Our team is here to assist you.
            </p>
            <p>
              For general inquiries, you can contact us via email at{" "}
              <a href="mailto:info@mojoy.com">info@mojoy.com</a>.
            </p>
            <p>
              If you have specific questions about your orders or products,
              please visit our{" "}
              <a href="/contact" className="text-decoration-none">
                Contact Page
              </a>{" "}
              to find the appropriate department to assist you.
            </p>
            <p>
              You can also give us a call at{" "}
              <a className="text-white d-block " href="tel:+2348131098419">
                <p>(+234)813-109-8419</p>
              </a>{" "}
              during our business hours from Monday to Friday, 9 AM - 5 PM
              (WAT).
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Privacypolicy;
