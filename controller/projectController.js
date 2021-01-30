const db = require("../models")
const Project = require("../models/projects")

const getAllProjects = (req,res)=>{
    db.Project.find()
    .then((dbproject)=>res.json(dbproject) )
};

const postProject = (req,res)=>{
    let newProject = new Project(req.body);
    newProject.save()
    .then((dbproject) => {
        res.json(dbproject)
    })
    .catch((err)=>{
        console.log(req.body)
        console.log(err)
    })
};
const addUnitToProject =(req,res)=>{
    let {unitName, unitNumber,isApproved} = req.body
    db.Unit.create({unitName, unitNumber,isApproved})
    .then((dbunit)=>{
        console.log(dbunit)
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {units: dbunit._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}


const addLabourToProject =(req,res)=>{
    const {_id,...data} = req.body;
    db.Labour.create(data)
    .then((dblabour)=>{
        console.log(dblabour)
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {labour: dblabour._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}

const addMaterialToProject =(req,res)=>{
    const {_id,...data} = req.body;
    db.Material.create(data)
    .then((dbmaterial)=>{
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {material: dbmaterial._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}

const addDriverToProject =(req,res)=>{
    const {_id,...data} = req.body;
    db.Driver.create(data)
    .then((dbdriver)=>{
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {driver: dbdriver._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}
const addFuelToProject =(req,res)=>{
    const {_id,...data} = req.body;
    db.Fuel.create(data)
    .then((dbfuel)=>{
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {fuel: dbfuel._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}

const addConducterToProject =(req,res)=>{
    const {_id,...data} = req.body;
    db.Conducter.create(data)
    .then((dbconducter)=>{
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {conducter: dbconducter._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}

const addClerkToProject =(req,res)=>{
    const {_id,...data} = req.body;
    db.ClerkOfWorks.create(data)
    .then((dbclerk)=>{
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {clerkofworks : dbclerk._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}

const addCountyFeesToProjects =(req,res)=>{
    const {_id,...data} = req.body;
    db.CountyFees.create(data)
    .then((dbcounty)=>{
    return db.Project.findOneAndUpdate({ _id: req.body._id }, {$push: {countyfees : dbcounty._id}}, { new: true });
    })
    .then(function(dbProject) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(dbProject);
      })
    .catch(function(err) {
        res.json(err);
      });
}

const getOneProject = (req,res)=>{
    db.Project.findOne({ _id: req.params.id })
    .populate("units")
    .then(function(dbProject) {
        res.json(dbProject);
    })
    .catch(function(err) {
        res.json(err);
    });
}

const deleteProject =(req,res)=>{
    db.Project.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Project deleted'))
    .catch(err => res.status(400).json('Error: '+err));
}


const updateProject = (req,res)=>{
const{_id, ...data} = req.body 
 db.Project.findOneAndUpdate(req.params.id, data)
.then(()=> res.json('project updated'))
 .catch(err => res.status(400).json('Error: '+err));
}


module.exports = {
postProject,
getAllProjects,
addUnitToProject,
getOneProject,
deleteProject,
updateProject,
addLabourToProject,
addConducterToProject,
addClerkToProject,
addDriverToProject,
addCountyFeesToProjects,
addMaterialToProject,
addFuelToProject
}