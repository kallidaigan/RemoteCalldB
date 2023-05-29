const express = require('express');
const router = express.Router();
const callers = require('../services/callers');

/* GET callers listing. */
router.get('/paged', function(req, res, next) {
  try {
    console.log(req.query.page);
    res.json(callers.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting callers `, err.message);
    next(err);
  }
})
router.route('/')
.get(function(req, res, next) {
  try {
    res.json(callers.getClients());
  } catch(err) {
    console.error(`Error while getting clients`, err.message);
    next(err);
  } 
})
router.route('/dateofbirth/:DoB')
.get(function(req, res, next) {
  try {
    res.json(callers.getClientByDateOfBirth(req.params.DoB));
  } catch(err) {
    console.error(`Error while getting callers by Date of Birth`, err.message);
    next(err);
  } 
})
router.route('/id/:id')
.get(function(req, res, next) {
  try {
    res.json(callers.getClientByID(req.params.id));
  } catch(err) {
    console.error(`Error while getting callers by ID`, err.message);
    next(err);
  } 
})
router.route('/name/:names')
.get(function(req, res, next) {
  try {
    res.json(callers.getClientByNames(req.params.names));
  } catch(err) {
    console.error(`Error while getting callers by Name`, err.message);
    next(err);
  } 
});

/* POST caller */
router.post('/', function(req, res, next) {
    try {
      res.json(callers.createOrUpdate(req.body));
    } catch(err) {
      console.error(`Error while updating caller `, err.message);
      next(err);
    }
  });

  /* POST caller */
router.post('/id', function(req, res, next) {
  try {
    res.json(callers.updateClient(req.body, []));
  } catch(err) {
    console.error(`Error while adding caller `, err.message);
    next(err);
  }
});

module.exports = router;