import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"
import { newAPI } from "../API/API";

//This is the form that goes into to modal to facilitate updating the data 

const UpdateForm = (props) => {

    // console.log(props)
    // console.log(props.props)
    // console.log(props.props.props)

    const [array, setState] = useState([]);
    const [value, setValue] = useState("");

    const fetch = async () => {
        const display = await newAPI.get();
        console.log("calling fetch",array)
        console.log(display)
        setState(display)
    }

    const [name, setName] = useState(``);
    const [price, setPrice] = useState(``);
    const [location, setLocation] = useState(``);


    const updateTable = async (thing) => {
        // console.log("update table 'props.props.props' contents", props.props.props)
        // console.log("onsubmit thing contents", thing)
        // console.log("onsubmit var contents", name)
        // console.log("onsubmit var contents", price)
        // console.log("onsubmit var contents", location)
        // let id = props.props.props._id
        await newAPI.update(thing);
            console.log("onsubmit thing contents: post await", thing)
        setValue(thing);
   }

    const onSubmit = (e) => {
        
        // console.log("onsubmit event contents", props.props.props)
        // console.log("onsubmit name contents", name)
        // console.log("onsubmit price contents", price)
        // console.log("onsubmit location contents", location)

        e.preventDefault();
        setName(name);
        setPrice(price);
        setLocation(location);
        if(!null) {
            console.log("onsubmit props value", props, name, price, location, {props, name, price, location})
            updateTable({props, name, price, location});
            setName("");
            setPrice("");
            setLocation("");
            fetch();
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

export default UpdateForm;