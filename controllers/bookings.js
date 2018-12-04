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
      console.log(booked);
        res.render('bookings', {booked: booked});
      })
    }

}

