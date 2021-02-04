const mongoose = require("mongoose");

const {Schema} = mongoose;

const FuelSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    from:{
        type:  Date,
        required: true
    },
    to:{
        type:  Date,
        required: true
    },  
    project:{
        type: Schema.Types.ObjectId,
        ref: "Project",
    }
})
const Fuel = mongoose.model("Fuel",FuelSchema);

module.exports = Fuel;