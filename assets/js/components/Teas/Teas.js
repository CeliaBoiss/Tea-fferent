import React from 'react';
import TeasList from './TeasList';
import TeasSummary from "./TeasSummary";

const Teas = () => {
    return (
        <div>
            <TeasSummary />
            <TeasList />
        </div>
    );
};

export default Teas;
