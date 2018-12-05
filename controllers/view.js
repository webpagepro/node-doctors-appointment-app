
const knex = require('../db/knex.js')

module.exports = {

render: function(req,res) {
    knex('bookings')
    .then((booked) => {
        res.render('book',{id: req.params.id})
       // console.log(booked);

    })
},



update: function(req, res){
    let did = req.params.id;
    console.log(did);
    knex('bookings')
    .insert({
    patient_name: req.body.book_name,
    booking_doctor_id: did,
    booking_date: req.body.book_date,
    booking_reason: req.body.book_reason,
    booking_details: req.body.book_details
    })
    .then(( )=> {
        res.redirect('/');
    })
}
 
}