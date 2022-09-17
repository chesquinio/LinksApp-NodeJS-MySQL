const express = require('express');
const morgan = require('morgan');

// initializations

const app = express();

// settings

app.set('port', process.env.PORT || 4000);

// Middlewares

app.use(morgan('dev'));

// Global Variables

// Routes

// Public

// Starting the Server
app.listen(app.get('port'), ()=> {
    console.log('Server on port ' + app.get('port'));
});