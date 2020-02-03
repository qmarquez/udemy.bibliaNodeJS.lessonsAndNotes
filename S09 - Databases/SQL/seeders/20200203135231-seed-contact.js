'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Contacts',
      [
        {
          firstname: 'Quimey',
          lastname: 'Marquez',
          phone: '12345678',
          email: 'qmarquez@email.com',
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        }, {
          firstname: 'Neiel',
          lastname: 'Marquez',
          phone: '87654321',
          email: 'nmarquez@email.com',
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
