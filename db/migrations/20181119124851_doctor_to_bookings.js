
exports.up = function(knex, Promise) {
    return knex.schema.createTable("doctor_to_bookings", (table) => {
      table.increments();
      table.integer("patient_id")
        .references("id")
        .inTable("patients")
        .onDelete("CASCADE")
        .notNullable()
       .index();
      table.integer("doctor_id")
        .references("id")
        .inTable("doctors")
        .onDelete("CASCADE")
        .notNullable()
        .index();
        table.integer("note_id")
        .references("id")
        .inTable("notes")
        .onDelete("CASCADE")
        .notNullable()
       .index();
      table.timestamps(true, true);
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("doctor_to_bookings")
  };
  