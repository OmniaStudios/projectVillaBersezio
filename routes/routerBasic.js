const express = require ('express');
const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');
const controllerError = require('../controllers/controlleError')

const router = express.Router();

router.route('/')
    .get(controllerPosts.getPostCarousel);


router.route('/*').get(controllerError.pageNotFound)

module.exports = router;