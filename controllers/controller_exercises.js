const exercise = require("../models/model_exercises")

const create = (req, res) => {

    const exerciseToCreate = new exercise({ exerciseName: req.body.exerciseName,category:req.body.category, videoUrl: req.body.videoUrl, duration: req.body.duration });

    exerciseToCreate.save(function (err, newExercise) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(newExercise); 
    })

} 

const list = (res) => {
    exercise.find(function (err, exercises) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(exercises); 
    })
}
const getExerciseByCategory = (req, res) => {
    exercise.find({category: req.params.category}, function (err, exercises) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(exercises); 
    })
}


exports.create=create;
exports.list = list;
exports.getExerciseByCategory = getExerciseByCategory