module.exports = function (sequelize, DataTypes) {
  var service = sequelize.define('zipcode', {
    zip: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    lng: {
      type: DataTypes.DECIMAL
    },
    lat: {
      type: DataTypes.DECIMAL
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
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
