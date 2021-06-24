import React, { useContext } from 'react';
import Card from '../../UI/Card';
import TeaItemForm from './TeaItemForm';
import CartContext from '../../../store/cart-context';

import '../../../../css/Teas/TeaItem.css';

const TeaItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `${props.tea.price}€ / sachet`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.tea.id,
            name: props.tea.name,
            amount: amount,
            price: props.tea.price,
            type: props.tea.type,
            photo: props.tea.photo
        });
    };

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
                    <TeaItemForm id={props.tea.id} onAddToCart={addToCartHandler} />
                </div>
            </li>
        </Card>
    );
};

export default TeaItem;
