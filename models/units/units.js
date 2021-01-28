const mongoose = require("mongoose");

const {Schema} = mongoose;

const unitSchema = new Schema({
    isApproved:{
        type: Boolean
    },
    unitName:{
        type: String,
        required: true,
    },
    unitNumber:{
       type: String,
       required: true
    },
    labourers:[
        {
        type: Schema.Types.ObjectId,
        ref: "Labour"
    }
    ],
    materials:[{
        type: Schema.Types.ObjectId,
        ref:"Material"
    },
],
    
});
module.exports = mongoose.model("Unit",unitSchema)