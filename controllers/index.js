const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
 render: function(req, res) {
    knex('doctors')
    .then((docs) => {
//console.log(docs);
    res.render('index', {'docs': docs});
  })
  },

  available: function(req, res){
    knex('doctors')
    .where('id', req.session.doctor_id)
    .then((docs) => {
            res.render('index', {docs: docs.doctor_name});

    })
}
}
