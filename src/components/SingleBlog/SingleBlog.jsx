import React from "react";
import "./SingleBlog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons';

const SingleBlog = ({ blog, handelReadTime, handleBlogTitle }) => {
  const {
    id,
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
              <p className="single-para">{publishDate}</p>
            </div>
          </div>
           <p className="single-para">{readTime} min read  <FontAwesomeIcon icon={faBookmark} onClick={() => handleBlogTitle(blog ,id)} />
           </p>
        </div>
        <h1 className="blog-title">{blogTitle}</h1>
        <p className="single-para">#beginners  #programming</p>
        <button id="mark-time" onClick={() => handelReadTime(readTime)}>Mark as read</button>
      </div>
      <div className="blog-divider"></div>
    </div>
  );
};

export default SingleBlog;
