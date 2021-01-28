const router = require("express").Router();
const db = require("../models");
const{getAllProjects,postProject,addUnitToProject,getOneProject,deleteProject,updateProject} = require("../controller/projectController")

router.route("/").get(getAllProjects);
router.route("/add").post(postProject);
router.route('/add/unit').post(addUnitToProject);
router.route('/:id').get(getOneProject);
router.route('/delete/:id').delete(deleteProject)
router.route("/update/:id").put(updateProject)
module.exports = router