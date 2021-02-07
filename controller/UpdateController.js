const db = require("../models");

const updateUnit = (req,res)=>{
    db.Unit.findById(req.params.id)
    .then(unit =>{
        unit.unitName = req.body.unitName
        unit.unitNumber = req.body.unitNumber
        unit.isApproved = req.body.isApproved
        unit.project = req.body.project
        unit.save()
        .then(()=> res.json('Unit updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
         .catch(err => res.status(400).json('Error: '+err)); 
        }
const updateLabour = (req,res)=>{
    db.Labour.findById(req.params.id)
    .then(labour =>{
        labour.amount = req.body.amount
        labour.from = req.body.from
        labour.to = req.body.to
        labour.number = req.body.number
        labour.category = req.body.category
        labour.project = req.body.project
        labour.save()
        .then(()=> res.json('Labour updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
         .catch(err => res.status(400).json('Error: '+err)); 
        }
const updateMaterial = (req,res)=>{
    db.Material.findById(req.params.id)
    .then(material =>{
        material.amount = req.body.amount
        material.title = req.body.title
        material.description = req.body.description
        material.quantity = req.body.quantity
        material.project = req.body.project
        material.save()
        .then(()=> res.json('Material updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
         .catch(err => res.status(400).json('Error: '+err));
}

const updateDriver = (req,res)=>{
    db.Driver.findById(req.params.id)
    .then(driver =>{
        driver.amount = req.body.amount
        driver.from = req.body.from
        driver.to = req.body.to
        driver.save()
        .then(()=> res.json('Driver updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
         .catch(err => res.status(400).json('Error: '+err));
}

const updateConducter = (req,res)=>{
    db.Conducter.findById(req.params.id)
    .then(conducter =>{
        conducter.amount = req.body.amount
        conducter.from = req.body.from
        conducter.to = req.body.to
        conducter.save()
        .then(()=> res.json('Conducter updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
         .catch(err => res.status(400).json('Error: '+err));
}
 
 const updateCounty = (req,res)=>{
    db.CountyFees.findById(req.params.id)
    .then(county =>{
        county.amount = req.body.amount
        county.from = req.body.from
        county.to = req.body.to
        county.save()
        .then(()=> res.json('CountyFees updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
         .catch(err => res.status(400).json('Error: '+err));
}
const updateClerk = (req,res)=>{
    db.ClerkOfWorks.findById(req.params.id)
    .then(clerk =>{
        clerk.amount = req.body.amount
        clerk.from = req.body.from
        clerk.to = req.body.to
        clerk.save()
        .then(()=> res.json('Fuel updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
        .catch(err => res.status(400).json('Error: '+err));
}
const updateFuel = (req,res)=>{
    db.Fuel.findById(req.params.id)
    .then(fuel =>{
        fuel.amount = req.body.amount
        fuel.from = req.body.from
        fuel.to = req.body.to
        fuel.comment = req.body.comment
        fuel.save()
        .then(()=> res.json('Fuel updated'))
        .catch(err => res.status(400).json('Error: '+err));
         })
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