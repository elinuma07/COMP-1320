// This works in the node REPL
// process.argv
// ['/usr/local/bin/node]}
// let firstI = process.argv[0]; // firstI
// const [firstItem, secondItem, thirdItem] = process.argv;
// const list = ["hi", "john", "goodbye"];

// calling firstItem gives "hi"
// calling secondItem gives "john"
// calling thirdItem gives "goodbye"

// const [,] // This allows you to skip over the first option
// const[,secondI, thirdI] = list;
// calling secondI gives "john"
// calling thirdI gives "goodbye"

// STREAMS
// buffer-copy.js - This is for small files.

const {
    readFileSync,
    writeFileSync
} = require('fs');

const [,, src, dest] = process.argv // source and destination
// src - reading in a file called hello.txt.

// read entire file content
const content = readFileSync(src);
// the program would take hello.txt, would read all of the content (const content). Once it reads the content, it will write the
// content to goodbye.txt. We just copied the file from one file to another.

// write that content somewhere else
writeFileSync(dest, content);

// To explain: This above is not using streams right now. Let's say I gave some file that I want node.js to read and I type it in
// to my terminal. I also gave the location of some other file (which is empty) and I want content to be written to that file.
// This program we're making should read a file, and after it reads the content of that file, it should take the content of that file
// and write it to another file. On line 25, const [,, src, dest] = process.argv // source and destination, the src is reading in
// a file called example "hello.txt". And then the destination is "users/Armaan/goodbye.txt". the program would take hello.txt,
// would read all of the content (const content). Once it reads the content, it will write the, content to goodbye.txt.
// We just copied the file from one file to another.

// STREAMS - This is for large files. 
// The write operation will not happen because it's over 10,000 MB or the file too large. the v8 engine in node.js has a limit of
// how large of a file you can read at once. Node.js would disable us from proceeding with the write file.
// Error example: throw new ERR_FS_FILE_TOO_LARGE(size);

// RangeError [ERR_FS_FILE_TOO_LARGE]: File size (10737418240) is greater than possible Buffer: 2147483647 bytes (8 bits).

// ** Buffer VS Streams ** 
// Buffer is a data structure that stores and transfers arbitrary binary data.
// > require('fs').readFileSync('./assets/divine-comedy.txt')
// <Buffer 49 6e 63 69 70 79 64 20 43 87 93 0f 33 8e 37 ... 209962 more bytes>
// * this is loading all the content of the file in memory *
// If you do not use .toString or "utf-8" to make it readable like a string, then node.js will return a buffer.
// Streams is an abstract interface for working with streaming data. A stream represents data that flows over time. In chunks.
// > const stream = require("fs").createReadStream("./assets/divine-comedy.txt")
// > undefined
// > stream.bytesRead
// 65536 ** This does not load all of the data right away - in chunks
// The stream will allow us to connect that file to some destination and slowly send the data piece by piece from one destination
// to another. A stream is kind of like a pipe where data can flow overtime through. Key thing: You will only get the data in pieces
// and never all at once.
// const stream = require("fs").createReadStream("./assets/divine-comedy.txt") --> We are giving createReadStream a file. Node.js
// will start streaming data out of that file. 
// stream.bytesRead --> This reads the first piece of streamed data that node.js has read so far.

// STREAMS - LARGE FILES
// stream-copy.js 

const {
    createReadStream,
    createWriteStream
} = require ("fs")

const [,, src, dest] = process.argv // source and destination
const srcStream = createReadStream(src)
// src - reading in a file called hello.txt.
const destStream = createWriteStream(dest)
// dest - writing the file to that destination
srcStream.on('data', (data) => destStream.write(data)) // .on('data') --> this fn will run the minunte we get a piece of data
//  .on('data') will be called everytime we read one piece of data and the piece of data will get passed in to (data) parentheses
// The data in (data), we're taking it and writing it to tour => destStream.write(data). Every writable stream will have access
// to .write. This helps with creating that WriteStream(data) and then passing that data in to the => destStream.write(data) from
// createWriteStream(dest). We read a piece of data from our readable stream srcStream.on. Then srcStream.on('data', (data) part
// will run and then we will send this to => destStream.write(data)). 3 MB is all needed for streaming and not using a stream takes
// in 600 MB. If you're working with small files, there's no difference with using streams or fs.readFile. Using large pieces of
// data makes sense to use Streams. Streams keeps a low memory footprint even with large amounts of data. Streams allow you to 
// process data as soon as it arrives. 

// STREAM TYPES
// All streams are event emitters --> You can subscribe to difference events on a stream. Subscribe to things you NEED ('readable','data','error','end')
// A stream instance is an object that emits events when its internal state changes:
// s.on('readable',() => {}) // ready to be consumed
// s.on('data', (chunk) => {}) // new data is available <-- ** THIS IS THE ONE YOULL SUBSCRIBE TO FIRST
// s.on('error', (err) => {}) // some error happened
// s.on('end', () => {}) // no more data available
// When you will use .on("data", (chunk) => {}) -> you will stream that data and it will be using the callback function (chunk) and then you can do wtv
// you want with it, You can uppercase it, process it, write it to another location. if you subscribe to the event .on('end", () => {}), once node.js
// is done reading all of the data from (chunk), node.js will call .on('end") event runs, it means you have nothing more to do. You would/could
// console log ("The stream is finished").

