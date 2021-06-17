import React from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Teas from './Teas/Teas';

import '../../css/App.css';
    
const App = () => {
    return (
        <React.Fragment>
            <nav>
                <ul className="nav-ul">
                    <li className="nav-li main-title">
                        <Link to={"/"}>Tea-fferent</Link>
                    </li>
                    <li className="nav-li">
                        <Link to={"/posts"}> Posts </Link>
                    </li>
                    <li className="nav-li">
                        <Link to={"/users"}> Users </Link>
                    </li>
                    <li className="nav-li">
                        <Link to={"/teas"}> Teas </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Redirect exact from="/" to="/users" />
                <Route path="/users" component={Users} />
                <Route path="/posts" component={Posts} />
                <Route path="/teas" component={Teas} />
            </Switch>
        </React.Fragment>
    );
};
    
export default App;
