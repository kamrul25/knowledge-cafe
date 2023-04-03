import React from "react";
import "./SingleBlog.css";

const SingleBlog = ({ blog }) => {
  const {
    blogImage,
    authorImage,
    authorName,
    blogTitle,
    readTime,
    publishDate,
  } = blog;
  return (
    <div>
      <div className="singleBlog">
        <img src={blogImage} alt="" className="blogImage" />
        <div className="author-and-readTime">
          <div className="author-info">
            <img src={authorImage} alt="" className="authorImage"/>
            <div>
              <h2>{authorName}</h2>
              <p >{publishDate}</p>
            </div>
          </div>
           <p>{readTime} min read</p>
        </div>
        <h1 className="blog-title">{blogTitle}</h1>
        <p>#beginners  #programming</p>
        <a href="">Mark as read</a>
      </div>
      <div className="blog-divider"></div>
    </div>
  );
};

export default SingleBlog;
