import React from 'react';
import './SingleBlog.css';

const SingleBlog = ({blog}) => {
    const {blogImage, authorImage, authorName, blogTitle, readTime, publishDate} = blog;
    return (
        <div className='singleBlog'>
          <div>
            <img src={blogImage} alt="" />
          </div>
          <div className="author-info">
            <div>
                 <img src={authorImage} alt="" />                   
                 <div>
                    <h3>{authorName}</h3>
                    <p>{publishDate}</p>
                 </div>
            </div>
            <div>
                <span>{readTime} min read</span>
            </div>
          </div>
          <h1>{blogTitle}</h1>
          <p>#beginners #programming</p>
          <a href="">Mark as read</a>
          <div className='blog-divider'></div>
        </div>
    );
};

export default SingleBlog;