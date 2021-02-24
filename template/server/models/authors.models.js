const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters long."],
        },
        image: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters long."],
        },
        chests: {
            type: String,
            required: [true, "{PATH is required}"]
        },
        phrase: {
            type: String,
            required: [true, "{PATH} is required"]
        },
        crew: {
            type: String,
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

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;