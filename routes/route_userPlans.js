const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller_userPlans')
const { validationResult, body, param } = require('express-validator')


router.post('/', [
    body('plan_name').notEmpty().escape(),
    body('user_id').notEmpty().escape(),
    body('exercises').notEmpty().isArray()
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        controller.create(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})

router.get('/:user_id', [
    param('user_id').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        controller.getPlanByUserID(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})

router.get('/plan/:_id', [
    param('_id').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        controller.getPlanById(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})


router.delete('/:_id', [
    param('_id').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        controller.deletePlanByID(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})

router.put('/:_id', [
    param('_id').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        controller.updatePlan(req, res);
    } else {
        res.status(404).json({ errors: errors.array() })
    }
})




module.exports = router;