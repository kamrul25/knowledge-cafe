import React from 'react';

const Title = ({title}) => {
    return (
        <div className="title-card">
            <h3>{title.blogTitle}</h3>
        </div>
    );
};

export default Title;