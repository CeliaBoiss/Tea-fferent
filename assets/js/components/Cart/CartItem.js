import React from 'react';

const CartItem = (props) => {
    const totalPrice = props.item.price * props.item.amount;

    return (
        <tr>
            <td>
                <img src={props.item.photo} />
                <p>{props.item.name}</p>
                <p>{props.item.type}</p>
            </td>
            <td>{props.item.amount}</td>
            <td>{totalPrice} €</td>
        </tr>
    );
}

export default CartItem;