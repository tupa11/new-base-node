'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        name: 'tututu',
        email: 'tu@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phone: '0973184222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John',
        email: 'Doe',
        password: bcrypt.hashSync('123456', 10),
        phone: '0874512445',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phone: '0987451236',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
