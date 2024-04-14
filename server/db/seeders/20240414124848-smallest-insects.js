'use strict';

/** @type {import('sequelize-cli').Migration} */
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
   await queryInterface.bulkInsert('Insects',[
     { name: "Western Pygmy Blue Butterfly", millimeters: 12.0},
     { name: "Patu Digua Spider", millimeters: 0.3},
     { name: "Scarlet Dwarf Dragonfly", millimeters:20}
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // this works but should be cautious when adding more data down the line 
    // i just like it so i used it 
    await queryInterface.bulkDelete('Insects',null,{})

  }
};
