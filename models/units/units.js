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
    project:{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }
    
});
module.exports = mongoose.model("Unit",unitSchema)