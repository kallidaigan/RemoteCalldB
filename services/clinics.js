const db = require('./db');
const config = require('../config');

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM clinic LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function getIdsAndNames() {
  const data = db.query(`SELECT id, ClinicName FROM clinic`, []);
  return {
    data
  }
}
function getClinicById(id) {
  const data = db.query(`SELECT * FROM clinic WHERE id = ?`, [id]);
  return {
    data
  }
} 

module.exports = {
  getMultiple,
  getIdsAndNames,
  getClinicById
}