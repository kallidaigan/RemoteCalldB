const db = require('./db');
const config = require('../config');

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM locality LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function getIdsAndNames() {
  const data = db.query(`SELECT id, LocalityName FROM locality`, []);
  return {
    data
  }
}

function getLocaleById(id) {
  const data = db.query(`SELECT * FROM locality WHERE id = ?`, [id]);
  return {
    data
  }
} 

module.exports = {
  getMultiple,
  getIdsAndNames,
  getLocaleById
}