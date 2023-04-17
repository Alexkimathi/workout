const express = require('express')
const Workout = require('../model/workoutModel')

const router = express.Router()


//Get all workouts
router.get('/', (req,res)=>{
    res.json({mssg: 'GET all workouts'})

})

//single workouts
router.get('/:id', (req,res)=>{
    res.json({mssg: 'GET single workouts'})

})

//post new workout

router.post('/', async(req,res)=>{
    const{title,load,reps}= req.body
    try {
        const workout = Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
  

})

//delete a workout

router.delete('/:id', (req,res)=>{
    res.json({mssg: 'Delete a workouts'})

})

//update a workout

router.patch('/:id', (req,res)=>{
    res.json({mssg: 'update a workouts'})

})


module.exports=r