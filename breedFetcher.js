const request = require('request');

const fetchBreedDescription = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  
  request(url, (error,resp, body) => { const data = JSON.parse(body);
    if (error){
      console.log('Error:', error.message);
    }
    if (data.length === 0){
      console.log("Breed not found");
    } else {
      console.log(data[0].description);
    }
  }) 
}

fetchBreedDescription(process.argv[2]);

