import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const Singleblog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card ">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <MdArrowBack className="fs-4" />
                  Back to Blogs
                </Link>
                <h3 className="title"> Lorem Ipsum Dolor</h3>
                <img src={blog} className="img-fluid m-4" alt="blog" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos sapiente officiis modi at sunt excepturi
                  expedita sint? Sed quibusdam recusandae alias error harum
                  maxime adipisci amet laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleblog;
