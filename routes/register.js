const express = require('express');

const router = express.Router();

const dayJS = require('dayjs');

// Export as a function so we can pass it args
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
