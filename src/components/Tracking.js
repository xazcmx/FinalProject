import React, { useEffect, useState } from "react";
import { newAPI } from "../API/API";
import MyForm from "./Form";
import Button from 'react-bootstrap/Button';
import UpdateModal from "./UpdateModal";
import { FaTrashAlt } from "react-icons/fa"
import Footer from "./Footer";

//This component takes input and displays it, allowing you to edit or delete inputs


const Tracking = (props) => {



    const [array, setState] = useState([]);
    const [value, setValue] = useState("");

    

    useEffect(() => fetch(), [value]);

    const fetch = async () => {
        const display = await newAPI.get();
        // console.log("fetch from tracking component",array)
        // console.log(display)
        setState(display)
    }

    const createValue = async (name, price, location) => {
       const newValue = await newAPI.create(name, price, location);
       setValue(newValue)
    }

    const addValue = (name, price, location) => {
        createValue({...name, ...price, ...location})
    }

    const deleteTable = async (id) => {
        await newAPI.delete(id);        
        console.log(id);
        fetch();
    }

    // const updateTable = async (name, price, location, id) => {
    //      await newAPI.update(name, price, location, id);
    //      console.log(name, price, location, id)
    //      fetch();
    // }

    return (
        <div>
            <h1>Tracking page</h1>            
            <MyForm
                addValue={addValue}
                
             />

            <ul>
                {array.map((thing, index) => (
                    <li key={index}>
                        <label>{`${thing.name} ${thing.price} ${thing.location}  `}</label>
                        <UpdateModal props={thing}/>
                        <Button variant="outline-danger" className="m-1" size="sm" type="submit" onClick={(e) => deleteTable(thing._id, console.log(thing._id))}>
                             < FaTrashAlt  /> 
                        </Button>

                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    )
}

export default Tracking;