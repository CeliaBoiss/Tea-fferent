import React from 'react';

import '../../../css/Cart/CartItem.css';

const CartItem = (props) => {
    const totalPrice = props.item.price * props.item.amount;

    return (
        <tr className="cart-item">
            <td className="cart-item-description">
                <div className="cart-item-photo">
                    <img src={props.item.photo} />
                </div>
                <p className="cart-item-name">{props.item.name}</p>
                <p>{props.item.type}</p>
            </td>
            <td className="cart-item-amount">                
                <button className="amount-button" onClick={props.onRemove}>−</button>
                <span>{props.item.amount}</span>
                <button className="amount-button" onClick={props.onAdd}>+</button>
            </td>
            <td className="cart-item-price">{props.item.price}€ / unité</td>
            <td className="cart-item-total-price">{totalPrice} €</td>
        </tr>
    );
}

export default CartItem;