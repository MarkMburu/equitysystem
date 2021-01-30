const { getUnits,
    getMaterials,
    getLabour,
    getFuel,
    getDrivers,
    getConducter,
    getClerks,
    getCountyFees} = require("../controller/getController");

    const router = require("express").Router();

    router.route("/units").get(getUnits);
    router.route("/fuel").get(getFuel);
    router.route("/labour").get(getLabour);
    router.route("/driver").get(getDrivers);
    router.route("/material").get(getMaterials);
    router.route("/conducter").get(getConducter);
    router.route("/clerks").get(getClerks);
    router.route("/county").get(getCountyFees);

    module.exports = router;