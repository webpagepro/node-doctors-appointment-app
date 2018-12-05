const knex = require("../db/knex.js");


module.exports = {
index: function(req, res) {
  knex('bookings')
  .then((booked) => {
    res.render('bookings', {booked: booked});
    
  //console.log(booked);
  })

},

confirmed:function(req, res) {
  knex('bookings')
  .where('bookings.booking_confirmed', true)
  .then((booked) => {
    knex('doctors')
    .where('doctors.id', req.session.doctor_id)
      .then((doc) =>  {
    res.render('bookings', {booked: booked, doc: doc});
  })
  })
  },

  unconfirmed:function(req, res) {
    knex('bookings')
    .where('bookings.booking_confirmed', false)
    .then((booked) => {
      knex('doctors')
      .where('doctors.id', req.session.doctor_id)
        .then((doc) =>  {
      res.render('bookings', {booked: booked, doc: doc});
    })
    })
    },


completed:function(req, res) {
  knex('bookings')
  .where('bookings.booking_complete', true)
  .then((booked) => {
    knex('doctors')
    .where('doctors.id', req.session.doctor_id)
      .then((doc) =>  {
    res.render('bookings', {booked: booked, doc: doc});
  })
  })
  },

update:function(req, res) {
knex('bookings')
  .update(req.body)
   .where('id', req.params.doctor_id)
    .then(() => {req.session.doctor_id = results[0];
  knex('users').where('id', req.params.id).then((results) => {
    req.session.doctor = results[0];
    req.session.save(()=>{
      res.redirect('/bookings');
    })
  })
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

