import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const Form = (props) => {
    const { action, pirateID } = props;
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState(null);
    const [pirate, setPirate] = useState(null);
    const { name, setName } = useState(null);
    const { image, setImage } = useState(null);
    const { chests, setChests } = useState(null);
    const { phrase, setPhrase } = useState(null);
    const { crew, setCrew } = useState(null);
    const { pegLeg, setPegLeg } = useState(null);
    const { eyePatch, setEyePatch } = useState(null);
    const { hookHand, setHookHand } = useState(null);



    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${pirateID}`)
            .then((res) => {if (res.data.name !== undefined) {
                    setPirate(res.data);
                    setName(res.data.name);
                    setImage(res.data.image);
                    setChests(res.data.chests);
                    setPhrase(res.data.phrase)
                    setCrew(res.data.crew);
                    setPegLeg(res.data.pegLeg);
                    setEyePatch(res.data.eyePatch);
                    setHookHand(res.data.hookHand);
                }
            })
            .catch((err) => {console.log(err);})
    }, [pirateID])

    const handleSubmit = (event) => {event.preventDefault();
        const newPirate = {
            name: input,
            image: image,
            chests: chests,
            phrase:phrase,
            crew:crew,
            pegLeg:pegLeg,
            eyePatch:eyePatch,
            hookHand:hookHand,
        };

        if (action === "create") {
            axios.post('http://localhost:8000/api/pirates', newPirate)
                .then((res) => {navigate('/pirates')})
                .then((res) => window.location.reload())
                .catch((err) => { setErrors(err.response.data.errors) });
            setInput("");
        }

        if (action === "update") {
            axios.put(`http://localhost:8000/api/pirates/${pirateID}`, newPirate)
                .then((res) => { navigate('/pirates') })
                .then((res) => window.location.reload())
                .catch((err) => { setErrors(err.response.data.errors) });
            setInput('/')
        };
    }

  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Pirate Name:</label> <br></br>
                <input type="text" name="name" id="name"  onChange={(event) => setInput(event.target.value)} /> <br></br>

                <label htmlFor="image:">Image Url:</label> <br></br>
                <input type="text" name ="image" id="image"  onChange={(event) => setInput(event.target.value)} /> <br></br>

                <label htmlFor="chests:"># of Treasure Chests:</label> <br></br>
                <input type="number" name="chests" id="chests"  onChange={(event) => setInput(event.target.value)} /> <br></br>

                <label htmlFor="phrase:">Pirate Catch Phrase:</label> <br></br>
                <input type="text" name="phrase" id="phrase"  onChange={(event) => setInput(event.target.value)} /> <br></br>

                <label htmlFor="crew:">Crew Position:</label><br></br>
                    <select>
                    <option>Select One</option>
                    <option value="pirate">Captain</option>
                    <option value="pirate">First Mate</option>
                    <option value="pirate">Quarter Master</option>
                    <option value="pirate">Boatswain</option>
                    <option value="pirate">Powder Monkey</option>
                    </select> <br></br>

                <input type = "checkbox" />
                <label htmlFor="checkbox">Peg Leg</label> <br></br>
                
                <input type = "checkbox" />
                <label htmlFor="checkbox">Eye Patch</label> <br></br>
                
                <input type = "checkbox" />
                <label htmlFor="checkbox">Hook Hand</label> <br></br>
            
                <input type="submit" value="Add Pirate"/>
            </form>
        </div>
    )
};

export default Form;