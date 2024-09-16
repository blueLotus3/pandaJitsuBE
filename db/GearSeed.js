const mongoose = require('../db/connection')
const Gear = require('../models/Gear')
const db = mongoose.connection
const manyGears = require('./GearSeed.json')


async function createGears(array) {
    const Gears = await Gear.insertMany(manyGears)
    console.log('Gears', Gears)
}
createGears(manyGears)