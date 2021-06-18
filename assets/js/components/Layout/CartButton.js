import React from 'react';

import '../../../css/Layout/CartButton.css';
import cartLogo from '../../../images/cartLogo.png';

const CartButton = () => {
    return (
        <button className="cart-button" type="button">
            <span><img src={cartLogo} /></span>
            <span className="cart-button-text">Your Cart</span>
            <span className="cart-button-badge">4</span>
        </button>
    );
};

export default CartButton;