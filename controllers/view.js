
const knex = require('../db/knex.js')

module.exports = {

render: function(req,res) {
    knex('bookings')
    .where('bookings.id', req.params.id)
    .then((booked) => {
        res.render('view',{booked: booked})

    })
},



edit: function(req, res){
    let bid = req.params.id;
    console.log(bid);

    knex('bookings')
    .update({
    patient_name: req.body.book_name,
    booking_date: req.body.book_date,
    booking_reason: req.body.book_reason,
    booking_details: req.body.book_details
    })
    .where('bookings.id', bid)
    .then(( )=> {
        res.redirect(`/bookings`);
    })
},

edit2: function(req, res) {
    let bid = req.params.id;
    console.log(bid);

    knex('bookings')
      .update(req.body)
       .where('bookings.id', req.params.id)
       .then(()=> {
        res.redirect(`/view/${req.params.id}`);

        })
    }
 
}