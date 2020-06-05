const mongoose  = require('mongoose');
const express = require('express');
const  Post = require('../models/Post');

const app = express();

/* get page impianti */
exports.get_posts = (req, res) => {
    /* */
    Post.find((err, dataPost) => {
      if (err) {
        /* */
        res.status(404).render('404');
      } else {
        /* Impostazione dello stato HTTP success e rendering della pagina degli impianti (admin_impianti.ejs) */
        console.log(dataPost);  
        res.render("index");
      }
    });
  };