const express = require('express');
const router = express.Router();
const locales = require('../services/locales');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(locales.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting locales `, err.message);
    next(err);
  }
})

router.route('/idandname')
.get(function(req, res, next) {
  try {
    res.json(locales.getIdsAndNames());
  } catch(err) {
    console.error(`Error while getting clinics for drop down`, err.message);
    next(err);
  } 
})

router.route('/idandname/:id')
.get(function(req, res, next) {
  try {
    res.json(locales.getLocaleById(req.params.id));
  } catch(err) {
    console.error(`Error while getting clinics for drop down`, err.message);
    next(err);
  } 
});

module.exports = router;