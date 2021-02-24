import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const Form = (props) => {
    const { action, authorID } = props;
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState(null);
    const [author, setAuthor] = useState(null);
    const [image, setImage] = useState(null);
    const [chests, setChests] = useState(null);
    const [phrase, setPhrase] = useState(null);
    const [crew, setCrew] = useState(null);
    const { pegLeg, setPegLeg } = useState(null);
    const { eyePatch, setEyePatch } = useState(null);
    const { hookHand, setHookHand } = useState(null);


    const displayErrors = () => {
        return (
            errors && (
                <small style={{ color: 'red' }}>{errors?.name?.properties?.message}</small>
            ))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${authorID}`)
            .then((res) => {if (res.data.name !== undefined) {
                    setAuthor(res.data);
                    setInput(res.data.name);
                    setImage(res.data.image);
                    setChests(res.data.chests);
                    setPhrase(res.data.phrase);
                    setCrew(res.data.crew);
                    setPegLeg(res.data.pegLeg);
                    setEyePatch(res.data.eyePatch);
                    setHookHand(res.data.hookHand);
                }
            })
            .catch((err) => {console.log(err);})
    }, [authorID])

    const handleSubmit = (event) => {event.preventDefault();
        const newAuthor = {
            name: input,
            image:image,
            chests:chests,
            phrase:phrase,
            crew:crew,
            pegLeg:pegLeg,
            eyePatch:eyePatch,
            hookHand:hookHand,
        };

        if (action === "create") {
            axios.post('http://localhost:8000/api/authors', newAuthor)
                .then((res) => {navigate('/')})
                .then((res) => window.location.reload())
                .catch((err) => { setErrors(err.response.data.errors) });
            setInput("");
        }

        if (action === "update") {
            axios.put(`http://localhost:8000/api/authors/${authorID}`, newAuthor)
                .then((res) => { navigate('/') })
                .then((res) => window.location.reload())
                .catch((err) => { setErrors(err.response.data.errors) });
            setInput('/')
        };
    }

    if (!author && action === "update") {
        return (
            <>
                <p>If you would like to add them, please <Link to="/authors/new">Click here!</Link></p>
            </>
        )
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Pirate Name:</label> {displayErrors()}<br></br>
                <input type="text" name="name" id="name" value={input} onChange={(event) => setInput(event.target.value)} /> <br></br>

                <label htmlFor="image">Image URL:</label> {displayErrors()}<br></br>
                <input type="text" name="image" id="image" value={image} onChange={(event) => setImage(event.target.value)} /> <br></br>

                <label htmlFor="chests"># of Treasure Chests:</label> {displayErrors()}<br></br>
                <input type="number" name="chests" id="chests"  value={chests}onChange={(event) => setChests(event.target.value)} /> <br></br>

                <label htmlFor="phrase:">Pirate Catch Phrase:</label>{displayErrors()} <br></br>
                <input type="text" name="phrase" id="phrase"  onChange={(event) => setPhrase(event.target.value)} /> <br></br>

                <label htmlFor="crew:">Crew Position:</label><br></br>
                    <select>
                    <option>Select One</option>
                    <option value="crew">Captain</option>
                    <option value="crew">First Mate</option>
                    <option value="crew">Quarter Master</option>
                    <option value="crew">Boatswain</option>
                    <option value="crew">Powder Monkey</option>
                    </select> <br></br>
                
                <input type = "checkbox" />
                <label htmlFor="checkbox">Peg Leg</label> <br></br>
                
                <input type = "checkbox" />
                <label htmlFor="checkbox">Eye Patch</label> <br></br>
                
                <input type = "checkbox" onChange={(event) => setHookHand(event.target.value)} /> 
                <label htmlFor="checkbox">Hook Hand</label> <br></br>

                <button type="button" onClick={(event) => navigate('/')}>Cancel</button>
                <button>Submit</button>
            </form>
        </>
    )
};

export default Form;