const express = require('express');
const router = express.Router();
const clinics = require('../services/clinics');

/* GET quotes listing. */
router.route('/')
.get(function(req, res, next) {
  try {
    res.json(clinics.getMultiple(req.query.page));    
  } catch(err) {
    console.error(`Error while getting clinics `, err.message);
    next(err);
  }
})
router.route('/idandname')
.get(function(req, res, next) {
  try {
    res.json(clinics.getIdsAndNames());
  } catch(err) {
    console.error(`Error while getting clinics for drop down`, err.message);
    next(err);
  } 
})
router.route('/idandname/:id')
.get(function(req, res, next) {
  try {
    res.json(clinics.getClinicById(req.params.id));
  } catch(err) {
    console.error(`Error while getting clinics for drop down`, err.message);
    next(err);
  } 
});

module.exports = router;