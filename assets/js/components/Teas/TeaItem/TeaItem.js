import React from 'react';
import Card from '../../UI/Card';
import TeaItemForm from './TeaItemForm';

import '../../../../css/Teas/TeaItem.css';

const TeaItem = (props) => {
    const price = `${props.tea.price}€ / sachet`;

    return (
        <Card>
            <li className="tea-item" key={props.tea.id}>
                <h3>{props.tea.name}</h3>
                <p>{props.tea.type}</p>
                <div className="tea-photo">
                    <img src={props.tea.photo} />
                </div>                
                <p className="tea-item-paragraph">{props.tea.description}</p>
                <div className="tea-item-buy">
                    <p className="tea-item-price">{price}</p>
                    <TeaItemForm />
                </div>
            </li>
        </Card>
    );
};

export default TeaItem;
