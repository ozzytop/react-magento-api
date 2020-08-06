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

class CreateProduct extends Component {


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
    }
    
  
    render() {
      return (  
        <div>
            <Container fluid="md">
                <Row>
                    <Col xs={8}>
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="sku">Sku</Label>
                                        <Input type="text" name="sku" id="sku" placeholder="Sku"  />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name"  />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="price">Price</Label>
                                        <Input type="text" name="price" id="price" placeholder="Price"  />
                                        Product typee, get dropdoown from here: /rest/default/V1/products/types
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="status">Select</Label>
                                        <Input type="select" name="status" id="status">
                                            <option value="1">In Stock</option>
                                            <option value="0">Out of Stock</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="weight">Weight</Label>
                                        <Input type="text" name="weight" id="weight" placeholder="Weight"  />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name"  />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="sku">Sku</Label>
                                        <Input type="text" name="sku" id="sku" placeholder="Sku"  />
                                        Product typee, get dropdoown from here: /rest/default/V1/products/types
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name"  />
                                    </FormGroup>
                                </Col>
                            </Row>


                            
                            <Button variant="primary" >
                                Create Product
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

export default CreateProduct;