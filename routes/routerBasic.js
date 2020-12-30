const express = require ('express');
const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');
const controllerError = require('../controllers/controlleError')


const router = express.Router();

router.route('/')
    .get(controllerPosts.getPostCarousel);

router.route('/photos')
    .get(controllerBasic.get_photos);





/*
router.route('/get').get(controllerPosts.get);

//router.route('/*').get(controllerError.pageNotFound)

router
    .route('/edit/:id')
    .get(controllerPosts.get_edit)
    .post(controllerPosts.edit)

router
    .route('/:id')
    .delete(controllerPosts.remove)
*/
module.exports = router;
