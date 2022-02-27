const fs = require("fs");

fs.readFile("index.js", "utf-8", (err, data)=>{
    console.log("error is ", err)
    console.log("data is ", data)
})

console.log("Finished reading file"); // this statement is executed before reading file even though it was written after it

// let us explain the above situation
// the statement to read file will be executed but the callback will be called when the file will be read fully
// this process can take some time so it deffers the taks and it allows the next statements to run.
// this is some feel about non blocking IO model
