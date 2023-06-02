# RemoteCalldB
This is the database server to be used with the Digital First Remote Consultation project.

It utilises Express and better-sqlite3 to store information about callers and sites being serviced. 

### Windows Installation
You can install Express using npm and accept the better-sqlite addon.

The database is the RemoteCallCentre.db. 

It requires node.js but installs if necessary.

Launch with "node index.js"

### Installation on Linux
Check that you have npm - Node Package Manager.

Install Express and better-sqlite3 from a terminal with 
```bash
npm install express better-sqlite3
```
Clone the RemoteCalldB repo into a suitable directory
```bash
git clone https://github.com/samheard/RemoteCalldB
```
cd to that directory and launch the DB with 
```bash
node index.js
```
This will create a webserver for the Database listening on localhost:3000.

The Digital First app will look at this address for managing and querying data 
