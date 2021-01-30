const db = require("../models")
const getAllUnits = (req,res)=>{
    db.Unit.find({})
    .then((dbunit)=>{
        res.json(dbunit)
    })
    .catch((err)=>{res.json(err)})
};