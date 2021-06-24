import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import '../../../css/Layout/CartButton.css';
import cartLogo from '../../../images/cartLogo.png';

const CartButton = () => {
    const cartCtx = useContext(CartContext);

    return (
        <button className="cart-button" type="button">
            <span><img src={cartLogo} /></span>
            <span className="cart-button-text">Your Cart</span>
            <span className="cart-button-badge">{cartCtx.totalAmount} €</span>
        </button>
    );
};

export default CartButton;