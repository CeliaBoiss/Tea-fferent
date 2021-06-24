import React from 'react';
import PageWrapper from '../UI/PageWrapper';
import TeasList from './TeasList';
import TeasSummary from "./TeasSummary";

const Teas = () => {
    return (
        <PageWrapper>
            <TeasSummary />
            <TeasList />
        </PageWrapper>
    );
};

export default Teas;
