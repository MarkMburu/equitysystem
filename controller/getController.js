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
const getFuelPerProject = (req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("fuel")
    .then((dbfuel) => {
        console.log(dbfuel)
        res.json(dbfuel)
    })
    .catch((err)=>{res.json(err)})
}
const getLabourPerProject=(req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("labourers")
    .then((dblabour)=>{
        console.log(dblabour)
        res.json(dblabour)
    })
    .catch(dblabour)
}
const getMaterialsPerProject=(req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("materials")
    .then((dbmaterials)=>{
        console.log(dbmaterials)
        res.json(dbmaterials)
    })
    .catch(dbmaterials)
}
const getConductersPerProject=(req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("conducters")
    .then((dbconducters)=>{
        console.log(dbconducters)
        res.json(dbconducters)
    })
    .catch(err => console.log(err))
}
const getDriversPerProject=(req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("drivers")
    .then((dbdrivers)=>{
        console.log(dbdrivers)
        res.json(dbdrivers)
    })
    .catch(err => console.log(error))
}
const getClerkPerProject=(req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("clerkofworks")
    .then((dbclerk)=>{
        console.log(dbclerk)
        res.json(dbclerk)
    })
    .catch(err => console.log(err))
}
const getCountyFeesPerProject=(req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("countyFees")
    .then((dbcounty)=>{
        console.log(dbcounty)
        res.json(dbcounty)
    })
    .catch(err =>console.log(err))
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
    getCountyFees,
    getFuelPerProject,
    getLabourPerProject,
    getMaterialsPerProject,
    getConductersPerProject,
    getDriversPerProject,
    getClerkPerProject,
    getCountyFeesPerProject
}