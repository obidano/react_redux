import './test/styles/App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./pages/users";
import Home from "./pages/home";
import SuperSquad from "./test/supersquad/SuperSquad";

const App = (props) => {
    return <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item active'>
                        <Link className='nav-link' to="/">Superheroes</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to="/home">Home</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to="/users">Users</Link>
                    </li>
                </ul>
            </nav>

            <div className="container pt-3">
                <Switch>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/">
                        <SuperSquad/>
                    </Route>
                </Switch>
            </div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        </div>
    </Router>

}

export default App