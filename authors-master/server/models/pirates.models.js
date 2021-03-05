const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters long."],
        },
        phrase: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters long."],
        },
        chests: {
            type: String,
            required: [true, "{PATH} is required"],
        },
        phrase: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        crew: {
            type: String,
            required: [true, "{Path} is required"]
        },
        
    },

    { timestamps: true }
);

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;