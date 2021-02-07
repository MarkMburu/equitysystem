const {updateUnit,
    updateLabour,
    updateMaterial,
    updateDriver,
    updateConducter,
    updateClerk,
    updateCounty,
    updateFuel } = require("../controller/UpdateController");

const router = require("express").Router();
router.route("/unit/:id").put(updateUnit);
router.route("/labour/:id").put(updateLabour);
router.route("/material/:id").put(updateMaterial);
router.route("/driver/:id").put(updateDriver);
router.route("/conducter/:id").put(updateConducter);
router.route("/clerk/:id").put(updateClerk);
router.route("/fuel/:id").put(updateFuel);
router.route("/county/:id").put(updateCounty);

module.exports = router;