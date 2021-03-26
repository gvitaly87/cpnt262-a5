const express = require('express');

const router = express.Router();

const dayJS = require('dayjs');

// Handling of get and post requests for the login page
module.exports = () => {
  router.get('/', (req, res) => {
    res.render('layout', {
      pageTitle: 'Login',
      template: 'login',
      dayJS,
    });
  });

  router.post('/', (req, res) => {
    // Placeholder
    console.log(req.body);
    res.send('logged in...');
  });

  return router;
};
