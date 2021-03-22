const express = require('express');

const router = express.Router();

const Image = require('../../models/ImageModel');

// Export as a function so we can pass it args
module.exports = () => {
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
