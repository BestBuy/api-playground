module.exports = function (sequelize, DataTypes) {
  var category = sequelize.define('category', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        category.belongsToMany(category, {as: 'subCategories', through: 'subCategories'});
        category.belongsToMany(category, {as: 'categoryPath', through: 'categoryPath'});
      }
    }
  });
  return category;
};
