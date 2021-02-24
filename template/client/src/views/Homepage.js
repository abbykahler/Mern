import React, { useEffect } from "react";
import { Link } from "@reach/router";
import AuthorsTable from "../components/AuthorsTable";
import axios from "axios";

const Homepage = (props) => {
    const { authors, setAuthors } = props;
    const { image,setImage } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {})
            .catch((err) => { console.log(err); })
    }, [setAuthors]);

    return (
        <div>
            <h1>Pirate Crew</h1>
            <a href="/authors/new"><button>Add Pirate</button></a>
            <AuthorsTable authors={authors} setAuthors={setAuthors} />
        </div>
    )
};

export default Homepage;