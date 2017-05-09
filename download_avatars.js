
/*
Using the request package, you will fetch the list of contributors as a JSON string from the GitHub API's
contributors endpoint. Upon receiving the results, your function will invoke a callback function with
the results. This callback function will loop over and print out the avatar_url for each object in the
collection.

*/

var request = require('request');
var GITHUB_USER = 'violet-anima';
var GITHUB_TOKEN = '4b487cdc5c9222b32abecbe0e6a395f5f859de13';
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';


console.log('Welcome to the GitHub Avatar Downloader!!');


function getRepoContributors(repoOwner, repoName, cb) {
  // create endpoint following GitHub API at https://developer.github.com/v3/repos/#list-contributors
  let endpoint = `@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  let requestURL = `https://${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}` + endpoint;

  let options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };

  request.get(options, function (err, response, body) {
    cb(err, JSON.parse(body));
  });
}


//HTTP GET request to download each profile image
function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function(error){
      console.log('Error has been made!');
      throw error;
    })
    .on('response', function(response){
      console.log('Image is downloading.');
    })
    .pipe(fs.createWriteStream(filePath));
  }
}


