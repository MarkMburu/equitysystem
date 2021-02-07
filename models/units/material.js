const mongoose = require("mongoose");

const {Schema} = mongoose;
// MaterialForm.js:68 {project: "6019d1f87327c70f2060e5e3", quantity: "1", amount: "120", description: "1234", title: "Cement"}
const materialSchema = new Schema({
    title:{
        type:String,
        required: true,

    },
    quantity:{
        type: Number,
        required: true
    },
    
    amount:{
        type: Number,
        require: true
    },

    description:{
        type: String
    },

     project:{
    type: Schema.Types.ObjectId,
    ref: "Project"
}
})

const Material = mongoose.model("Material",materialSchema);

module.exports = Material;