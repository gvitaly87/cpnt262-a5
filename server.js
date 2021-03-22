const mongoose = require('./_connection');
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const dayJS = require('dayjs');

const routes = require('./routes');

// Read the port from the environment
const PORT = process.env.PORT || 3000;

// Returns the static asset as long as it is found in the specified folder.
app.use(express.static(path.join(__dirname, './public')));

// In order to parse post requests
app.use(express.urlencoded({ extended: true }));

// Set ejs as the view engine for express
app.set('view engine', 'ejs');

// Set global vars for ejs
app.use('/', (req, res, next) => {
  res.locals.siteTitle = 'CPNT 262 - A5';
  next();
});

// Router middleware
app.use('/', routes());

//404 Not Found page.
app.use((req, res, next) => {
  const err = new Error('Requested page could not be found');
  err.status = 404;
  next(err);
});

// Catch all the errors that might have occurred
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  // Save the error, but not display it to the user.
  console.error(err);
  // Default to a DB error
  const status = err.status || 500;
  res.locals.status = status;
  res.status(status);
  // Render the error page using the default layout
  res.render('layout/index', { pageTitle: `Error ${status}`, template: 'error', dayJS });
});

// Start a TCP server listening for connections on the given port and host
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
