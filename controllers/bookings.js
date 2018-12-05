const knex = require("../db/knex.js");


module.exports = {
index: function(req, res) {
  knex('bookings')
  .then((booked) => {
    res.render('bookings', {booked: booked});
    
  //console.log(booked);
  })

},




schedule: (req, res) => {
  knex('bookings')
  .where('booking_doctor_id', req.session.doctor_id)
    .then((booked) => {
      knex('doctors')
      .where('doctors.id', req.session.doctor_id)
        .then((doc) =>  {
      console.log(doc);
        res.render('bookings', {booked: booked, doc: doc });
        })
      })
    }

}

