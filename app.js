
/* Importazione Pacchetti necessari - Se non presenti lanciare 'npm i --save' per caricare come da package.json*/
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/* Definizione app */
const app = express();

const routerBasic = require('./routes/routerBasic');
const routerEnglish = require('./routes/RouterEnglish');

app.use(express.static(__dirname + '/public'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

/* Impostazione del motore di rendering - Non è quindi necessario specificare l'estensione dei file nel 'res.render('nomeFile)' */
app.set('view engine', 'ejs');

/* Impostazione del middleware di body-parser - Ci permette di ottenere un oggetto dalla POST di un form HTML debitamente costruito */
app.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);


/* Impostazione del motore di rendering - Non è quindi necessario specificare l'estensione dei file nel 'res.render('nomeFile)' */
app.set('view engine', 'ejs');


app.use('/', routerBasic);
app.use('/eng', routerEnglish);



/* Esportazione modulo app per l'utilizzo in server.js */
module.exports = app;
