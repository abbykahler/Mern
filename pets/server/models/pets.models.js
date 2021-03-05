const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."],
        },
        type: {
            type: String,
            required: [true, "Type is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."],
        },

        description: {
            type: String,
            required: [true, "Please enter a description."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."]
        },

        skill1: {
            type: String,
        },

        skill2: {
            type: String,
        },

        skill3: {
            type: String,
        },

    },
    { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;