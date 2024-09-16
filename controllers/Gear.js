const Gear = require('../models/Gear')
const { Router } = require('express')
const router = Router()
const mongoose = require('../db/connection')
const db = mongoose.connection


// Get all Gear
router.get('/', async(req, res) => {
    const allGears = await Gear.find({}).populate('gearName')
    res.json({status: 200, data: allGears})
})

// Get specific Gear by id
router.get('/:id', (req,res) => {
    Gear.find({_id: req.params.id})
    .populate('gearName')
    .then((gears) => {
        res.json(gears)
    })
})

// GET A SINGLE GEAR BY NAME
router.get('/name/:name', (req, res) => {
    Gear.find({gearName: req.params.name})
    .then((gear) => {
      res.json({status: 200, data: gear})
    })
  })

  // CREATE A GEAR
router.post('/', async(req,res) => {
    res.json(await Gear.create(req.body))
})



module.exports = router