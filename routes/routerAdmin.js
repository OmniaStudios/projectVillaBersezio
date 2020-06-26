const express = require('express');
const router = express.Router();


const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');
const controllerAdmin = require('../controllers/controllerAdmin');

router.route('/login')
    .get(controllerAdmin.get_AdminLogin)
    .post(controllerAdmin.post_AdminLogin);

router.route('/register')
    .get(controllerAdmin.get_AdminRegister)
    .post(controllerAdmin.post_AdminRegister);

router.route('/dashboard')
    .get(controllerAdmin.get_Dashboard);





    module.exports = router;