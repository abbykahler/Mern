import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const Form = (props) => {
    const { action, petID } = props;
    const [state, setState] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
    });
    let button_text = ""

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${petID}`)
            .then((res) => {setState(res.data)})
            .catch((err) => { console.log(err); })
    }, [petID]);


    const displayErrors = (field) => {
        switch (field) {
            case "name":
                return (
                    errors && (
                        <small style={{ color: 'red' }}>{errors?.name?.properties?.message}</small>
                    ))
            case "type":
                return (
                    errors && (
                        <small style={{ color: 'red' }}>{errors?.type?.properties?.message}</small>
                    ))
            case "description":
                return (
                    errors && (
                        <small style={{ color: 'red' }}>{errors?.description?.properties?.message}</small>
                    ))
            default:
                break;
        }
    }

    if (action === 'create') {
        button_text = "Add Pet"
    } else {
        button_text = "Edit Pet"
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPet = { 
            name: state.name, 
            type: state.type,
            description: state.description,
            skill1: state.skill1,
            skill2: state.skill2,
            skill3: state.skill3,
        };

        if (action === "create") {
            axios.post('http://localhost:8000/api/pet/new', newPet)
                .then((res) => {
                    navigate('/');
                    window.location.reload()
                })
                .catch((err) => { setErrors(err.response.data.errors) })
                setState({})
        }

        if (action === "update") {
            axios.put(`http://localhost:8000/api/pet/${petID}`, newPet)
                .then((res) => {
                    navigate('/')
                    window.location.reload()
                })
                .catch((err) => { setErrors(err.response.data.errors) })
                setState({})
        }
        
    }
    const handleChange = (evt, field) => {
        evt.preventDefault();
        setState({
            ...state,
            [field]: evt.target.value,
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Pet Name:</label> {displayErrors("name")}<br/>
                <input type="text" name="name" value={state.name} onChange={(event) => handleChange(event, "name")}/> <br/>

                <label htmlFor="image">Pet Type:</label> {displayErrors("type")}<br></br>
                <input type="text" name ="type" value={state.type} onChange={(event) => handleChange(event, "type")} /> <br/>

                <label htmlFor="chests:">Pet Description:</label> {displayErrors("description")}<br/>
                <input type="text" name="description" value={state.description} onChange={(event) => handleChange(event, "description")} /> <br/>

                <p>Skills (optional):</p>
                <label htmlFor="skill1">Skill 1:</label> {displayErrors("skill1")}<br/>
                <input type="text" name="skill1" value={state.skill1} onChange={(event) => handleChange(event, "skill1")} /> <br/>

                <label htmlFor="skill2">Skill 2:</label> {displayErrors("skill2")}<br/>
                <input type="text" name="skill2" value={state.skill2} onChange={(event) => handleChange(event, "skill2")} /> <br/>

                <label htmlFor="skill3">Skill 3:</label> {displayErrors("skill3")}<br/>
                <input type="text" name="skill3" value={state.skill3} onChange={(event) => handleChange(event, "skill3")} /> <br/>

                <button>{button_text}</button>
            </form>
        </div>
    )
};

export default Form;