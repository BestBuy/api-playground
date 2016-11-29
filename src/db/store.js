module.exports = function (sequelize, DataTypes) {
  var store = sequelize.define('store', {
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    address2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.DECIMAL
    },
    lng: {
      type: DataTypes.DECIMAL
    },
    hours: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        models.store.belongsToMany(models.service, {through: 'storeservices'});
      }
    }
  });
  return store;
};
