
// we don't have to wrap our module with module wrapper function explicitly node do this for us
// (function(exports, require, module, __filename, __dirname) {


jatin = {
    name: "Jatin",
    num: 3,
    developer: true
}
console.log(exports, require, module, __filename, __dirname)
module.exports = jatin;
// })