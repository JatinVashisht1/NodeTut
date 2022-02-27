
// to export function acc. to es6 we just have to write export keyword before function
export function Simple1(){
    console.log("Simple1 is complex");
}

// this has now become a default export function
export default function Simple2(){
    console.log("Simple2 is complex");
}

// below statement is also giving error after changing extension of this file to .mjs
// so we have to use do it as described by es6 guidlines
// ES6 is the *RECOMMENDED* way to do import and export
// export default Simple;