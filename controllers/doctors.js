const knex = require('../db/knex.js')

    module.exports = {
        portal: function(req, res){
           
    if(!req.session.doctor_id){
         req.session.doctor_id = [];
          }

           
       res.render("doctors"); 
     },

    register: (req, res) => {
        knex('doctors')
        .insert({
        doctor_name: req.body.reg_name,
            doctor_email: req.body.reg_email,
            doctor_password: req.body.reg_password
        })
        .then(( )=> {
            res.redirect('/login');
        })
    },

     login: (req, res) => {
        knex('doctors')
        .where('doctor_email', req.body.log_email)
        .then((results) => {
            let signed_user = results[0];
            if(!signed_user){
                res.redirect('/register');
                return;
            }
           
            if(signed_user.doctor_password == req.body.log_password){
                req.session.doctor_id = signed_user.id;
                req.session.save(() => {
                    res.redirect('/bookings');
                })

            }else{
                req.session.errors.push("Email or Password was invalid");
req.session.save(()=>{
                res.redirect('/');
            })
        }
        })
     },

     logout: (req, res) => {
         req.session.destroy();
        res.redirect("/");
     }
     
}