const db = require("../models")

const getUnits = (req,res)=>{
    db.Unit.find({})
    .then((dbunit)=>{
        res.json(dbunit)
    })
    .catch((err)=>{res.json(err)})
};
const getMaterials = (req,res)=>{
    db.Material.find({})
    .then((dbmaterials) => {
        res.json(dbmaterials)
    })
    .catch((err)=>{res.json(err)})
}

const getLabour = (req,res)=>{
    db.Labour.find({})
    .then((dblabour) => {
        res.json(dblabour)
    })
    .catch((err)=>{res.json(err)})
}
const getFuel = (req,res)=>{
    db.Fuel.find({})
    .then((dbfuel) => {
        res.json(dbfuel)
    })
    .catch((err)=>{res.json(err)})
}

const getDrivers = (req,res)=>{
    db.Driver.find({})
    .then((dbdriver) => {
        res.json(dbdriver)
    })
    .catch((err)=>{res.json(err)})
}
const getConducter = (req,res)=>{
    db.Conducter.find({})
    .then((dbconducter) => {
        res.json(dbconducter)
    })
    .catch((err)=>{res.json(err)})
}

const getCountyFees = (req,res)=>{
    db.CountyFees.find({})
    .then((dbcounty) => {
        res.json(dbcounty)
    })
    .catch((err)=>{res.json(err)})
}
const getClerks= (req,res)=>{
    db.ClerkOfWorks.find({})
    .then((dbclerk) => {
        res.json(dbclerk)
    })
    .catch((err)=>{res.json(err)})
}
module.exports = {
    getUnits,
    getMaterials,
    getLabour,
    getFuel,
    getDrivers,
    getConducter,
    getClerks,
    getCountyFees
}