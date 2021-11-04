const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((request, response) => {
    console.log("request ", request.url);

    // when finding hte path, you need the . and then a /. if this is the file path
    // filePath == "./", then send it/make it to ./index.html
    let filePath = "." + request.url;
    if (filePath == "./") {
      filePath = "./index.html";
    }

    // the string is taking out just the extension name ".html"
    // we're looking up the mime type. we look up the mime type in the object
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
    };

    // the extension name or extname will display how the content will show from
    // the ./index.html page
    const contentType = mimeTypes[extname] || "application/octet-stream";

    // the file type is "./index.html" right now and we're trying to read the file.
    // were looking on the hdd for ./index.html. if there's no file, the err will
    // appear and if the file exists, then we will write the file.
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile("./404.html", (error, content) => {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
        }
      } else {
        // the content is the html page
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  // turning the server on
  .listen(8125, () => {
    console.log("Server running at http://127.0.0.1:8125/");
  });
