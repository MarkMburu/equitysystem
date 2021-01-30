const {deleteUnit,
    deleteLabour,
    deleteFuel,
    deleteConducter,
    deleteDriver,
    deleteCounty,
    deleteClerk,
    deleteMaterial}  = require("../controller/deleteController");

const router = require("express").Router();
router.route("/unit").delete(deleteUnit);
router.route("/fuel").delete(deleteFuel);
router.route("/labour").delete(deleteLabour);
router.route("/material").delete(deleteMaterial);
router.route("/county").delete(deleteCounty);
router.route("/conducter").delete(deleteConducter);
router.route("/driver").delete(deleteDriver);
router.route("/clerk").delete(deleteClerk);

module.exports = router