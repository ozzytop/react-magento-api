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
            username: '',
            password: '',
            url: 'http://local.chemcentral.com',
            token:'',
            message: true,
            allowed: false,
            showSuccess: false,
            spinner:false,
            message: ''
        }
        this.handleUrl = this.handleUrl.bind(this);
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
            this.setState({
                allowed: true,
                showSuccess: true,
                error: false,
                token: response.data,
                spinner: false
            });
            localStorage.setItem('mg-admin-token', response.data);
        })
        .catch((err) => {
            this.setState({
                spinner: false,
                error: true,
                message: err.message
            });
            setTimeout(function(){
                this.setState({error:false});
            }.bind(this), 5000); 
        });

    }

    createProduct(){
        console.log('create Prduct');
    }

    handleUrl(event) {
        this.setState({
            url: event.target.value
        });
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
                                Before starting, insert the url of your Magento store, include the The Hypertext Transfer Protoco like this example: http://magento-store.com
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <FormGroup>
                                <Label for="url">Url</Label>
                                <Input type="text" name="url" id="url" placeholder="Url" value={this.state.url} onChange={this.handleUrl} />
                            </FormGroup>
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
                            
                            <Button variant="primary" onClick={() => this.getToken()} style={{ marginBottom: '1rem', marginRight: '10px' }}>
                                Get Token
                            </Button>
                            <Spinner style={{ width: '2rem', height: '2rem' , display: this.state.spinner ? "inline-block" : "none"}} />
                            <Alert style={{ display: this.state.showSuccess ? "block" : "none" }} color="success">
                                You had a success request, the token is: {this.state.token}
                            </Alert>
                            <Alert style={{ display: this.state.error ? "block" : "none" }} color="danger">
                                Error: {this.state.message}
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