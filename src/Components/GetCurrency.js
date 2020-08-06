import React, { Component } from 'react';
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Button,
    Form, 
    FormGroup,
    Label,
    Input,
    Alert,
    Spinner
} from 'reactstrap';

class GetCurrency extends Component {


    constructor(props){
        super(props);
        this.state = {
            url: 'http://local.chemcentral.com',
            message: true,
            allowed: false,
            showSuccess: false,
            spinner:false
        }
    }

    getCurrency() {
        this.setState({
            spinner:true
        })
        const url = `${this.state.url}/rest/V1/directory/currency`;
        axios.get(url)
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            this.setState({
                spinner:false,
                showSuccess:true
            })
        });
    }
    
    render() {
      return (  
        <div>
            <Container fluid="md">
                <Row>
                    <Col xs={8}>
                        <Button variant="primary" onClick={() => this.getCurrency()}>
                            Get Currency
                        </Button>
                        <Spinner style={{ width: '2rem', height: '2rem' , display: this.state.spinner ? "block" : "none"}} />{' '}
                        <Alert style={{ display: this.state.showSuccess ? "block" : "none" }} color="success">
                            Curreny retrieved successfully.
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
}

export default GetCurrency;