import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
    const { pirateID, pirates, setPirates } = props;

    const submitDelete = (event) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirateID}`)
            .then((res) => {
                setPirates(pirates.filter((pirate) => pirate._id !== pirateID));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <button onClick={submitDelete}>Walk the Plank</button>
        </>
    )
}

export default DeleteButton;