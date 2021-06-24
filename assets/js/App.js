import React from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Teas from './components/Teas/Teas';
import Cart from './components/Cart/Cart';
import CartButton from'./components/Layout/CartButton';
import CartProvider from './store/CartProvider';

import '../css/App.css';
    
const App = () => {
    return (
        <CartProvider>
            <nav>
                <ul className="nav-ul">
                    <li className="nav-li main-title">
                        <Link to={"/"}>Tea-fferent</Link>
                    </li>
                    <li className="nav-li menu-link">
                        <Link to={"/posts"}> Posts </Link>
                    </li>
                    <li className="nav-li menu-link">
                        <Link to={"/users"}> Users </Link>
                    </li>
                    <li className="nav-li menu-link">
                        <Link to={"/teas"}> Teas </Link>
                    </li>
                </ul>
                <Link to={"/cart"}> <CartButton /> </Link>
            </nav>
            <Switch>
                <Redirect exact from="/" to="/users" />
                <Route path="/users" component={Users} />
                <Route path="/posts" component={Posts} />
                <Route path="/teas" component={Teas} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </CartProvider>
    );
};
    
export default App;
