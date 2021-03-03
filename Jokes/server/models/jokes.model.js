const mongoose = require("mongoose"),
    db = mongoose.createConnection('mongodb://localhost/jokes'),
    Schema = mongoose.Schema;

let jokesSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    setup: {type: String,required: true},
    punchline: {type: String,required: true}
})
const Joke = db.model("jokes", jokesSchema);

module.exports = Joke;