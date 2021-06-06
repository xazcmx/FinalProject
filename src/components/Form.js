import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

//this is the form that will take the initial input to create the data
//that is displayed on the "tracking" component

const MyForm = (props) => {

    const [name, setName] = useState(``);
    const [price, setPrice] = useState(``);
    const [location, setLocation] = useState(``);


    const onSubmit = (e) => {
        console.log("onsubmit event contents", e)
        console.log("onsubmit var contents", name)
        console.log("onsubmit var contents", price)
        console.log("onsubmit var contents", location)
        e.preventDefault();
        setName("");
        setPrice("");
        setLocation("");
        if(!null) {
            props.addValue({name, price, location});
            setName("");
        } else {
            console.log("error on new house form submit");
        }
    }


 


    return (
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    </Col>
                    <Col>
                    <Form.Control
                        type="text"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                    </Col>
                    <Col>
                    <Form.Control
                        type="text"
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />
                    </Col>
                    <Col>
                    <Button variant="primary" type="submit">Submit</Button> 
                    </Col>                   
                </Row>       
            </Form>
    )
}

export default MyForm;