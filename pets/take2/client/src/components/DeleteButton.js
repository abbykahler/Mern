import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const DeleteButton = (props) => {
    const { petName, petID } = props;

    const submitDelete = (event) => {
        axios.delete(`http://localhost:8000/api/pet/${petID}`)
            .then((res) => {
                navigate('/');
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <button onClick={submitDelete}>Adopt {petName}</button>
        </>
    )
}

export default DeleteButton;