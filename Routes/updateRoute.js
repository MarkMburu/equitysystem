const {updateUnit,
    updateLabour,
    updateMaterial,
    updateDriver,
    updateConducter,
    updateClerk,
    updateCounty,
    updateFuel } = require("../controller/UpdateController");

const router = require("express").Router();
router.route("/unit").put(updateUnit);
router.route("/labour").put(updateLabour);
router.route("/material").put(updateMaterial);
router.route("/driver").put(updateDriver);
router.route("/conducter").put(updateConducter);
router.route("/clerk").put(updateClerk);
router.route("/fuel").put(updateFuel);
router.route("county").put(updateCounty);

module.exports = router;