const express = require('express')
const router = express.router

const Thought = require('../models/Thought')

router.get('/', (req, res) => {
    Thought.find({})
    .then(thought => res.json(thoughts))
})



module.exports = router