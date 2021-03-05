import React from "react";
import { navigate } from "@reach/router";

const EditButton = (props) => {
    const { petID } = props;

    const editClicked = (event) => {
        navigate(`/pets/${petID}/edit`);
    }

    return (
        <>
            <a href="" onClick={editClicked}>edit</a>
        </>
    )
}

export default EditButton;