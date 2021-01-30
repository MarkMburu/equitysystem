const mongoose = require("mongoose");

const {Schema} = mongoose;

const ClerkOfWorkSchema = new Schema({
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
const ClerkOfWork = mongoose.model("ClerkOfWork",ClerkOfWorkSchema);

module.exports = ClerkOfWork;