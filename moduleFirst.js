
// this types of imports are called common js modules
// we cannot import content of different modules by using require if it uses .mjs extension, 
// let us change the name of module second for more clearance
// below statement is giving error when we renamed the moduleSecond.js to moduleSecond.mjs
const Simple = require("./moduleSecond")

Simple()