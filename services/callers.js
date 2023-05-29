//ToDo: Deal with undefined values in the post object - need to be NULL
const db = require('../services/db');
const config = require('../config');

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM client ORDER BY FirstName LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};
  return {
    data,
    meta
  }
}
function getClients() {
  const data = db.query(`SELECT * FROM client ORDER BY FirstName`, []);
  return {
    data
  }
}
function getClientByDateOfBirth(DoB) {
  const data = db.query(`SELECT * FROM client WHERE DateOfBirth = ?`, [DoB]);
  return {
    data
  }
}
function getClientByID(id) {
  const data = db.query(`SELECT * FROM client WHERE id = ?`, [id]);
  return {
    data
  }
}
function getClientByNames(Names) {
  const data = db.query(`SELECT * FROM client WHERE FirstName LIKE ?||'%'`, [Names]);
  return {
    data
  }
}

function createOrUpdate(client) {
  //not sure if all these are necessary but I'm trying to cover all bases
  if (client.id && client.id !== '0' && client.id !== 0 && client.id !== null && client.id !== undefined && client.id !== '' && client.id !== 'undefined') {
    return updateClient(client, []);
  } else {
    return createClient(client, []);
  }
}

function updateClient(client, params) {
//TBD - needs to be able to handle null values in the post object
  const sql = `UPDATE client SET 
    ${client.PhoneNumber ? 'PhoneNumber = \'':""}${client.PhoneNumber ? client.PhoneNumber + '\',' : ""}
    ${client.FirstName ? 'FirstName = \'':""}${client.FirstName ? client.FirstName + '\',' : ""} 
    ${client.LastName ? 'LastName = \'':""}${client.LastName ? client.LastName + '\',' : ""}
    ${client.DateOfBirth ? 'DateOfBirth = \'':""}${client.DateOfBirth ? client.DateOfBirth + '\',' : ""}
    ${client.HouseNumber ? 'HouseNumber = \'':""}${client.HouseNumber ? client.HouseNumber + '\',' : ""}
    ${client.Locality ? 'Locality = \'':""}${client.Locality ? client.Locality + '\',': ""}
    ${client.ClientAddress ? 'ClientAddress = \'':""}${client.ClientAddress ? client.ClientAddress + '\',' : ""}
    ${client.Notes ? 'Notes = \'':""}${client.Notes ? client.Notes + '\',': ""}
    ${client.Alert ? 'Alert = \'':""}${client.Alert ? client.Alert + '\',': ""}
    ${client.LocalityID ? 'LocalityID = ':""}${client.LocalityID ? client.LocalityID : ""}
    WHERE id = ${client.id};`;
    // has to end in without a comma - will not happen if there is no Locality ID - see TBD
   
    console.log(sql);

  const result = db.run(sql, params) 
  console.log(`Row(s) updated: ${this.changes}`);
 
  console.log(result);
  return {
    result
  }
}

function createClient(client) {
 //THe following does not work to get rid of "undefined" for null values in the post object
 //Object.keys(client).forEach(item => client[key] === undefined ? client[key] = null : {});
  const sql = `INSERT INTO client 
  (PhoneNumber, FirstName, LastName, DateOfBirth, LocalHealthID, HouseNumber, Locality, ClientAddress, Notes, Alert, LocalityID)
  VALUES ('${client.PhoneNumber}', '${client.FirstName}', '${client.LastName}', '${client.DateOfBirth}', '${client.LocalHealthID}', '${client.HouseNumber}', '${client.Locality}', '${client.ClientAddress}', '${client.Notes}', '${client.Alert}', ${client.LocalityID})` 

    const result = db.run(sql, [] );
 
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    console.log(result);
    return {
      result
    }
 
}

module.exports = {
  getClients,
  getMultiple,
  getClientByDateOfBirth,
  getClientByID,
  getClientByNames,
  createOrUpdate,
  updateClient,
}