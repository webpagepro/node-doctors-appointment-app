
exports.up = function(knex, Promise) {
    return knex.schema.createTable("notes", (table) => {
        table.increments()
        
      table.text("note");
      table.timestamps(true, true);
    })
  }; 
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("notes")
  };
  
  