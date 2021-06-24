import React, { useState, useEffect } from 'react';
import TeaItem from './TeaItem/TeaItem';
import Loader from '../UI/Loader';
import axios from 'axios';

import '../../../css/Teas/TeasList.css';

const TeasList = () => {
    const [teas, setTeas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/teas`)
            .then(teas => {
                setTeas(teas.data);
                setIsLoading(false);
            }
        )
    }, []);

    const teasList = teas.map(tea =>
        <TeaItem key={tea.id} tea={tea} />
    );

    return (
        <div className="wrapper-list">
            {isLoading ? (
                <Loader />
            ) : (
                <ul className="teas-list">
                    {teasList}
                </ul>
            )}
        </div>
    );
};

export default TeasList;
