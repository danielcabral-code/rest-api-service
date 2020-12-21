const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller_sugestedPlans')
const { validationResult, body,param } = require('express-validator')


router.post('/', [
    body('user_id').notEmpty().escape(), 
    body('default_plan_id').notEmpty().escape(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.get('/:default_plan_id', [
    param('default_plan_id').notEmpty().escape(), 
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getPlanByDefault(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

module.exports = router;