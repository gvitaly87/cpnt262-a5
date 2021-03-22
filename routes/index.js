const express = require('express');

const router = express.Router();
const dayJS = require('dayjs');

const galleryRoute = require('./gallery');
const registerRoute = require('./register');
const loginRoute = require('./login');
const apiRoute = require('./api/v0');

// Export as a function so we can pass it args
module.exports = () => {
  router.get('/', (req, res) => {
    res.render('layout', { pageTitle: 'Index', template: 'index', dayJS });
  });

  //Will be added for A5
  router.use('/images', galleryRoute());
  router.use('/register', registerRoute());
  router.use('/login', loginRoute());
  router.use('/api', apiRoute());

  return router;
};
