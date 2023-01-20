const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
 
fetchBreedDescription(breedName,(error, desc) => {
  if (error) {
    console.log('Request failed:', null);
  }
  if (error) {
    console.log(`${breedName} not found`);
  } else {
    console.log(desc);
  }
});

