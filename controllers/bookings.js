const knex = require("../db/knex.js");


module.exports = {


available: (req, res) => {
  knex("doctors")
.then((docs)=>{
    console.log(docs);

      res.redirect("/")
    })

}

}
