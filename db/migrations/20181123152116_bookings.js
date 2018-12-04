
exports.up = function(knex, Promise) {
    return knex.schema.createTable("bookings", (table) => {
      table.increments();
      table.string("patient_name");
      table.integer("booking_doctor_id");
      table.string("booking_reason");
      table.string("booking_details");
      table.date("booking_date");
      table.boolean("booking_confirmed");
      table.boolean("booking_complete");
      table.timestamps(true, true);
      }) 
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("bookings")
  };
  