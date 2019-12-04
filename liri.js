require("dotenv").config();
var keys = require("./keys.js");

//console.log(keys)

var cmd = process.argv[2]
var input = process.argv.slice(3).join(" ")
console.log(cmd)
console.log(input)
// if (address.city) {
//   search += address.city;
// }

// if (address.stateCode) {
//   search += ", " + address.stateCode;
// }

// if (address.zipcode) {
//   search += " " + address.zipcode;
// }

// if (address.countryCode) {
//   search += " " + address.countryCode;
// }
//if else against cmd 
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 //find what data you are looking for
console.log(data.tracks.items); 
});