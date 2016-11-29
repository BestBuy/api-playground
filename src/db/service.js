module.exports = function (sequelize, DataTypes) {
  var service = sequelize.define('service', {
    name: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return service;
};
