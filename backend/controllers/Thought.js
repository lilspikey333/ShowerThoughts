const express = require("express");
const router = express.Router();

const Thought = require("../models/Thought");

router.get("/", (req, res) => {
  Thought.find({}).then(thoughts => res.json(thoughts));
});

router.get("/:id", (req, res) => {
  Thought.findOne({ _id: req.params.id }).then(thought => res.json(thought));
});

router.post("/", (req, res) => {
  Thought.create(req.body).then(thought => {
    res.json(thought);
  });
});

router.put("/update/:id", (req, res) => {
  Thought.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() =>
    res.redirect("/")
  );
});

router.post("/comment/:id", (req, res) => {
  Thought.findById(req.params.id)
    .then(thought => {
      thought.comments.unshift(req.body.comment);
      thought.save();
    })
    .then(thought => res.redirect("/"));
});

router.delete("/:id", (req, res) => {
  Thought.findByIdAndDelete(req.params.id).then(() => res.redirect("/"));
});

module.exports = router;
