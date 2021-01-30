const router = require("express").Router();
const db = require("../models");
const { postProject,
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
    addFuelToProject } = require("../controller/projectController")

router.route("/").get(getAllProjects);
router.route("/add").post(postProject);
router.route('/add/unit').post(addUnitToProject);
router.route('/add/labour').post(addLabourToProject);
router.route("/add/material").post(addMaterialToProject);
router.route("/add/conducter").post(addConducterToProject);
router.route("/add/clerk").post(addClerkToProject);
router.route("/add/county").post(addCountyFeesToProjects);
router.route("/add/driver").post(addDriverToProject);
router.route("/add/fuel").post(addFuelToProject);
router.route('/:id').get(getOneProject);
router.route('/delete/:id').delete(deleteProject)
router.route("/update/:id").put(updateProject)
module.exports = router