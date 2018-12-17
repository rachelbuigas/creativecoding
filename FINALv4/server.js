'use strict';
var yelp = require('yelp-fusion');
var fs = require('fs');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
var apiKey = '8DQOjG8rq4B5TbiGAwK8YYoM345-44vSTFvdA-IrjvJOcoN8BtqWEEMN3tVf-bojtN-xtqBQAOqjAGOUpfgNI2jdKKtI-C_OzsqZdFm_ze-a-7oJQ37IqHPSukgPXHYx';

var searchRequest = {
  longitude: -73.985683,
  latitude: 40.693291,
  categories: 'pizza'
};

var client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  var result = response.jsonBody.businesses;
  var prettyJson = JSON.stringify(result);
  fs.writeFileSync('student-2.json', prettyJson); 
  console.log(prettyJson);

}).catch(e => {
  console.log(e);
  pret
});
 
