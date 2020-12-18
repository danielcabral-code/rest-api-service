const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller_exercises')
const { validationResult, body, param } = require('express-validator')

router.get('/',  function (req, res) {
    controller.list(res); 
})

router.get('/:category', [
    param('category').notEmpty().escape(), 
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getExerciseByCategory(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.post('/', [
    body('exerciseName').notEmpty().escape(), 
    body('category').notEmpty().escape(), 
    body('videoUrl').notEmpty().escape(), 
    body('duration').isNumeric()
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})
module.exports = router;