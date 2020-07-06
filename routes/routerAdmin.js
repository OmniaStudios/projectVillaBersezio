const express = require('express');
const router = express.Router();

const utils = require('../config/utils');
const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');
const controllerAdmin = require('../controllers/controllerAdmin');

router.route('/login')
    .get(controllerAdmin.get_AdminLogin)
    .post(controllerAdmin.post_AdminLogin);

router.route('/register')
    .get(controllerAdmin.get_AdminRegister)
    .post(controllerAdmin.post_AdminRegister);

router.route('/dashboard').get(utils.adminCheck, controllerAdmin.get_Dashboard);

router.route('/creaPost')
    .get(utils.adminCheck, controllerAdmin.get_creaPost)
    .post(utils.adminCheck, controllerPosts.new);

// router.route('/eliminaPost').get(utils.adminCheck, controllerAdmin.get_Dashboard);

// router.route('/modificaPost').get(utils.adminCheck, controllerAdmin.get_Dashboard);

router.route('/logout')
    .get(controllerAdmin.get_Logout);





    module.exports = router;