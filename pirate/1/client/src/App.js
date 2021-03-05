import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Router } from "@reach/router";
import './App.css';
import Homepage from './views/Homepage';
import AddPirate from './views/AddPirate';
import EditPirate from './views/EditPirate';


function App() {
  const [pirates, setPirates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates")
      .then((res) => { setPirates(res.data) })
      .catch((err) => { console.log(err); })
  }, [])

  return (
    <>
      <Router>
        <Homepage path="/pirates" pirates={pirates} setPirates={setPirates} />
        <AddPirate path="/pirates/new" />
        <EditPirate path="/pirates/edit/:_id" />
      </Router>
    </>
  );
}

export default App;
