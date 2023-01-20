const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error,resp, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("No data", null);
      return;
    }
    const desc = data[0].description;
    
    if (error) {
      callback("Wrong breed", null);
    } else {
      callback(null,desc);
    }
  });
};

module.exports = { fetchBreedDescription };

