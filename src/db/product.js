module.exports = function (sequelize, DataTypes) {
  var product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL
    },
    upc: {
      type: DataTypes.STRING
    },
    shipping: {
      type: DataTypes.DECIMAL
    },
    description: {
      type: DataTypes.STRING
    },
    manufacturer: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        product.belongsToMany(models.category, {through: 'productcategory', as: 'categories'});
      }
    }
  });
  return product;
};
