
const knex = require('../db/knex.js')

    module.exports = {
        patient: function(req, res){
           
    if(!req.session.patient_id){
         req.session.patient_id = [];
          }    
       res.render("book"); 
     },

    make: (req, res) => {
        knex('bookings')
        .insert({
        booking_name: req.body.book_name,
        booking_date: req.body.book_date,
        booking_reason: req.body.book_reason,
        booking_details: req.body.book_reason
        })
        .then(( )=> {
            res.redirect('/');
        })
    }
     
}