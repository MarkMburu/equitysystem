const mongoose = require("mongoose")

const {Schema} = mongoose;

const transportSchema = new Schema({
    fuel:{
        amount:{
            type: Number,
            required: true,
        },
        duration:{
            type: Date,
            required: true
        }
    },
    service:{
        amount:{
            type: Number,
            required: true,
        },
        duration:{
            type: Date,
            required: true
        }
    },
    driver:{
        amount:{
            type: Number,
            required: true,
        },
        duration:{
            type: Date,
            required: true
        }
    },
    conducter:{
        amount:{
            type: Number,
            required: true,
        },
        duration:{
            type: Date,
            required: true
        }
    },
    countyfees:{
        amount:{
            type: Number,
            required: true,
        },
        duration:{
            type: Date,
            required: true
        }
    }
});

module.exports = mongoose.model("Transport",transportSchema);