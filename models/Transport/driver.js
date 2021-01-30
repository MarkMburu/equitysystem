const mongoose = require("mongoose");

const {Schema} = mongoose;

const DriverSchema = new Schema({
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
        ref: "Project"
    }
})
const Driver = mongoose.model("Driver",DriverSchema);

module.exports = Driver;