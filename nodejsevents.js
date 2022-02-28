import EventEmitter from 'events';
// here you cannot import EventEmitter as Common JS module because we have changed the dependency in dependency.json file to module 🙂
class MyEmitter extends EventEmitter{}

// concept of emitter is similar to kotlin channels/sharedflow
const myEmitter = new MyEmitter()
myEmitter.on('WaterFull', () => {//this call back is similar to recieve

    // set time out is an async. call so it wont block the thread
    // set time out tab run hoga jab sare lines of remaining code run ho jate hain
    setTimeout(()=>{
        console.log("Kar de bhai band motor kya ho gya!")
    },3000)// 3000 is time to delay in millis
    console.log('Pani ki tanki bhar gayi hai');
});

// same as emit in channels
console.log("The script is running asynchronously part 1")
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
console.log("The script is running asynchronously part 2")
myEmitter.emit('WaterFull');

