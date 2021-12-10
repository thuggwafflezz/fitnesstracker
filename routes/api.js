const Workout = require("../models/workoutSchema.js")
const router = require("express").Router()

//get route for all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

//post route for adding a new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res
            .status(400)
            .json(err)
        })
})

//put route for updating workouts
router.put("/api/workouts/:id", ({ body, params }, res) =>{
    Workout.findByIdAndUpdate({id: params.id}, { $push: {exercises: body}})
        .then((workoutData) => {
            res.json(workoutData)
        })
        .catch(err => {
            res
            .status(400)
            .json(err)
        })
})
module.exports = router