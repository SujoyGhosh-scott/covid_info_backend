const express = require("express");
const router = express.Router();

const {
  getOxygenSuppliers,
  getPlasmaSuppliers,
  getRemdesivirSuppliers,
  getFoodSuppliers,
  getAvailableBedsData,
  getHelplineData,
} = require("../controllers/getDetails");

router.route("/oxygen").get(getOxygenSuppliers);
router.route("/plasma").get(getPlasmaSuppliers);
router.route("/remdesivir").get(getRemdesivirSuppliers);
router.route("/available-beds").get(getAvailableBedsData);
router.route("/helpline").get(getHelplineData);
router.route("/food").get(getFoodSuppliers);

module.exports = router;
