const http = require('http');
const https = require('https');

async function requestAsync (options) {
  const httpLib = options.protocol === 'https:' ? https : http;

  return new Promise((resolve, reject) => {
    const req = httpLib.get(options, (res) => {
      // console.log(`STATUS: ${res.statusCode}`);
      // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

      let responseData = '';

      res.setEncoding('utf8');

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        resolve(responseData);
      });
    });

    req.on('error', (error) => {
      console.error(`Got error: ${error.message}`);
      reject(error);
    });
  });
}

module.exports = requestAsync;
