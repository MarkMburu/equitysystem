const db = require("../models");

const getAllUnits = (req,res)=>{
    db.Unit.find({})
    .then((dbunit)=>{
        res.json(dbunit)
    })
    .catch((err)=>{res.json(err)})
};

const addLabourerToUnit = (req,res)=>{
    let{category,number,amount} = req.body
    db.Labour.create({category,number,amount})
    .then((dblabour)=>{
      return db.Unit.findOneAndUpdate({ _id: req.body._id }, {$push: {labourers: dblabour._id}}, { new: true });
    })
    .then(function(dbUnit) {
        res.json(dbUnit);
    })
    .catch((err)=> res.json(err))
};
const addMaterialToUnit = (req,res)=>{
    db.Material.create(req.body)
    .then((dbmaterial)=>{
      return db.Unit.findOneAndUpdate({ _id: req.params.id }, {$push: {materials: dbmaterial._id}}, { new: true });
    })
    .then(function(dbUnit) {
        res.json(dbUnit);
    })
    .catch((err)=> res.json(err))
};

const getOneUnit = (req,res)=>{
    db.Unit.findOne({ _id: req.params.id })
    .populate("labourers")
    .populate("materials")
    .then(function(dbunit) {
        res.json(dbunit);
    })
    .catch(function(err) {
        res.json(err);
    });
}

module.exports = {
  getAllUnits,
  addLabourerToUnit,
  getOneUnit,
  addMaterialToUnit
}