// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tutee = sequelizeClient.define('tutee', {
    uuid: { 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1, 
      primaryKey: true 
    }
  }, {
    underscored: true,
    freezeTableName: true
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  tutee.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tutee;
};
