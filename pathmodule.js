const path = require("path")

console.log(path.basename('C:\\temp\\myfile.html'))
console.log(path.dirname('C:\\temp\\myfile.html'))
console.log(path.extname(__filename)) // can also give path to a file (like in above statements)
