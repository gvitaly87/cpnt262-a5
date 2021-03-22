const express = require('express');

const router = express.Router();
const dayJS = require('dayjs');

const imgArr = require('../data/images');

// Export as a function so we can pass it args
module.exports = () => {
  router.get('/', (req, res) => {
    res.render('layout', {
      pageTitle: 'Gallery',
      imgArr,
      template: 'gallery',
      dayJS,
    });
  });

  return router;
};
