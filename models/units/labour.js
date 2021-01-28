const mongoose = require("mongoose");

const {Schema} = mongoose;


const labourSchema = new Schema({
    category:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true,
    },
    amount:{
        type: Number,
        required: true
    },
    unit:{
        type : Schema.Types.ObjectId,
        ref: "Unit"
    }

})

const Labour = mongoose.model("Labour",labourSchema);

module.exports = Labour;