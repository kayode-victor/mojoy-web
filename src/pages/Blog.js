import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import moment from "moment";

const Blog = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state?.blog?.blog);

  useEffect(() => {
    const getBlogs = () => {
      dispatch(getAllBlogs());
    };
    getBlogs();
  }, [dispatch]);

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="all-views">
        <Container className="blog-wrapper home-wrapper-2 py-3">
          <div className="row">
            {blogState && blogState.length === 0 && (
              <div className=" text-center">
                <h3>No Blogs</h3>
              </div>
            )}
            {blogState &&
              blogState.map((item) => (
                <div className="col-md-3 col-sm-6 mb-3" key={item._id}>
                  <BlogCard
                    height="450px"
                    date={moment(item?.createdAt).format("MMM Do YY")}
                    id={item?._id}
                    title={item?.title}
                    category={item?.category}
                    image={item?.images[0].url}
                  />
                </div>
              ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;
