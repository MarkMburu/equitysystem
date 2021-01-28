const mongoose = require("mongoose");

const {Schema} = mongoose;

const materialSchema = new Schema({
    materialName:{
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
    unit:{
    type : Schema.Types.ObjectId,
    ref: "Unit"
},
// future upgrade

//  amounts:[
//     {
//         type : Schema.Types.ObjectId,
//         ref: "amount"
//     }
// ]
})

const Material = mongoose.model("Material",materialSchema);

module.exports = Material;