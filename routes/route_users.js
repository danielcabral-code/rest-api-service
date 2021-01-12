const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller_users')
const { validationResult, body,param } = require('express-validator')

router.post('/login',  function (req, res) {
    controller.login(req, res); 
})

router.post('/register', [
    body('email').isEmail().notEmpty().escape(),
    body('name').notEmpty().escape(),
    body('password').notEmpty().escape(),
    body('height').notEmpty().escape().isNumeric(),
    body('birth').notEmpty().escape(),
    body('weight').notEmpty().escape().isNumeric(),
    body('photoUrl').notEmpty()

],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.register(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.post('/users', function (req,res) {
    controller.checkEmail(req,res);
    
})
router.put('/recoverpassword/:email', [
    param('email').notEmpty().escape(), 
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.resetPassword(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

 

module.exports = router