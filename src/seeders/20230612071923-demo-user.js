"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        first_name: "John",
        last_name: "Doe",
        email: "John.d@gmail.com",
        password:
          "$2a$12$De5Z5ytGymgHH0AENwg1EOJ2DWJ707RKcOPED5tjglpevB4Ya8FWy",
        phone_number: "0991508353",
        skill: "HTML",
        profile_image: "https://picsum.photos/id/237/200/300",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "John",
        last_name: "Son",
        email: "John.s@gmail.com",
        password:
          "$2a$12$De5Z5ytGymgHH0AENwg1EOJ2DWJ707RKcOPED5tjglpevB4Ya8FWy",
        phone_number: "0991508333",
        skill: "CSS",
        profile_image: "https://picsum.photos/id/247/200/300",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "John",
        last_name: "nie",
        email: "john.n@gmail.com",
        password:
          "$2a$12$De5Z5ytGymgHH0AENwg1EOJ2DWJ707RKcOPED5tjglpevB4Ya8FWy",
        phone_number: "0991508353",
        skill: "JAVASCRIPT",
        profile_image: "https://picsum.photos/id/238/200/300",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "John",
        last_name: "Wick",
        email: "John.w@gmail.com",
        password:
          "$2a$12$De5Z5ytGymgHH0AENwg1EOJ2DWJ707RKcOPED5tjglpevB4Ya8FWy",
        phone_number: "0991503353",
        skill: "FIGMA",
        profile_image: "https://picsum.photos/id/240/200/300",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Person");
  },
};
