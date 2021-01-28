// const Transport = require("./transport");
const mongoose = require("mongoose");

const {Schema} = mongoose;

const projectSchema = new Schema({
    projectName:{type:String,required:true},
    projectNumber:{type:String,required:true},
    numberOfUnits:{type:String,required:true},
    clerkOfWorksAmount:{type:String},
    clerkOfWorksFrom:{type:Date},
    clerkOfWorksTo:{type:Date},
    transportFuelAmount:{type:String},
    transportFuelFrom:{type:Date},
    transportFuelTo:{type:Date},
    transportServiceAmount:{type:String},
    transportServiceFrom:{type:Date},
    transportServiceTo:{type:Date},
    transportDriverAmount:{type:String},
    transportDriverFrom:{type:Date},
    transportDriverTo: {type:Date},
    transportConducterAmount:{type:String},
    transportConducterFrom:{type:Date},
    transportConducterTo:{type:Date}, 
    countyFeesAmount:{type:String},
    countyFeesFrom:{type:Date},
    countyFeesTo:{type:Date},
 units:[
        {
            type:Schema.Types.ObjectId,
            ref:"Unit"
        }
    ]
},{
    timestamps:true
})

module.exports = mongoose.model("Project",projectSchema);