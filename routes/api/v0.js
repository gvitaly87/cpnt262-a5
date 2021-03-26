const express = require('express');

const router = express.Router();

const Image = require('../../models/ImageModel');

module.exports = () => {
  /*******************************************************************************
   * Input : get request for /api/v0/images                                      *
   * Output : json file containing all image objects stored inside the images db.*
   *******************************************************************************/
  router.get('/v0/images', async (req, res, next) => {
    try {
      const galleryJSON = await Image.find({});
      if (galleryJSON) return res.json(galleryJSON);
      return next(new Error('failed to read and convert db images into json'));
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
