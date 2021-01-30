const mongoose = require("mongoose");

const {Schema} = mongoose;

const projectSchema = new Schema({
    projectName:{type:String,required:true},
    projectNumber:{type:Number,required:true},
    numberOfUnits:{type:Number,required:true},
    clerkofworks:[{
        type:Schema.Types.ObjectId,
        ref:"lerkOfWorks"
    }],
    countyFees:[{
        type:Schema.Types.ObjectId,
        ref:"CountyFees"
    }],

    conducters:[{
        type:Schema.Types.ObjectId,
        ref:"Conducter"
    }],
    
  drivers:[
    {
        type:Schema.Types.ObjectId,
        ref:"Driver"
    }
  ] ,
  fuel:[
    {
        type:Schema.Types.ObjectId,
        ref:"Fuel"
    }
  ] ,
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