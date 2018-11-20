const knex = require("../db/knex.js");

module.exports = {

  add: (req, res) => {
    knex('notes').insert({
      note: req.body.note,
      booking_id: req.params.id
    })
    .then(()=>{
      res.redirect('/')
    })
  },
}