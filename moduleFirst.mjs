
// this types of imports are called common js modules
// we cannot import content of different modules by using require if it uses .mjs extension, 
// let us change the name of module second for more clearance
// below statement is giving error when we renamed the moduleSecond.js to moduleSecond.mjs
// const Simple = require("./moduleSecond")

// ES6 is the *RECOMMENDED* way to do import and export

// this is syntax to import contents of different modules in es6
// this is pretty similar to import statements in python
// import {Simple2 as Simple} from "./moduleSecond.mjs"

// if we don't want to use curly braces {}
// this will give error unless we provide a default export in "moduleSecond.mjs"
// after we provide a default export in "moduleSecond.mjs" then it will be imported by default
// below statement will always import the default export from the other module even if we change name of import keyword (ex. we change it from Simple2 to Simple34)
import Simple34 from "./moduleSecond.mjs"

// if we write more than one entities to import then we cannot write any random name to import the default export
// because then it will check the exports by name
// below statment will give error
// import {Simple1, Simple34} from "./moduleSecond.mjs"
Simple34()