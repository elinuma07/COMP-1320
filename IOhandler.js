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
 */

// Step 1: unzip the files from the zip file name "myfile.zip".
// Step 2: Read all the png files from given directory and return Promise containing array of each png file path
// Step 3: Read in png file and convert to grayscale and write it out/dress her back up
//         Loop through the grayscale in the loop

const unzipper = require("unzipper");
const { readdir } = require("fs").promises;
const { createReadStream, createWriteStream } = require("fs");
const PNG = require("pngjs").PNG;
const path = require("path");

const srcStream = createReadStream(__dirname + "/myfile.zip");
const destStream = createWriteStream(
  __dirname + `/${Math.floor(Math.random() * 500)}.png`
);

// this keeps returning all extensions. not filtering.
// add a loop to ask for the extensions ending in .png
let filteredPics = [];

srcStream
  .pipe(unzipper.Extract({ path: "unzippedpics" }))
  .promise()
  .then(() => {
    return readdir("unzippedpics").then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (
          path.extname(data[i]) === ".png"
        //   path.extname(data[i]) === ".jpeg"
        ) {
          filteredPics.push(data[i]);
        }
      }
      return filteredPics;
    });
  })
  // Loop is to show each item once and not receive them in a bulk to edit.
  .then((filteredPics) => {
    filteredPics.forEach((data) => {
      createReadStream(`unzippedpics/${data}`)
        .pipe(new PNG({}))
        .on("parsed", function () {
          for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
              var rgb = (this.width * y + x) << 2;
              // theBoogieNights1934 is the name of the gray filter
              const theBoogieNights1934 =
                (this.data[rgb] + this.data[rgb + 1] + this.data[rgb + 2]) / 3; // gray
              this.data[rgb] = theBoogieNights1934;
              this.data[rgb + 1] = theBoogieNights1934;
              this.data[rgb + 2] = theBoogieNights1934;
            }
          }

          this.pack().pipe(
              // using destStream only prints one .png that is an error.
              // using createWriteStream with the copy of the same info from
              // line 24 copies all png in the BoogieNights filter but still
              // creates the additional error .png
            createWriteStream(
              __dirname + `/${Math.floor(Math.random() * 500)}.png`
            )
          );
        });
    });
  });