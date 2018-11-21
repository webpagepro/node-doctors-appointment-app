const knex = require("../db/knex.js");


module.exports = {
index: function(req, res) {
  knex('bookings')
  .then((booked) => {
    res.render('bookings', {booked: booked[0].patient_name});
    
  console.log(booked);
  })

},




schedule: (req, res) => {
  knex("patients")
.then((pats)=>{
    console.log(pats);

      res.redirect("/bookings")
    })

}

}
