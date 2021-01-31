const {deleteUnit,
    deleteLabour,
    deleteFuel,
    deleteConducter,
    deleteDriver,
    deleteCounty,
    deleteClerk,
    deleteMaterial}  = require("../controller/deleteController");

const router = require("express").Router();
router.route("/unit/:id").delete(deleteUnit);
router.route("/fuel/:id").delete(deleteFuel);
router.route("/labour/:id").delete(deleteLabour);
router.route("/material/:id").delete(deleteMaterial);
router.route("/county/:id").delete(deleteCounty);
router.route("/conducter/:id").delete(deleteConducter);
router.route("/driver/:id").delete(deleteDriver);
router.route("/clerk/:id").delete(deleteClerk);

module.exports = router