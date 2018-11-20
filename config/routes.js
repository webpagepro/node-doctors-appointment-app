//Update the name of the controller below and rename the file.
const doctors = require('../controllers/doctors.js');
//const patients = require('../controllers/patients');
const bookings = require('../controllers/bookings');
const notes = require("../controllers/notes.js");
const index = require("../controllers/index.js");

module.exports = function(app){

  app.get('/', index.available);
  app.get('/doctors', doctors.portal);
  app.post('/register', doctors.register);
  app.post('/login', doctors.login);

  app.use(authMiddleware);

  app.post("/notes/:id", notes.add);

}



function authMiddleware (req, res, next){
  if(!req.session.user_id){
      res.redirect('/');
  }
      else{
          next();
          //setTimeout(next, 1000)
      }
  }
  
