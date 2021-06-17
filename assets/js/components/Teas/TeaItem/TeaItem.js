import React from 'react';
import Card from '../../UI/Card';

import '../../../../css/Teas/TeaItem.css';

const TeaItem = (props) => {
    const price = `${props.tea.price}€`;

    return (
        <Card>
            <li key={props.tea.id}>
                <h3>{props.tea.name}</h3>
                <p>{props.tea.type}</p>
                <div className="tea-photo">
                    <img src={props.tea.photo} />
                </div>                
                <p>{props.tea.description}</p>
                <p>{price}</p>
            </li>
        </Card>
    );
};

export default TeaItem;
