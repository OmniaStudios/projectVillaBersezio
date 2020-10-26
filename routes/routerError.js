const express = require('express')
const controllerError = require('./../controllers/controlleError')
const router = express.Router()

router.route('/:code').get(controllerError.errPage)

module.exports = router