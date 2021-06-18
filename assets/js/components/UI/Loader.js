import React from 'react';

import '../../../css/UI/Loader.css';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p className="loader-paragraph">Loading ...</p>
        </div>
    );
};

export default Loader;