import React, { useContext } from 'react';
import PageWrapper from '../UI/PageWrapper';
import CartItem from './CartItem';
import Card from '../UI/Card';
import CartContext from '../../store/cart-context';

import '../../../css/Cart/Cart.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const addToCartHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const removeFromCartHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = cartCtx.items.map((item) =>
        <CartItem
            key={item.id}
            item={item}
            onAdd={addToCartHandler.bind(null, item)}
            onRemove={removeFromCartHandler.bind(null, item.id)}
        />
    );

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
                            {cartItems}
                        </tbody>
                    </table>
                    <p className="cart-order-price">Total order : {totalAmount} €</p>
                </Card>
            </div>
        </PageWrapper>
    );
};

export default Cart;
