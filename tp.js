// Instructions: Milestone 1 - Uploaded on GitHub
// create filters that the user will be able to select the filter
// the zip file has many photos in it. create a js that will allow 
// filter to the photos.
// you need to check all of the pixels of each image
// transform - rgb color channels.
// transform each RGB to some level. you would remove it from png and
// do all this shit.
// it requires to unzip the folder

const { createReadStream, createWriteStream } = require('fs');
const unzipper = require('./unzip');

