/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  var ombSupportedGoal = sequelize.define('ombSupportedGoal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Id'
    },
    keyname: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'Keyname'
    },
    createDtg: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW(),
      field: 'CreateDTG'
    },
    changeDtg: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW(),
      field: 'ChangeDTG'
    },
    createAudit: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'CreateAudit'
    },
    changeAudit: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'ChangeAudit'
    }
  }, {
    name: {
      singular: 'omb_supported_goal',
      plural: 'omb_supported_goals',
    },
    timestamps: false,
    tableName: 'obj_omb_supported_goals'
  });
  return ombSupportedGoal;
};
