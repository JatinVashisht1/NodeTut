function Simple(){
    console.log("Simple is complex");
}

// below statement is also giving error after changing extension of this file to .mjs
// so we have to use do it as described by es6 guidlines
module.exports = Simple;