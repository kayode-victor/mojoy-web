import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { MdArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blog/blogSlice";

const Singleblog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const blogState = useSelector((state) => state?.blog?.singleblog);
  const getBlogId = location.pathname.split("/")[2];
  useEffect(() => {
    const getBlog = () => {
      dispatch(getABlog(getBlogId));
    };
    getBlog();
  }, [dispatch, getBlogId]);
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <div className="laptop-view">
        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="single-blog-card ">
                  <Link to="/blog" className="d-flex align-items-center gap-10">
                    <MdArrowBack className="fs-4" />
                    Back to Blogs
                  </Link>
                  <h3 className="title">{blogState?.title}</h3>
                  <h6 className="title">Category: {blogState?.category}</h6>
                  <div className="text-center mx-2">
                    <img
                      src={blogState?.images[0].url}
                      className="img-fluid m-4"
                      alt="blog"
                    />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: blogState?.description,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-view">
        <Container class1="blog-wrapper home-wrapper-1 py-2">
          <div className="row">
            <div className="single-blog-card ">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <MdArrowBack className="fs-4" />
                Back to Blogs
              </Link>
              <h6 className="title text-center">{blogState?.title}</h6>
              <div className="text-center">
                <img
                  src={blogState?.images[0].url}
                  className="w-100"
                  alt="blog"
                />
              </div>
              <p
                className="mt-2"
                dangerouslySetInnerHTML={{
                  __html: blogState?.description,
                }}
              ></p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Singleblog;
