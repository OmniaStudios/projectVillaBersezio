const express = require('express');
const Photo = require('../models/Photo');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const keys = require('../config/keys');

let s3 = new AWS.S3({
    accessKeyId: keys.S3.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.S3.AWS_SECRET_ACCESS_KEY,
    region: 'eu-central-1'
})

const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

var upload = multer({
    storage: multerS3({
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
    }),
    fileFilter: fileFilter,
    limits: {
      fileSize: 1024 * 1024 * 15
    }
  })