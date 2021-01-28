const mongoose = require("mongoose");

const {Schema} = mongoose;

const amountSchema = new Schema({
   amount:{
       type: Number,
       required: true
   },  
   labour:{
    type : Schema.Types.ObjectId,
    ref: "Labour"
   },
   transport:{
    type : Schema.Types.ObjectId,
    ref: "Transport"
   },
   material:{
    type : Schema.Types.ObjectId,
    ref: "Material"
   }
})

const amount = mongoose.model("amount",amountSchema)

module.exports = amount;