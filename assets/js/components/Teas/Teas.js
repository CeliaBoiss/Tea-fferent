import React from 'react';
import TeasList from './TeasList';
import TeasSummary from "./TeasSummary";

const Teas = () => {
    return (
        <React.Fragment>
            <TeasSummary />
            <TeasList />
        </React.Fragment>
    );
};

export default Teas;
