import React, { useContext } from 'react';
import PageWrapper from '../UI/PageWrapper';
import CartItem from './CartItem';
import Card from '../UI/Card';
import CartContext from '../../store/cart-context';

import '../../../css/Cart/Cart.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx.items.map((item) =>
        <CartItem key={item.id} item={item} />
    );

    const cartContent = cartCtx.items.length > 0 ? cartItems : <p>Your cart is empty.</p>;

    return (
        <PageWrapper>
            <div className="cart-wrapper">
                <Card>
                    <h1 className="cart-title">Mon panier</h1>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Articles</th>
                                <th>Quantity</th>
                                <th></th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartContent}
                        </tbody>
                    </table>
                    <p className="cart-order-price">Total order : {cartCtx.totalAmount} €</p>
                </Card>
            </div>
        </PageWrapper>
    );
};

export default Cart;
