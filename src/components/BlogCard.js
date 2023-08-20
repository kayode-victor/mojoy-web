import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ height, width, id, category, title, date, image }) => {
  return (
    <div className="blog-card" style={{ height, width }}>
      <div className="card-image">
        <img src={image} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p className="category">{category}</p>
        <Link to={"/blog/" + id} className="button read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
