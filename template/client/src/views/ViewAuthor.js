import React, { useEffect } from "react";
import { Link } from "@reach/router";
import ViewTable from "../components/ViewTable";
import axios from "axios";

const ViewAuthor = (props) => {
    const { authors, setAuthors } = props;
    const { image,setImage } = props;
    const {view, setView } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {})
            .catch((err) => { console.log(err); })
    }, [setAuthors]);

    return (
        <div> 
            <ViewTable authors={authors} setAuthors={setAuthors} />
        </div>
    )
};

export default ViewAuthor;