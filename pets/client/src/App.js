import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Router } from "@reach/router";
import './App.css';
import Homepage from './views/Homepage';
import AddPet from './views/AddPet';
import ViewPet from './views/ViewPet';
import EditPet from './views/EditPet';


function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then((res) => { setPets(res.data) })
      .catch((err) => { console.log(err); })
  }, [])

  return (
    <>
      <Router>
        <Homepage path="/" pets={pets} setPets={setPets} />
        <AddPet path="/pets/new" />
        <ViewPet path="/pets/:_id" />
        <EditPet path="/pets/:_id/edit" />
      </Router>
    </>
  );
}
export default App;
