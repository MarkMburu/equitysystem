const db = require("../models")

const deleteUnit=(req,res)=>{
    db.Unit.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Unit Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}
const deleteLabour=(req,res)=>{
    db.Labour.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Labour Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}

const deleteFuel=(req,res)=>{
    db.Fuel.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Fuel Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}
const deleteDriver=(req,res)=>{
    db.Driver.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Driver Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}
const deleteConducter=(req,res)=>{
    db.Conducter.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Unit Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}

const deleteCounty=(req,res)=>{
    db.CountyFees.findByIdAndDelete(req.params.id)
    .then(()=> res.json('CountyFees Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}

const deleteClerk=(req,res)=>{
    db.ClerkOfWorks.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Clerk Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}
const deleteMaterial=(req,res)=>{
    db.Material.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Material Deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}

module.exports = {
    deleteUnit,
    deleteLabour,
    deleteFuel,
    deleteConducter,
    deleteDriver,
    deleteCounty,
    deleteClerk,
    deleteMaterial
}