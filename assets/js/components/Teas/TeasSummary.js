import React from 'react';
import Card from '../UI/Card';

import '../../../css/Teas/TeasSummary.css';

const TeasSummary = () => {
    return (
        <div className="summary-wrapper">
            <Card>
                <h2 className="summary-title">Welcome to Tea-fferent</h2>
                <p className="summary-paragraph">
                    We are pleased to welcome you on Tea-fferent, the reference website for true tea
                    lovers. You can find here a lot of delicious tea : green, black or white, but also
                    with various flavors like : fruits, flowers or nature. Take your time to visit and
                    make your choice. Our tea are 100% organic and the leaves are gathered with all
                    the respect and delicacy possible for garanty you a better tea-xperience !
                </p>
            </Card>
        </div>
    );
};

export default TeasSummary;
