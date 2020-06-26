const express = require('express');

router.route('/admin')
    .get(controllerBasic.get_AdminLogin)
    .post(controllerBasic.post_AdminLogin);






    module.exports = router;