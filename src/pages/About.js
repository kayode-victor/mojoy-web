import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container"; // Make sure to import the Container component

const About = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <BreadCrumb title="About Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div>
          <h3>About Us</h3>
          <p>
            MOJOY is a leading IT retail and distribution organization dedicated
            to delivering premium IT products at competitive prices. Our vision
            is to become Africa's preferred ICT solutions provider, prioritizing
            our customers' business achievements.
          </p>
          <p>
            Our journey started in the bustling hub of Computer Village, driving
            our commitment to innovation and excellence in the tech industry.
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
