
exports.up = function(knex, Promise) {
    return knex.schema.createTable("patients", (table) => {
      table.increments();
      table.string("patient_name");
      table.timestamps(true, true);
      })
    };
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTable("patients")
    };
    