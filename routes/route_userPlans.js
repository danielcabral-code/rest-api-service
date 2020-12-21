const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller_userPlans')
const { validationResult, body,param } = require('express-validator')


router.post('/', [
    body('plan_name').notEmpty().escape(), 
    body('user_id').notEmpty().escape(),
    body('exercises').notEmpty().isArray()
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

module.exports = router;