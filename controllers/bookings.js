const knex = require("../db/knex.js");


module.exports = {
index: function(req, res) {
  knex('patients')
  .then((pats) => {
   
    res.render('bookings', {pats: pats[0].patient_name});
    
  console.log(pats);
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
