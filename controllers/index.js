const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  available: function(req, res) {

    knex('doctors')
    .then((docs) => {
    res.render("index", {doctor_name: });
  })
  }

}
