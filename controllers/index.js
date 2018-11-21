const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  available: function(req, res) {
    knex('doctors')
    .then((docs) => {
    res.render("index", {docs: docs[0]});
  })
  },

  render: function(req, res){
    knex('doctors')
    .where('id', req.session.doctor_id)
    .then((docs) => {
            res.render('index', {'doctors': docs[0].doctor_name});

        })

}

}
