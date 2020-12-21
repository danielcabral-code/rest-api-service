const userPlan = require("../models/model_userPlans")

const create = (req, res) => {

    const userPlanToCreate = new userPlan({plan_name: req.body.plan_name, user_id:req.body.user_id, exercises:req.body.exercises});

    userPlanToCreate.save(function (err, newUserPlan) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(newUserPlan); 
    })

} 


exports.create=create;
