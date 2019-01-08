// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const section = sequelizeClient.define('section', {
    uuid: { 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1, 
      primaryKey: true 
    },
    type: {
      type: DataTypes.ENUM('LECTURE', 'LAB'),
      allowNull: false
    },
    units: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startsAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endsAt: {
      type: DataTypes.DATE,
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
  section.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    section.hasMany(models.student, {
      as: 'sectionStudents'
    });
    // section.hasMany(models.instructor, {
    //   as: 'sectionInstructors'
    // });
  };

  return section;
};
