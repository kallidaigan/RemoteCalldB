const express = require('express');
const router = express.Router();
const calls = require('../services/calls');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(calls.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting calls `, err.message);
    next(err);
  }
});

module.exports = router;