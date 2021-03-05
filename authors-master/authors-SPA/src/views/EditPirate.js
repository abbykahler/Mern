import React from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const EditPirate = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            {/* <h1>{pirate.name}</h1> */}
            <Form action="update" pirateID={props._id} />
        </div>
    )
}

export default EditPirate;