const express = require('express')
const router = express.router

const Thought = require('../models/Thought')

router.get('/', (req, res) => {
    Thought.find({})
    .then(thought => res.json(thoughts))
})

router.get('/:id', (req, res) => {
    Thought.findOne({_id: req.params.id})
    .then(thought => res.json(thought))
} )

router.post('/', (req, res) => {
    Thought.create(req.body)
    .then(() => res.redirect('/'))
})

router.put('/:id', (req, res) => {
    Thought.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    ).then(() => res.redirect('/'))
})

router.put('/comment/:id', (req, res) => {
    Thought.findById(req.params.id)
    .then(thought => {
        thought.comments.push(req.body.comment)
        thought.save()
    }).then((thought) => res.redirect('/' + thought._id)) 
})

router.delete('/:id', (req, res) => {
    Thought.findByIdAndDelete(this.params.id)
    .then(() => res.redirect('/'))
})

module.exports = router