const fs = require('fs');
const path = require('path');

const config = module.exports;

fs.readdirSync(__dirname)
  .filter(fileName => fileName !== path.basename(__filename))
  .forEach(fileName => {
    const fileNameWithoutExtension = path.basename(fileName, '.js');
    config[fileNameWithoutExtension] = require(`./${fileNameWithoutExtension}`);
  });

Object.freeze(config);
