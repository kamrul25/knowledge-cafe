import React from 'react';
import './SideCard.css';

const SideCard = ({totalTime, titles}) => {

    return (
        <div className="side-card">
            <div className="total-read-time">
                 Spent time on read :{totalTime} min
            </div>
            <div className="title-container">
                <h2 className="total-bookmarked">Bookmarked Blogs:{titles.length} </h2>
                <div className="title-card">
                </div>
            </div>
        </div>
    );
};

export default SideCard;