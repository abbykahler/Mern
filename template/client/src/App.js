import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Router } from "@reach/router";
import './App.css';
import Homepage from './views/Homepage';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
import ViewAuthor from './views/ViewAuthor';
// authors

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then((res) => { setAuthors(res.data) })
      .catch((err) => { console.log(err); })
  }, [])

  return (
    <div>
      <Router>
        <Homepage path="/" authors={authors} setAuthors={setAuthors} />
        <AddAuthor path="/authors/new" />
        <ViewAuthor path="/authors/:_id" authors={authors} setAuthors={setAuthors}/>
      </Router>
    </div>
  );
}

export default App;
