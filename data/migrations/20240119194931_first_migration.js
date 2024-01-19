/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("instruments", table => {
    table.increments("instrument_id")
    table.string("instrument_name", 100).notNullable().unique()
    table.string("instrument_family", 100)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instruments")
};
