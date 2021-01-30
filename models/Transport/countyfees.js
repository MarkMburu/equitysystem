const mongoose = require("mongoose");

const {Schema} = mongoose;

const CountyFeesSchema = new Schema({
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
const CountyFees = mongoose.model("CountyFees",CountyFeesSchema);

module.exports = CountyFees;