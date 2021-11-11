const unzipper = require('unzipper');
// const { createReadStream, createWriteStream, createGunzip } = require('fs');
const { createReadStream } = require("fs")

const srcStream = createReadStream(__dirname + '/myfile.zip');
// const unzip = zlib.createGunzip();
// const destStream = createWriteStream(__dirname + '/unzipped');

// pipe srcStream to unzip and then destStream

srcStream
  .pipe(unzipper.Extract({ path: 'eli' }));
// srcStream
//     .pipe(unzipper.Extract({path: 'unzipped'}))
    // .pipe(destStream)
    // .on('err', err => {
    //     console.log(err);
    // })
