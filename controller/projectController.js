const db = require("../models")
const Project = require("../models/projects")

const getAllProjects = (req,res)=>{
    db.Project.find()
    .then((dbproject)=>res.json(dbproject) )
};

const postProject = (req,res)=>{
   if(!req.body._id){
    let newProject = new Project(req.body);
    newProject.save()
    .then((dbproject) => {
        res.json(dbproject)
    })
    .catch((err)=>{
        console.log(req.body)
        console.log(err)
    })
   }
  
};
const addUnitToProject =(req,res)=>{
    let {unitName, unitNumber,isApproved} = req.body
    let project = req.body.project_id
    db.Unit.create({unitName, unitNumber,isApproved,project})
    .then((dbunit)=>{
    return db.Project.findOneAndUpdate({ _id: project}, {$push: {units: dbunit._id}}, { new: true });
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
    db.Labour.create(req.body)
    .then((dblabour)=>{
        console.log(dblabour)
    return db.Project.findOneAndUpdate({ _id: req.body.project }, {$push: {labourers: dblabour._id}}, { new: true });
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
  console.log(req.body)
    db.Material.create(req.body)
    .then((dbmaterial)=>{
    return db.Project.findOneAndUpdate({ _id: req.body.project }, {$push: {materials: dbmaterial._id}}, { new: true });
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
  const {id, from,to,amount} = req.body
  let project = id
  db.Driver.create({from,to,amount,project})
  .then((dbdriver)=>{
  return db.Project.findOneAndUpdate({ _id: req.body.id }, {$push: {drivers: dbdriver._id}}, { new: true });
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
    const {id, from,to,amount} = req.body
    let project = id
    db.Fuel.create({from,to,amount,project})
    .then((dbfuel)=>{
    return db.Project.findOneAndUpdate({ _id: req.body.id }, {$push: {fuel: dbfuel._id}}, { new: true });
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
     const {id, from,to,amount} = req.body
    let project = id
    db.Conducter.create({project, from,to,amount})
    .then((dbconducter)=>{
    return db.Project.findOneAndUpdate({ _id: req.body.id }, {$push: {conducters: dbconducter._id}}, { new: true });
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
  const {id, from,to,amount} = req.body
  let project = id
    db.ClerkOfWorks.create({project, from,to,amount})
    .then((dbclerk)=>{
    return db.Project.findOneAndUpdate({ _id: req.body.id }, {$push: {clerkofworks : dbclerk._id}}, { new: true });
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
    return db.Project.findOneAndUpdate({ _id: req.body.id }, {$push: {countyFees : dbcounty._id}}, { new: true });
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
    .populate("fuel")
    .populate("materials")
    .populate("drivers")
    .populate("clerkofworks")
    .populate("countyFees")
    .populate("conducters")
    .populate("labourers")
    .then(function(dbProject) {
      console.log(dbproject)
        res.json(dbProject);
    })
    .catch(function(err) {
        res.json(err);
    });
}

const deleteProject =(req,res)=>{
    db.Unit.deleteMany({project: req.params.id})
    .then(()=> res.json('Project deleted'))
    .catch(err => res.status(400).json('Error: '+err));
    db.Labour.deleteMany({project: req.params.id})
    .then(()=> res.json('Project deleted'))
    .catch(err => res.status(400).json('Error: '+err));
    db.Project.findByIdAndRemove(req.params.id)
    .then(()=> res.json('Project deleted'))
    .catch(err => res.status(400).json('Error: '+err));

    return
}


const updateProject = async (req,res)=>{
   db.Project.findById(req.params.id)
   .then(project => {
       project.projectName = req.body.projectName
       project.projectNumber=req.body.projectNumber
       project.numberOfUnits = req.body.numberOfUnits
       project.from = req.body.from
       project.to = req.body.to
       project.save()
       .then(()=> res.json('Project updated'))
       .catch(err => res.status(400).json('Error: '+err));
        })
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