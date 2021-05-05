exports.getOxygenSuppliers = (req, res, next) => {
  res.send("oxygen supplier list");
};

exports.getPlasmaSuppliers = (req, res, next) => {
  res.send("plasma supplier list");
};

exports.getRemdesivirSuppliers = (req, res, next) => {
  res.send("remdesivir supplier list");
};

exports.getFoodSuppliers = (req, res, next) => {
  res.send("food supplier list");
};

exports.getHelplineData = (req, res, next) => {
  res.send("helpline list");
};

exports.getAvailableBedsData = (req, res, next) => {
  res.send("available beds list");
};
