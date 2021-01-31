const mongoose = require("mongoose");

const {Schema} = mongoose;

const materialSchema = new Schema({
    name:{
        type:String,
        required: true,

    },
    number:{
        type: Number,
        required: true
    },
    
    amount:{
        type: Number,
        require: true
    },

     project:{
    type: Schema.Types.ObjectId,
    ref: "Project"
}
})

const Material = mongoose.model("Material",materialSchema);

module.exports = Material;