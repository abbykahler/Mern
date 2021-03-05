const port = 8000;
const db_name = "pets_db";
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);

const app = express();
app.use(express.json());
app.use(cors());

require("./routes/pets.routes")(app);

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests.`);
});