import React, { Component } from 'react';
import axios from 'axios';
import { FaChevronDown } from "react-icons/fa";
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
            sku: '',
            name: '',
            price:'',
            status:'',
            weight:'',
            visibility: '',
            productType: '',
            message: true,
            allowed: false,
            showSuccess: false,
            spinner:false,
            open:true,
            fields: {},

        }
    }

    toggle() {
        this.setState({
            open: !this.state.open
        })
    }

    createProduct() {
        debugger;
        this.setState({
            spinner: true
        })

        if(!this.handleValidation()){
            alert("Form has errors.");
            return false;
         }

        const token = localStorage.getItem('mg-admin-token');
        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            }
        };

        var data = new FormData();
        data.append("sku", this.state.fields['sku']);
        data.append("name", this.state.fields['name']);
        data.append("price", this.state.fields['price']);
        data.append("status", this.state.fields['status']);
        data.append("weight", this.state.fields['weight']);
        data.append("visibility", this.state.fields['visibility']);
        data.append("productType", this.state.fields['productType']);
        
        const url = `${this.state.url}/rest/default/V1/products`;
        axios.post(url, data, axiosConfig)
        .then((response) => {
            debugger;
            console.log(response);
            this.setState({
                spinner: false
            });

        })
        .catch((err) => {
            debugger;
            console.log(err);
            this.setState({
                spinner: false,
                error: true,
                message: err.message
            });

        });

    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
        this.setState({errors: errors});
        return formIsValid;
    }



    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    
    render() {
 
        
      return ( 
        
        <div>
            <Button color="primary" onClick={() => this.toggle()} style={{ marginBottom: '1rem' }}> <FaChevronDown /> Create a Product</Button> 
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
                                                    <Input type="text" name="sku" id="sku" placeholder="Sku" value={this.state.fields["sku"]} onChange={this.handleChange.bind(this, "sku")} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="name">Name</Label>
                                                    <Input type="text" name="name" id="name" placeholder="Name"  value={this.state.fields["name"]} onChange={this.handleChange.bind(this, "name")} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="price">Price</Label>
                                                    <Input type="text" name="price" id="price" placeholder="Price"  value={this.state.fields["price"]} onChange={this.handleChange.bind(this, "price")} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="status">Status</Label>
                                                    <Input type="select" name="status" id="status" value={this.state.fields["status"]} onChange={this.handleChange.bind(this, "status")} >
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
                                                    <Input type="text" name="weight" id="weight" placeholder="Weight" value={this.state.fields["weight"]} onChange={this.handleChange.bind(this, "weight")} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="visibility">Visibility</Label>
                                                    <Input type="select" name="visibility" id="visibility" value={this.state.fields["visibility"]} onChange={this.handleChange.bind(this, "visibility")} >
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
                                                    <Input type="select" name="type" id="type" value={this.state.fields["productType"]} onChange={this.handleChange.bind(this, "productType")} >
                                                        <option value="simple">Simple</option>
                                                        <option value="configurable">Configurable</option>
                                                    </Input>
                                                </FormGroup>
                                                Product typee, get dropdoown from here: /rest/default/V1/products/types
                                            </Col>
                                        </Row>
                                        <Button variant="primary" style={{ marginBottom: '1rem', marginRight: '10px' }} onClick={() => this.createProduct()}>
                                            Create Product
                                        </Button>
                                        <Spinner style={{ width: '2rem', height: '2rem' , display: this.state.spinner ? "inline-block" : "none"}} />
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