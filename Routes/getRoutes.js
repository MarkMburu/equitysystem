const { getUnits,
    getMaterials,
    getLabour,
    getFuel,
    getDrivers,
    getConducter,
    getClerks,
    getCountyFees,
    getFuelPerProject,
    getLabourPerProject,
    getMaterialsPerProject,
    getConductersPerProject,
    getDriversPerProject,
    getClerkPerProject,
    getCountyFees} = require("../controller/getController");

    const router = require("express").Router();

    router.route("/units").get(getUnits);
    router.route("/fuel").get(getFuel);
    router.route("/fuel/:id").get(getFuelPerProject);
    router.route("/clerk/:id").get(getClerkPerProject);
    router.route("/county/:id").get(getConductersPerProject);
    router.route("/materials/:id").get(getMaterialsPerProject);
    router.route("/labour/:id").get(getLabourPerProject);
    router.route("/driver/:id").get(getDriversPerProject);
    router.route("/labour").get(getLabour);
    router.route("/driver").get(getDrivers);
    router.route("/material").get(getMaterials);
    router.route("/conducter").get(getConducter);
    router.route("/clerks").get(getClerks);
    router.route("/county").get(getCountyFees);

    module.exports = router;