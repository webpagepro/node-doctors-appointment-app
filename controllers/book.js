
const knex = require('../db/knex.js')

    module.exports = {

    index: function(req,res) {
        knex('bookings')
        .then((booked) => {
            res.render('book')
           // console.log(booked);

        })
    },
    
    make: function(req, res){
        knex('bookings')
        .insert({
        patient_name: req.body.book_name,
        booking_date: req.body.book_date,
        booking_reason: req.body.book_reason,
        booking_details: req.body.book_details
        })
        .then(( )=> {
            res.redirect('/bookings');
        })
    }
     
}