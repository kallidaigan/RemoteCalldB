const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000 || process.env.PORT;
const callerRouter = require('./routes/callers');
const callRouter = require('./routes/calls');
const localeRouter = require('./routes/locales');
const clinicRouter = require('./routes/clinics');

app.use(express.json());
//had to install cors to allow callback from external sources
var corsOptions = { origin: true };
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'Awaiting...'});
});

app.use('/callers', callerRouter);
app.use('/calls', callRouter);
app.use('/locales', localeRouter);
app.use('/clinics', clinicRouter);

app.listen(port, () => {
  console.log(`RemoteCallServer listening at http://localhost:${port}`);
});