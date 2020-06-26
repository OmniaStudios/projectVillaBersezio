const express = require ('express');
const controllerBasic = require('../controllers/controllerBasic');
const controllerPosts = require('../controllers/controllerPosts');

const router = express.Router();

router.route('/')
    .get(controllerPosts.getPostCarousel);





/*
router.route('/get').get(controllerPosts.get);

router
    .route('/new')
    .get(controllerPosts.get_new)
    .post(controllerPosts.new);

router
    .route('/edit/:id')
    .get(controllerPosts.get_edit)
    .post(controllerPosts.edit)

router
    .route('/:id')
    .delete(controllerPosts.remove)
*/
module.exports = router;
