const express = require('express');
const router = express.Router();
const User = require('../models/users')
const bcrypt = require('bcryptjs');
const passport = require('passport');



router.post('/register', (req,res) => {
   const {name,email,password,password2} = req.body;
   let errors = [];

   if(!name || !email || !password || !password2){
       errors.push({msg: 'please fill in all the fields'});
   }
   if(password !== password2){
       errors.push({msg: 'password do not match'});
   }
   
   User.findOne({email: email})
                              .then(user => {
                                  if(user){
                                      errors.push({msg: 'Email is already registered'});
                                  }
                                });
                                    
                                if(errors.length >0){
                                    res.json(errors);
                                }
                                 else {
                                        const newUser = new User({name,email,password});
                                        bcrypt.genSalt(10,(err, salt) => 
                                        bcrypt.hash(newUser.password,salt,(err,hash) =>{
                                            if(err) throw err;
                                            newUser.password = hash;
                                            newUser.save()
                                                 .then(data => {
                                                     res.json(errors);
                                                 })
                                                 .catch(error => {
                                                     res.json(error);
                                                 })
                                        }))
                                    }
                                  })
                            
    


router.post('/login',(req,res,next) => {
     passport.authenticate('local',(err, user,info) => {
         if(err) { return next(err) };
         if(!user) {return res.json(info)};
         req.logIn(user, (err) => {
             if(err){return next(err); }
             return res.json(info);
         });
     }
         
     )(req,res,next);
});

module.exports = router;