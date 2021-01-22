const mongoose = require("mongoose");
const express = require("express");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const passport = require('passport');
const Post = require('../models/Post');
const Image = require('../models/Image');
const controllerPost = require('../controllers/controllerPosts');

exports.get_AdminLogin = (req, res) => {
  res.status(200).render("adminLogin");
};

exports.post_AdminLogin = (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/admin/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/admin/dashboard');
    });
  })(req, res, next);
};

exports.get_AdminRegister = (req, res) => {
  res.status(200).render("adminRegister");
};

exports.post_AdminRegister = (req, res) => {
  const userName = req.body.login[0];
  const fName = req.body.login[1];
  const lName = req.body.login[2];
  const password = req.body.login[3];
  const password2 = req.body.login[4];

  var err = false;
  if (!userName || !fName || !lName || !password || !password2) {
    err = true;
    res.render("adminRegister", {
      userName,
      fName,
      lName,
      password,
      password2,
    });
  }

  if (password != password2) {
    err = true;
    res.render("adminRegister", {
      userName,
      fName,
      lName,
      password,
      password2,
    });
  }

  if (password.length < 6) {
    err = true;
    res.render("adminRegister", {
      userName,
      fName,
      lName,
      password,
      password2,
    });
  }
  if (err == true) {
    res.render("adminRegister", {
      userName,
      fName,
      lName,
      password,
      password2,
    });
  } else {
    Admin.findOne({ userName: userName }).then((admin) => {
      if (admin) {
        res.render("adminRegister", {
          userName,
          fName,
          lName,
          password,
          password2,
        });
      } else {
        const newAdmin = new Admin({
          userName,
          fName,
          lName,
          password,
        });
        //HASHING
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newAdmin.password, salt, (err, hash) => {
              if(err) throw err;

              //PSW = hashed
              newAdmin.password = hash;

              //SAVE ADMIN
              newAdmin.save()
              .then(admin =>{
                  res.redirect('/admin/login');
              })
              .catch(err => console.log(err));
          })
        );
      }
    });
  }
};

exports.get_Dashboard = (req, res) => {
 // console.log(req);
  Post.find((err, dataPost) => {
    if (err) {
      /* */
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
      res.render('dashboard',
      {
        Post: dataPost,
        User: req.user
      } );
    }
  });
}

exports.get_Logout = (req, res) =>{
  req.logout();
  res.redirect('/');
}

exports.get_creaPost = (req, res) =>{
  res.render('creaPost')
}

exports.get_eliminaPost = (req, res) =>{
  Post.find((err, dataPost) => {
    if (err) {
      /* */
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
        /*Funzione generica*/
        res.render('eliminaPost',{
          Post: dataPost
        }
        )
       }
  });
}

exports.get_modificaPost = (req, res) =>{
  Post.find((err, data) => {
    if (err) {
      res.status(404).render('404');
    } else {
        res.render('modificaPost', {
          Post: data
        })
    }
  })
}

exports.get_tuttiPost =(req, res) =>{
  Post.find((err, dataPost) => {
    if (err) {
      /* */
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
     // console.log(dataPost);
        /*Funzione generica*/
        res.render('tuttiPost',{
          Post: dataPost
        }
        )
    }
  });
}

exports.get_profile =(req, res) =>{
  Admin.find((err, dataAdmin) =>{
    if(err){
      res.status(404).render('404');
    }else{
      res.render('profile', {
        Admin: dataAdmin,
        currentAdmin: req.user
      });

    }
  });
}

exports.get_imagesDB = (req, res) =>{
  Image.find((err, dataImage) => {
    if (err) {
      /* */
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
     // console.log(dataPost);
        /*Funzione generica*/
        res.render('imagesDB',{
          Images: dataImage
        }
        )
    }
  });
}

exports.cambiaPassword=(req, res) =>{
  var password = req.body.pChange[0];
  var confermaPassword = req.body.pChange[1];
  var err = false;

  if(!password || !confermaPassword){
    err = true;
  }

  if(password != confermaPassword){
    err = true;
  }

  if(password.length < 6){
    err = true;
  }

  if(err){
    res.redirect("/admin/profile");
  }

  /*HASH PWD*/

  bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(password, salt, (err, hash) => {
              if(err) console.log(err);

              //PSW = hashed
              password = hash;

              //SAVE ADMIN
             const updated = {
               _id: req.user._id,
               userName: req.user.userName,
               fName: req.user.fName,
               lName: req.user.lName,
               password: password
             }

               Admin.findById(updated._id, (err, data) =>{
                 if(err){
                   res.status(404).json({
                     status: 'failed',
                     message: 'Admin does not exist | Invalid'
                   })
                 }
                 data.replaceOne(updated, err=>{
                   if(err){
                     res.status(500).json({
                       status: 'failed',
                       message: 'Admin could not be deleted '
                     })
                    }else{
                      res.redirect('/admin/login');
                    }
                 })
               })
          })
        );
}

