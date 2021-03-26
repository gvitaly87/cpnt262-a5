const express = require('express');

const router = express.Router();

const dayJS = require('dayjs');

// Handling of get and post requests for the register page
module.exports = () => {
  router.get('/', (req, res) => {
    res.render('layout', {
      pageTitle: 'Register',
      template: 'register',
      dayJS,
    });
  });

  router.post('/', (req, res) => {
    // Placeholder
    res.send('Thank you for registering');
  });

  return router;
};
