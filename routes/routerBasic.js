const express = require ('express');
const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');

const router = express.Router();

router.route('/').get(controllerBasic.get_home);


router.route('/getposts').get(controllerPosts.get_posts);


module.exports = router;