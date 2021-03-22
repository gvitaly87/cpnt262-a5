const express = require('express');

const router = express.Router();

const getImages = require('../../services/getImages');
// Export as a function so we can pass it args
module.exports = () => {
  router.get('/v0/gallery', async (req, res, next) => {
    try {
      const galleryJSON = await getImages('./data/images.json');
      return res.json(galleryJSON);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
