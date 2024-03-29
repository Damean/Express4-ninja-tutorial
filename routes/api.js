const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', function (req, res, next) {
  res.send({type: 'GET'});
});

router.post('/ninjas', function (req, res, next) {

  Ninja.create(req.body)
  .then(function (ninja) {
    res.send(ninja);
  })
  .catch(next);
});

router.put('/ninjas/:id', function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then(function (ninja) {
    Ninja.findOne({ _id: req.params.id })
    .then(function (ninja) {
      res.send(ninja);
    })
    .catch(next);
  })
  .catch(next);
});

router.delete('/ninjas/:id', function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id })
  .then(function (ninja) {
    res.send(ninja);
  })
  .catch(next);
});

module.exports = router;