// ** READABLE STREAM **
// A readabl stream represents a ssource from which data is consumed
// ex.: fsReadStream
//      process.stind
//      HTTP response (client-side) // browser
//      HTTP request (server-side)
//      AWS S3 GetObject (data field)
// It supports two modes for data consumption: flowing and paused (or non-flowing) mode.
// Data is read from source automatically and chunks are emitted as soon as they are available.

// BACKPRESSURE - TERM TO KNOW
// When writing large amounts of data, you should make sure you handle the "stop write" signal and the "drain event".
// The speed that we read data != the speed we write data. You're reading data from a fast SSD/ HDD and you're getting the data super quickly.
// You cannot write it fast enough to the destination. This will cause traffic. A stream will be backed up as you cannot write data that fast

// backpressure.js

const {
    createReadStream,
    createWriteStream
} = require('fs');

const [,, src, dest] = process.argv;
const srcStream = createReadStream(src);
const destStream = createWriteStream(dest);

srcStream.on('data', data => {
    const canContinue = destStream.write(data)
    if (!canContinue) {
        // we are overflowing the dest, we should pause
        srcStream.pause()
        // we will resume when the destination stream is drained
        destStream.once('drain', () => srcStream.resume())
        // drain will empty the stream and then continue to write.
    }
});

// Explanation: When you take the  first piece of .on('data') and add it to the callback function (data => ), node.js will check if its safe to write data
// or not. it will return a Boolean value. if node.js returns false, its busy. if node.js is true, then it will let you if it can receive more data
// to keep reading it. 

// Duplex Stream -> Streams that are both Readable and Writable
// Transform Stream --> Duplex stream that can modify or transform the data as it is written and read. There's two endpoints: There's a readable stream
// that is getting written in to the transform stream. We can then modify the chunk of data in to the writable stream. If you want to zip "hello.txt" file
// you can send a piece in to the readable stream, compress it in to the transform stream, and then write it to our destination stream. it will be 
// "hello.zip". (zlib.createGzip(), crypto.createCipheriv()). .createGzip is a transform stream. For it to work, you need to hook in to it a readable
// stream and hook out of it a writable stream.

// stream-gzip.js

const {
    createReadStream,
    createWriteStream
} = require("fs");
const {createGzip} = require('zlib');

const [,, src, dest] = process.argv;
const srcStream = createReadStream(src);
const gzipStream = createGzip();
const destStream = createWriteStream(dest);

srcStream.on('data', data => {
    const canContinue = gzipStream.write(data)
    if(!canContinue) {
        srcStream.pause("Pausing - too much traffic");
        gzipStream.once('drain', () => {
            srcStream.resume()
        })
    }
})

srcStream.on('end', () => {
    // check if there's buffered data left
    const remainingData = gzipStream.read()
    if (remainingData != null) {
        destStream.write()
    }
})

gzipStream.on('data', data => {
    const canContinue = destStream.write(data)
    if(!canContinue) {
        gzipStream.pause()
        destStream.once('drain', () => {
            gzipStream.resume()
        })
    }
})

gzipStream.on('end', () => {
    destStream.end()
})

// TO DO: handle errors! There's soo much to do to make it work w/out .pipe()

// STREAMS - PIPES -> SOLVES BACKPRESSURE/TRAFFIC
// pipe.js -> .pipe() to the rescue.
// readable.pipe(writableDest)
// .pipe connects a readable stream to a writable stream
// .pipe transforms streams that can be used as a destination as well
// .pipe returns the destination stream allowing for a chain of pipes

// readable
//  .pipe(transform1)
//  .pipe(transform2)
//  .pipe(transform3)
//  .pipe(writable)

const {
    createReadStream,
    createWriteStream
} = require("fs");
const {createGzip} = require('zlib');

const [,, src, dest] = process.argv;
const srcStream = createReadStream(src);
const gzipStream = createGzip(); // return a transform stream
const destStream = createWriteStream(dest); // write something out to a destination

srcStream 
    .pipe(gzipStream) // We'll keep compressing the data and sending it to the destStream
    .pipe(destStream);

// ** MOST COMMON WAY TO USE STREAMS **
// Ex of a zip file encrypted.
// readable
//  .pipe(decompress)
//  .pipe(decrypt)
//  .pipe(convert)
//  .pipe(encrypt)
//  .pipe(compress)
//  .pipe(writeToDisk)

// How to handle the errors - you have to have err on each .pipe

// readable
//  .on('error', handleErr)
//  .pipe(decompress)
//  .on('error', handleErr)
//  .pipe(decrypt)
//  .on('error', handleErr)
//  .pipe(convert)
//  .on('error', handleErr)
//  .pipe(encrypt)
//  .on('error', handleErr)
//  .pipe(compress)
//  .on('error', handleErr)
//  .pipe(writeToDisk)
//  .on('error', handleErr)

// YOU CAN USE PIPELINE INSTEAD OF ALL OF THAT OTHER SHI ABOVE LOL

// pipeline.js

const {pipeline} = require('stream');
const {
    createReadStream,
    createWriteStream
} = require("fs");
const {createGzip} = require('zlib');

const [,, src, dest] = process.argv;

pipeline (
    createReadStream(src), // Give pipeline as many streams as you would like. - 1st argument
    createGzip(), // 2nd argument
    createWriteStream(dest), // 3rd argument -> our callback fn
    onEnd = (err) => { // we jump in to the callback and handle the err.
        if (err) {
            console.log(`Error: ${err}`)
            process.exit(1);
        }
        console.log("Done!");
    }
)