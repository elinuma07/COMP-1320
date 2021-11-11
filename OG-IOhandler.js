/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations. I also deleted your
 * previous information as it was confusing Armaana.
 * 
 * Name: Armaana Dhanjikathankrashnu
 * Date of Birth: November 4th, 2021
 * Place of birth: Visual Studio
 * Parent: Elisabeth Numa or the creator of VS?
 * 
 */

// Step 1: unzip the files from the zip file name "myfile.zip".
// Step 2: Read all the png files from given directory and return Promise containing array of each png file path 
// Step 3: Read in png file and convert to grayscale and write it out/dress her back up
//         Loop through the grayscale in the loop


const unzipper = require('unzipper');
const { readdir } = require("fs").promises;
const { createReadStream, createWriteStream } = require("fs");
const { PNG } = require('pngjs').PNG;
const path = require('path');

const srcStream = createReadStream(__dirname + '/myfile.zip');
const destStream = createWriteStream(__dirname + `/${Math.random(1000)}`);

// this keeps returning all extensions. not filtering.
// add a loop to ask for the extensions ending in .png
let filteredPics = [];

srcStream
  .pipe(unzipper.Extract({ path: 'unzipped pics' }))
  .promise()
  .then(() => {
    readdir("unzipped pics")
      .then(data => {
          for (let i = 0; i < data.length; i++) {
            if (path.extname(data[i]) === '.png') {
              filteredPics.push(data[i]);
            }
          } 
          console.log((filteredPics))
          // return filteredPics;
          }
        )
      })
      // Loop is to show each item once and not receive them in a bulk to edit.
      .then(() => { filteredPics.forEach(data => {

      createReadStream("unzipped pics/"`${data}`)
      .pipe(new PNG ({}))
      .on("parsed", function () {
        for (let v = 0; v < this.height; v++) { // Height = vertical
          for (let h = 0; h < this.width; h++) { // Width = horizontal
            let rgb = (this.width * v + h) << 2; // (this.width * v + h) * (this.width * v + h)^2
     
            // After the equal, the calculation inverts the filter. Awesome.
            // this.data[rgb] = 255 - this.data[rgb];
            // this.data[rgb + 1] = 255 - this.data[rgb + 1]; 
            // this.data[rgb + 2] = 255 - this.data[rgb + 2];
            // this.data[rgb + 3] = this.data[rgb + 3] >> 1; Commented out for no reason
     
            const theBoogieNights1934 = (this.data[rgb] + this.data[rgb + 1] + this.data[rgb + 2])/3; // gray
              this.data[rgb] = theBoogieNights1934;
              this.data[rgb + 1] = theBoogieNights1934;
              this.data[rgb + 2] = theBoogieNights1934;
              console.log("ARE WE REALLY DONE DOUGH?")
          }
        }
        this.pack()
  
      .pipe(destStream);
      })
      })
      console.log("WE DONE MOFO!")
      });
      // .then((filteredPics) => {
      //   let r = 0;
      //     theBoogieNights1934 = rgb(r,0,0); // or (r+g+b/3)
      //     console.log(thefilteredPics)
      // 
    //   }
    //   )
    //   .catch(err => console.log(err))
    // .catch((err) => err);