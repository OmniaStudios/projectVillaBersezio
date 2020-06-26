const express = require('express');
const router = express.Router();

const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');

router.route('/login')
    .get(controllerBasic.get_AdminLogin)
    .post(controllerBasic.post_AdminLogin);





    module.exports = router;