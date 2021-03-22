const express = require('express');

const router = express.Router();
const dayJS = require('dayjs');
// TODO: get rid of imgArr
const imgArr = require('../data/images');
const Image = require('../models/ImageModel');
// Export as a function so we can pass it args
module.exports = () => {
  // TODO: update gallery tab to do something
  router.get('/', (req, res) => {
    res.render('layout', {
      pageTitle: 'Gallery',
      imgArr,
      template: 'gallery',
      dayJS,
    });
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const image = await Image.findOne({ id: req.params.id });
      if (image)
        return res.render('layout', {
          pageTitle: image.title,
          template: 'image',
          picture: image,
          dayJS,
        });
      return next(new Error('Failed to find an image for the given id'));
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
