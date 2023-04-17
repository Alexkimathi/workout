const express = require('express')

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}= require('../controllers/workoutControllers')


const router = express.Router()


//Get all workouts
router.get('/', getWorkouts)

//single workouts
router.get('/:id', getWorkout)

//post new workout

router.post('/', createWorkout)

//delete a workout

router.delete('/:id', deleteWorkout)

//update a workout

router.patch('/:id',updateWorkout)


module.exports=router