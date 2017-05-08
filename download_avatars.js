
/*
Using the request package, you will fetch the list of contributors as a JSON string from the GitHub API's
contributors endpoint. Upon receiving the results, your function will invoke a callback function with
the results. This callback function will loop over and print out the avatar_url for each object in the
collection.

*/

var request = require('request');
var GITHUB_USER = violet-anima;
var GITHUB_TOKEN = 2f90fe53427f7532dc48129e1045761f79207757;


console.log('Welcome to the GitHub Avatar Downloader!!');

/*
function getRepoContributors(repoOwner, repoName, cb) {
  // This function will use the request library to programmatically fetch the list of
  // contributors via HTTPS for the given repo.
}
*/

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


