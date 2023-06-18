"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("regions", [
      {
        region_name: "All locations",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "bangkok",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "bangkok area - Nakornpatom",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "bangkok area - nonthaburi",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "bangkok area - pathumthani",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "bangkok area - samutprakarn",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "bangkok area - samutsakorn",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "Eastern",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "NorthEastern",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "Northern",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "Southern",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "Others",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        region_name: "Overseas",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Person");
  },
};
