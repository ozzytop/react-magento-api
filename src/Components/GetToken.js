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

class GetToken extends Component {


    constructor(props){
        super(props);
        this.state = {
            url: 'http://local.chemcentral.com',
            username: '',
            password: '',
            token:'',
            message: true,
            allowed: false,
            showSuccess: false,
            spinner:false
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    getToken() {

        this.setState({
            spinner: true
        })
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var data = new FormData();
        data.append("username", this.state.username);
        data.append("password", this.state.password);

        const url = `${this.state.url}/rest/V1/integration/admin/token`;
        axios.post(url, data, axiosConfig)
        .then((response) => {
            console.log(response);
            debugger;
            this.setState({
                allowed: true,
                showSuccess: true,
                token: response.data,
                spinner: false
            });
            localStorage.setItem('mg-admin-token', response.data);
        })
        .catch((err) => {
            console.log(err);
        });
        /*
        .then(function () {
            this.setState({
                spinner: false
            })
        });*/  

    }

    createProduct(){
        console.log('create Prduct');
    }

    handleUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    
  
    render() {
      return (  
        <div>
            <Container fluid="md">
                <Row>
                    <Col xs={8}>
                        <Row>
                            <Col xs={12}>
                                You have to get the token of your application for certain request.
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={12}>
                                This is the url that you are using for doing the requests: <strong>{this.state.url}</strong>
                            </Col>
                        </Row>  
                        <br></br>
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleUsername} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
                            </FormGroup>
                            
                            <Button variant="primary" onClick={() => this.getToken()}>
                                Get Token
                            </Button>
                            <Spinner style={{ width: '2rem', height: '2rem' , display: this.state.spinner ? "block" : "none"}} />{' '}
                            <Alert style={{ display: this.state.showSuccess ? "block" : "none" }} color="success">
                                You had a success request, the token is: {this.state.token}
                            </Alert>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
}

export default GetToken;