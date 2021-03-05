const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, " is required"],
            minlength: [2, "Name must be at least {MINLENGTH} characters long."],
        },
        image: {
            type: String,
            required: [true, " is required"],
            minlength: [10, "{PATH} must be at least {MINLENGTH} characters long."],

        },
        chests: {
            type: Number,
            required: [true, "Please enter number of chests."]
            
        },

        phrase: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [10, "{PATH} must be at least {MINLENGTH} characters long."],
        },

        crew : {
            type: String,
            required:[true, "Please select your crew position"]
        },
        pegLeg : {
            type: Boolean,
            default:true
        },
        eyePatch : {
            type: Boolean,
            default:true
        },
        hookHand : {
            type: Boolean,
            default:true
        },

    },
    { timestamps: true }
);

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;