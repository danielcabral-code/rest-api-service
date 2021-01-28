const defaultPlan = require("../models/model_defaultPlans");

const create = (req, res) => {
  const defaultPlanToCreate = new defaultPlan({
    maxAge: req.body.maxAge,
    exercises: req.body.exercises,
  });

  defaultPlanToCreate.save(function (err, newDefaultPlan) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(newDefaultPlan);
  });
};

const getPlanByAge = (req, res) => {
  defaultPlan.find({ maxAge: req.params.maxAge }, function (err, defaultplans) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(defaultplans);
  });
};

exports.create = create;
exports.getPlanByAge = getPlanByAge;
