const keys = require('../config/keys');
const Image = require('../models/Image');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const express = require("express");
const mongoose = require("mongoose");

let s3 = new AWS.S3({
  accessKeyId: keys.S3.AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.S3.AWS_SECRET_ACCESS_KEY,
  region: 'eu-central-1'
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const storage = multerS3({
  s3: s3,
  bucket: keys.S3.S3_BUCKET,
  acl: 'public-read',
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname});
  },
  key: function (req, file, cb) {
    let name = file.originalname.split('.').slice(0, -1).join('.');
    let type = file.originalname.split('.').pop();
    console.log(name + '.' + type);
    cb(null, name + "-" + Date.now() + '.' + type);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 15
  }
}).single('myImg')


exports.get_imagesDB = (req, res) => {
  Image.find((err, dataImage) => {
    if (err) {
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
        res.render('imagesDB',{
          Images: dataImage
        }
        )
    }
  });
}

exports.get_photos = (req, res) =>{
  Image.find((err, dataImage) => {
    if (err) {
      res.status(404).render('404');
    } else {
      /* Impostazione dello stato HTTP success e rendering della pagina degli posts */
        res.render('photos',{
          Images: dataImage
        }
        )
    }
  });
}


exports.remove = (req, res) => {
  let id = req.params.id;

  Image.findOne({ _id: id }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      if (docs.link != null) {
        let nome =  docs.link.substring(52, docs.link.length);

        var params = { Bucket: keys.S3.S3_BUCKET, Key: nome };
        s3.deleteObject(params, function (err, data) {
          if (err) console.log(err, err.stack); // error
          else console.log("Successfully deleted!"); // deleted
        });
      }
    }


  });

  Image.deleteOne({
    _id: id
  },
    (err, data) => {
      if (err) {
        res.status(500).json({
          status: 'fail',
          message: 'Image could not be deleted'
        })
      } else {
        res.redirect('/admin/imagesDB')
      }
    }
  )
}


exports.newImage = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err)
      return res.end("Error uploading file.");
    }

    const newImage = {
      link: "https://villabersezio.s3.eu-central-1.amazonaws.com/" + req.file.key
    };

    Image.create(newImage, (err, data) => {
      if (err) {
        console.log(err)
        res.status(400).json({
          status: "fail",
          message: "Image could not be created",
        });
      } else {
        res.status(200).redirect("/admin/imagesDB");
      }
    });
  })
}; 