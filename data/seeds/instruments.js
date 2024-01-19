/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("instruments").truncate()
  await knex("instruments").insert([
    {instrument_name: "Violin", instrument_family: "String"},
    {instrument_name: "Harp", instrument_family: "String"},
    {instrument_name: "Flute", instrument_family: "Woodwind"},
    {instrument_name: "Clarinet", instrument_family: "Woodwind"},
    {instrument_name: "Trombone", instrument_family: "Brass"},
    {instrument_name: "Tuba", instrument_family: "Brass"},
    {instrument_name: "Tambourine", instrument_family: "Percussion"},
    {instrument_name: "Xylophone", instrument_family: "Percussion"},
  ])
};
