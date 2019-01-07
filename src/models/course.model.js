// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const course = sequelizeClient.define('course', {
    uuid: { 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1, 
      primaryKey: true 
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  course.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return course;
};
