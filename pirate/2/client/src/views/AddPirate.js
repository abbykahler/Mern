import React,{useState} from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const AddPirate = (props) => {



    return (
        <div>
            <h1>Add Pirate</h1>
            <a href="/pirates"><button>Crew Board</button></a>
            <Form action="create" />
        </div>
    )
}

export default AddPirate;