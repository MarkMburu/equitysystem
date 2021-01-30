const mongoose = require("mongoose");

const {Schema} = mongoose;

const ConducterSchema = new Schema({
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
const Conducter = mongoose.model("Conducter",ConducterSchema);

module.exports = Conducter;