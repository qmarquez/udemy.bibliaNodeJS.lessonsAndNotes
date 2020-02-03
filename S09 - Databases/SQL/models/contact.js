'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};