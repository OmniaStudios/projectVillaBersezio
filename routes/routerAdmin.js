const express = require('express');
const router = express.Router();

const utils = require('../config/utils');
const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');
const controllerAdmin = require('../controllers/controllerAdmin');

router.route('/').get(utils.adminCheck, controllerAdmin.get_Dashboard);

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

 router.route('/eliminaPost').get(utils.adminCheck, controllerAdmin.get_eliminaPost);

 router.route('/eliminaPost/:id').delete(utils.adminCheck, controllerPosts.remove);

 router.route('/modificaPost').get(utils.adminCheck, controllerAdmin.get_modificaPost);

 router.route('/tuttiPost').get(utils.adminCheck, controllerAdmin.get_tuttiPost);

 router.route('/profile').get(utils.adminCheck, controllerAdmin.get_profile);

 router.route('/cambiaPassword').post(utils.adminCheck, controllerAdmin.cambiaPassword);

router.route('/logout')
    .get(controllerAdmin.get_Logout);





    module.exports = router;