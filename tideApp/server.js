const express = require("express");
const app = express();
const cors = require('cors');
const portNum = 8000;

// This will fire the mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

//allows for cross-origin request. Connecting frontend(React) to backend(Express)
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// links routes.js to this server
require('./server/routes/tide.routes')(app); 

app.listen(portNum, () => console.log(`The server is locked, cocked and ready to rock on port ${portNum}`));