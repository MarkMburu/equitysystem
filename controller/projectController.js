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
updateProject
}