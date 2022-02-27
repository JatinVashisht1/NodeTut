const fs = require("fs");

// this will by default run asynchronously
fs.readFile("index.js", "utf-8", (err, data)=>{
    console.log("error is ", err)
    console.log("data is ", data)
})

console.log("Finished reading file"); // this statement is executed before reading file even though it was written after it

// let us explain the above situation
// the statement to read file will be executed but the callback will be called when the file will be read fully
// this process can take some time so it deffers the taks and it allows the next statements to run.
// this is some feel about non blocking IO model


// this will operate synchronously
let f = fs.readFileSync("index.js")

console.log(f)// this will print the stream
console.log(f.toString) // this will print content of the file



// writting to the file
// same concept as readFile and readFileSync
fs.writeFile("file.txt", "this is sample text to write to file", ()=>{
    console.log("File written")
})

console.log("finished reading file")