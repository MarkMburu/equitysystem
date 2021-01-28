const router = require("express").Router();
const {getAllUnits,addLabourerToUnit,getOneUnit,addMaterialToUnit} = require("../controller/unitController") 
router.route("/").get(getAllUnits)
router.route("/addlabourer/").post(addLabourerToUnit)
router.route("/addmaterial/").post(addMaterialToUnit)
router.route("/:id").get(getOneUnit)

module.exports = router