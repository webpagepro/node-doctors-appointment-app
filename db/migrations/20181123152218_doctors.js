
exports.up = function(knex, Promise) {
    return knex.schema.createTable("doctors", (table) => {
      table.increments();
      table.string("doctor_name");
      table.string("doctor_email");
      table.string("doctor_password");
      table.timestamps(true, true);
      })
    };
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTable("doctors")
    };
    




























    