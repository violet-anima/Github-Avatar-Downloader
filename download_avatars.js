var request = require('request');
var GITHUB_USER = "violet-anima";
var GITHUB_TOKEN = "4b487cdc5c9222b32abecbe0e6a395f5f859de13";
var repoOwner = process.argv[2];
var repoName = process.argv[3];


console.log('Welcome to the GitHub Avatar Downloader!!');


if (!repoOwner || !repoName) {
  throw 'Please provide a repo owner and repo name.  Eg: e.g "node download_avatar.js violet-anima finstagram"';
} else {

    // Github API endpoint
  function getRepoContributors(repoOwner, repoName, cb) {
    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN +
    '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

    // HTTP request to get contributors and User-Agent forbidden request bypass
    request.get({
      url: requestURL,
      headers: {
        "User-Agent": "GitHub Avatar Downloader - Student Project"
      }
    }, cb)
  }


  function printResponse(err, res, body) {
    if(err) {
      console.log("Error has been made!", error);
    }
    var parsedResults = JSON.parse(body);

    // targeting avatar urls to save to avatar folder
    for (var arr in parsedResults) {
      var avatarUrl = parsedResults[arr]["avatar_url"];
      downloadImageByURL(avatarUrl, `avatar/${arr}.jpg`);
    }
  }

  var fs = require("fs");

  function downloadImageByURL(url, filePath) {

    // HTTP request to get images
    request.get(url)
      .on("error", function(err) {
        console.log("Error has been made!");
        throw err;
      })
      .on("response", function (response) {
        console.log("Image(s) downloading.");
      })
      .on("end", function (){
        console.log("Download has ended.")
      })
      .pipe(fs.createWriteStream(filePath));
    }

 getRepoContributors(repoOwner, repoName, printResponse);

}
