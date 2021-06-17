import React from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Teas from './Teas/Teas';
    
const App = () => {
    return (
        <div>
            <nav>
                <Link to={"/"}> Symfony React Project </Link>
                <div>
                    <ul>
                        <li>
                            <Link to={"/posts"}> Posts </Link>
                        </li>
                        <li>
                            <Link to={"/users"}> Users </Link>
                        </li>
                        <li>
                            <Link to={"/teas"}> Teas </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Redirect exact from="/" to="/users" />
                <Route path="/users" component={Users} />
                <Route path="/posts" component={Posts} />
                <Route path="/teas" component={Teas} />
            </Switch>
        </div>
    );
};
    
export default App;