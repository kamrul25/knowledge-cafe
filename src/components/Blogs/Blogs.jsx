import React, { useEffect, useState } from 'react';
import './Blogs.css';
import SingleBlog from '../singleBlog/SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs-container'>
            {
                blogs.map(blog => <SingleBlog
                key={blog.id}
                blog={blog}
                ></SingleBlog>)
            }
            
        </div>
    );
};

export default Blogs;