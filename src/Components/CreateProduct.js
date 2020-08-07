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
    Spinner,
    Collapse,
    Card,
    CardBody
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
            spinner:false,
            open:true
        }
    }

    toggle() {
        this.setState({
            open: !this.state.open
        })
    }
    
    render() {
 
        
      return ( 
        
        <div>
            <Button color="primary" onClick={() => this.toggle()} style={{ marginBottom: '1rem' }}>Create a Product</Button>
            <Collapse
                isOpen={this.state.open}>
                <Card>
                    <CardBody>
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
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="status">Status</Label>
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
                                                    <Label for="visibility">Visibility</Label>
                                                    <Input type="select" name="visibility" id="visibility">
                                                        <option value="1">Visible</option>
                                                        <option value="0">Not Visible</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                            <FormGroup>
                                                    <Label for="type">Product Type</Label>
                                                    <Input type="select" name="type" id="type">
                                                        <option value="simple">Simple</option>
                                                        <option value="configurable">Configurable</option>
                                                    </Input>
                                                </FormGroup>
                                                Product typee, get dropdoown from here: /rest/default/V1/products/types
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
                    </CardBody>
                </Card>
            </Collapse>
        </div>
      );
    }
}

export default CreateProduct;