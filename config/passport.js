const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');

// Admin model
const Admin = require('../models/Admin');

module.exports = function(passport){
    passport.use(
        new LocalStrategy({ usernameField: 'userName'}, (userName, password, done) => {
            //Controllo admin
            Admin.findOne({userName: userName})
            .then(admin =>{
                if(!admin){
                    console.log('utente inesistente');
                    return done(null, false);
                }
            //controllo pwd
            bcrypt.compare(password, user.password, (err, isMatch) =>{
                if(err) throw err;

                if(isMatch){
                    console.log('pwd matchate');
                    return done(null, user);
                }else{
                    console.log('pwd non matchate');
                    return done(null, false);
                }
            });

            })
            .catch(err => console.log(err));
        })
    )

    passport.serializeUser(function(admin, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        Admin.findById(id, function(err, admin){
            done(err, admin);
        })
    })

}