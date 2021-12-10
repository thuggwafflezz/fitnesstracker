const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter type of workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of workout"
            },

            duration: {
                type: Number,
                default: 0
            },
            weight:  {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            }
        }
    ]
})

const Workout = mongoose.model("workout", WorkoutSchema)
module.exports = Workout