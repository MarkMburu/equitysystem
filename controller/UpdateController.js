const db = require("../models");

const updateUnit = (req,res)=>{
    const{_id, ...data} = req.body 
     db.Unit.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('Unit updated'))
     .catch(err => res.status(400).json('Error: '+err));
    }
const updateLabour = (req,res)=>{
    const{_id, ...data} = req.body 
    db.Labour.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('Labour updated'))
    .catch(err => res.status(400).json('Error: '+err));
} 

const updateMaterial = (req,res)=>{
    const{_id, ...data} = req.body 
     db.Material.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('Material updated'))
     .catch(err => res.status(400).json('Error: '+err));
    }
const updateDriver = (req,res)=>{
    const{_id, ...data} = req.body 
    db.Driver.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('Driver updated'))
    .catch(err => res.status(400).json('Error: '+err));
}

const updateConducter = (req,res)=>{
    const{_id, ...data} = req.body 
     db.Conducter.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('Conducter updated'))
     .catch(err => res.status(400).json('Error: '+err));
 }
 
 const updateCounty = (req,res)=>{
    const{_id, ...data} = req.body 
     db.CountyFees.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('CountyFees updated'))
     .catch(err => res.status(400).json('Error: '+err));
}
const updateClerk = (req,res)=>{
    const{_id, ...data} = req.body 
     db.ClerkOfWorks.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('ClerkOfWorks updated'))
     .catch(err => res.status(400).json('Error: '+err));
}

const updateFuel = (req,res)=>{
    const{_id, ...data} = req.body 
     db.Fuel.findOneAndUpdate(req.params.id, data)
    .then(()=> res.json('Fuel updated'))
     .catch(err => res.status(400).json('Error: '+err));
}

module.exports = {
        updateUnit,
        updateLabour,
        updateMaterial,
        updateDriver,
        updateConducter,
        updateClerk,
        updateCounty,
        updateFuel
    }