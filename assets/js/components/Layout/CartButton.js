import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import '../../../css/Layout/CartButton.css';
import cartLogo from '../../../images/cartLogo.png';

const CartButton = () => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    return (
        <button className="cart-button" type="button">
            <span><img src={cartLogo} /></span>
            <span className="cart-button-text">Your Cart</span>
            <span className="cart-button-badge">{totalAmount} €</span>
        </button>
    );
};

export default CartButton;