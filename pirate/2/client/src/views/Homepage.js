import React, { useEffect } from "react";
import { Link } from "@reach/router";
import PiratesTable from "../components/PiratesTable";
import axios from "axios";

const Homepage = (props) => {
    const { pirates, setPirates } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((res) => {})
            .catch((err) => { console.log(err); })
    }, [setPirates]);

    return (
        <div>
            <h1>Pirate Crew</h1>
            <a href="/pirates/new"><button>Add Pirate</button></a>
            <PiratesTable pirates={pirates} setPirates={setPirates} />
        </div>
    )
};

export default Homepage;