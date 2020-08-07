import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/GetToken'
import { Container } from 'react-bootstrap';
import GetToken from './Components/GetToken';
import GetCurrency from './Components/GetCurrency';
import CreateProduct from './Components/CreateProduct';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap';

function App() {
  return (
    <div>
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
        </Container>
    </div>
  );
}

export default App;
