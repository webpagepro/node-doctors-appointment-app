const knex = require("../db/knex.js");


module.exports = {
index: function(req, res) {
  knex('bookings')
  .then((booked) => {
    res.render('bookings', {booked: booked});
    
  console.log(booked);
  })

},




schedule: (req, res) => {
  knex('bookings')
  .join('doctor_to_bookings', 'doctor_to_bookings.booking_id', 'bookings.id')
   .join('doctors', 'doctors.id', 'doctor_to_bookings.doctor_id')
    .where('doctors.id', req.session.doctor_id)
    .then((booked) => {
      console.log(booked);
        res.render('bookings', {booked: booked});
      })
    }

}

