import React, { useState } from 'react';
import './SideCard.css';

const SideCard = ({totalTime}) => {
    return (
        <div className="side-card">
            <div className="total-read-time">
                 Spent time on read :{totalTime} min
            </div>
        </div>
    );
};

export default SideCard;