const express = require('express');

const router = express.Router();

const Image = require('../../models/ImageModel');

// Export as a function so we can pass it args
module.exports = () => {
  router.get('/v0/gallery', async (req, res, next) => {
    try {
      const galleryJSON = await Image.find({});
      res.json(galleryJSON);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
