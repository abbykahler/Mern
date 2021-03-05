const mongoose = require("mongoose");

module.exports = (db_name) => {
    mongoose
        .connect(`mongodb://localhost/${db_name}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("Successfully connected to db");
        })
        .catch((err) => {
            console.log("Mongoose connection to db failed", err);
        });
};