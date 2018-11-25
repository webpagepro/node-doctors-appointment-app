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
  knex("patients")
.then((pats)=>{
    console.log(pats);

      res.redirect("/bookings")
    })

}

}
