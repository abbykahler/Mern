import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
    const { authorID, authors, setAuthors } = props;

    const submitDelete = (event) => {
        axios.delete(`http://localhost:8000/api/authors/${authorID}`)
            .then((res) => {
                setAuthors(authors.filter((author) => author._id !== authorID));
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