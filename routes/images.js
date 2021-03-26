const express = require('express');

const router = express.Router();
const dayJS = require('dayjs');

const Image = require('../models/ImageModel');

module.exports = () => {
  // Filler function for get requests for /images
  router.get('/', (req, res) => {
    res.send('You wanted to test /images/:id instead');
  });
  /*******************************************************************************
   * Input : get request for /images/:id                                         *
   * Output : Returns a template for a single image file who's id matches the    *
   *          req.id, the image object is inserted on the backend                *
   *******************************************************************************/
  router.get('/:id', async (req, res, next) => {
    try {
      const image = await Image.findOne({ id: req.params.id });
      if (image)
        return res.render('layout', {
          pageTitle: image.title,
          template: 'single-item',
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
