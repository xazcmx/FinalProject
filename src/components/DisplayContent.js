import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    // useRouteMatch
} from "react-router-dom";
import Home from "./Home";
import Tracking from "./Tracking";
import Overview from "./Overview";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//This is te component that houses the navbar build and the router, and the takes
//and displays all the content


const DisplayContents = () => {
    return (
        <div>
            <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav variant="pills" className="mr-auto" defaultActiveKey="/">
                            <NavLink className="btn btn-dark" to="/" exact>Home</NavLink>
                            <NavLink className="btn btn-dark" to="/Tracking">Tracking</NavLink>                            
                            <NavLink className="btn btn-dark" to="/Overview">Overview</NavLink> 
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/Tracking">
                        <Tracking />
                    </Route>
                    <Route path="/Overview">
                        <Overview />
                    </Route>
                </Switch>
                               
            </Router>
        </div>
    )
}


export default DisplayContents;