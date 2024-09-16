// const { Schema, model } = require("mongoose")
const mongoose = require('../db/connection')

const gearSchema = new mongoose.Schema (
    {
        gearName: String,
        gearPrice: String,
        gearDesc: String,
        gearCategory: String,
        gearPic: String,
    },
)


const Gear = mongoose.model('Gear', gearSchema);
module.exports = Gear