#!/usr/bin/env node

var fs = require('fs');

console.log("DEBUG: " + Date.now())
dateStamp = Date.now()
console.log("dateStamp: " + dateStamp)

/*
fs.mkdirSync(dateStamp, 0766, function(err) {
  if (err) {
    console.error(err)
    response.send("ERROR! No dir make?\n")   // echo the results back
  }
}
*/

input = +process.argv[2];

if(!fs.existsSync(input)); {
   fs.mkdirSync(input, 0766, function(err) {
     if (err) {
      console.error(err);
       response.send("ERROR! Can't make the directory! \n");    // echo the result back
     };
  });
};