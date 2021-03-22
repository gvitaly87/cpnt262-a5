const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const getImages = async (jsonPath) => {
  const data = await readFile(jsonPath, 'utf8');
  if (!data) return [];
  return JSON.parse(data);
};

module.exports = getImages;
