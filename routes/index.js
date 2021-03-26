const express = require('express');

const router = express.Router();
const dayJS = require('dayjs');

const imagesRoute = require('./images');
const registerRoute = require('./register');
const loginRoute = require('./login');
const apiRoute = require('./api/v0');

/*******************************************************************************
 * Input : get request for /                                                   *
 * Output : A rendered layout for the index page from the index partial        *
 *******************************************************************************/
module.exports = () => {
  router.get('/', (req, res) => {
    res.render('layout', { pageTitle: 'Index', template: 'index', dayJS });
  });

  // Separates the routes into their own modules
  router.use('/images', imagesRoute());
  router.use('/register', registerRoute());
  router.use('/login', loginRoute());
  router.use('/api', apiRoute());

  return router;
};
