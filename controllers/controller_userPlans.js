const userPlan = require("../models/model_userPlans");

const create = (req, res) => {
  const userPlanToCreate = new userPlan({
    plan_name: req.body.plan_name,
    user_id: req.body.user_id,
    exercises: req.body.exercises,
  });

  userPlanToCreate.save(function (err, newUserPlan) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(newUserPlan);
  });
};

const getPlanByUserID = (req, res) => {
  userPlan.find({ user_id: req.params.user_id }, function (err, userPlans) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(userPlans);
  });
};

const getPlanById = (req, res) => {
  userPlan.find({ _id: req.params._id }, function (err, userPlans) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(userPlans);
  });
};

const deletePlanByID = (req, res) => {
  userPlan.deleteOne({ _id: req.params._id }, function (err, userPlans) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(userPlans);
  });
};

const updatePlan = (req, res) => {
  let plan_update = {
    plan_name: req.body.plan_name,
    exercises: req.body.exercises,
  };

  userPlan.updateOne(
    { _id: req.params._id },
    plan_update,
    function (err, userPlans) {
      if (err) {
        res.status(400).send(err);
      }
      res.status(200).json(userPlans);
    }
  );
};

exports.create = create;
exports.getPlanByUserID = getPlanByUserID;
exports.deletePlanByID = deletePlanByID;
exports.updatePlan = updatePlan;
exports.getPlanById = getPlanById;
