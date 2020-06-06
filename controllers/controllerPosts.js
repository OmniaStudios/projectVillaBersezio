const mongoose  = require('mongoose');
const express = require('express');
const  Post = require('../models/Post');

const app = express();

/* get page posts */
exports.get = (req, res) => {
    /* */
    Post.find((err, dataPost) => {
      if (err) {
        /* */
        res.status(404).render('404');
      } else {
        /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
        console.log(dataPost);  
        res.render("index");
      }
    });
  };

  exports.new = (req, res) =>{

    const newPost = {
      Author: req.body.author,
      Title: req.body.title,
      Imgs: req.body.imgs,
      Comments: req.body.comments,
      Likes: req.body.likes,
      Dislikes: req.body.dislikes
    };

    Post.create(newPost, (err, data) =>{
      if(err){
        res.status(400).json({
          status: 'fail',
          message: 'Post could not be created'
        });
      } else{
        /*Post created*/
        /*res.send('Post has been created successfully');*/
        /*TO CHANGE, redirect to post page*/
        res.redirect('/home');
      }
    })
  };

  


  exports.edit = (req, res) => {
    let id = req.params.id;
    const updated = {
      Author: req.body.author,
      Title: req.body.title,
      Imgs: req.body.imgs,
      Comments: req.body.comments,
      Likes: req.body.likes,
      Dislikes: req.body.dislikes      
    }

    Post.findById(id, (err, data) => {
      if (err) {
        res.status(404).json({
          status: 'failed',
          message: 'Post does not exist | Invalid'
        })
      } else {
        res.redirect('/home')
      }
    })
  }

  exports.get_edit = (req, res) => {
    Post.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(404).render('404')
      } else {
        res.render('editPost', {
          post: data
        })
      }
    })
  }