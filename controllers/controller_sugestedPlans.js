const suggestedPlan = require("../models/model_suggestedPlan")

const create = (req, res) => {

    const suggestedPlanToCreate = new suggestedPlan({user_id: req.body.user_id, default_plan_id:req.body.default_plan_id});

    suggestedPlanToCreate.save(function (err, newSuggestedPlan) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(newSuggestedPlan); 
    })

} 

 const getPlanByDefault = (req, res) => {
    suggestedPlan.find({default_plan_id: req.params.default_plan_id}, function (err, suggestedPlanDefault) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(suggestedPlanDefault); 
    })
}

exports.create=create;
exports.getPlanByDefault = getPlanByDefault;
