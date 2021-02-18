const mongoose = require('mongoose');

const TideSchema = new mongoose.Schema({
    name: { 
        type: String ,
        // required: [true, "Name is required"],
        // minlength: [2, "Names must be 2 letters or longer"]
    },
}, { timestamps: true });

module.exports.Tide = mongoose.model('Tide', TideSchema);