import React, { memo } from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
        </div>
    );
};

export default memo(Loading);
