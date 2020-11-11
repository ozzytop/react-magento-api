import React, { useState } from "react"
import './App.css';
import './Components/GetToken'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import { Container } from 'react-bootstrap';
import GetToken from './Components/GetToken';
import GetCurrency from './Components/GetCurrency';
import CreateProduct from './Components/CreateProduct';
import GetWebsites from './Components/GetWebsites';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from './pages/Signup';

import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap';


function App(props) {

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
    
    const setTokens = (data) => {
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }
    
  return (
    <div>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/admin" component={Admin} />
            </div>
        </Router>
        </AuthContext.Provider>

        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Mg Api</NavbarBrand>
        </Navbar>
        <br></br>
        <Container>
            <GetToken></GetToken>
            <br></br>
            <CreateProduct></CreateProduct>
            <br></br>
            <GetCurrency></GetCurrency>
            <br></br>
            <GetWebsites name="Websites" url="/rest/default/V1/store/websites"></GetWebsites>
        </Container>
    </div>
  );
}

export default App;
