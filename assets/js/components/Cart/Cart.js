import React, { useContext } from 'react';
import PageWrapper from '../UI/PageWrapper';
import CartItem from './CartItem';
import Card from '../UI/Card';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx.items.map((item) =>
        <CartItem key={item.id} item={item} />
    );

    return (
        <PageWrapper>
            <Card>
                <h1>Mon panier</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Articles</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
                <p>Total order : {cartCtx.totalAmount} €</p>
            </Card>
        </PageWrapper>
    );
};

export default Cart;
