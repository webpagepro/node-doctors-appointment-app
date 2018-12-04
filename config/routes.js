//Update the name of the controller below and rename the file.
const doctors = require('../controllers/doctors.js');
//const patients = require('../controllers/patients');
const bookings = require('../controllers/bookings');
const notes = require("../controllers/notes.js");
const index = require("../controllers/index.js");
const book = require("../controllers/book.js");

module.exports = function(app){

  app.get('/', index.render);
  app.post('/register', doctors.register);
  app.post('/login', doctors.login);
  app.get('/doctors', doctors.portal);
  app.get('/book/:id', book.index);
  app.post('/book/:id', book.make);
 
   app.get('/bookings', bookings.schedule);

  app.use(authMiddleware);
 
  app.post("/notes/:id", notes.add);
  app.get('/logout', doctors.logout);

}

function authMiddleware (req, res, next){
  if(!req.session.doctor_id){
      res.redirect('/');
  }
      else{
          next();
         
      }
  }
  
