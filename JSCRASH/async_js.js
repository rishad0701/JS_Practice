// Timeouts & Intervals

// setTimeOut (If i want to run function after some time interval)

function greet(){
    console.log('Greet')
}

setTimeout(greet,2000)  // so the greet function will get called after 2 seconds and greet will get printed

// Now to clear the setTimeOut we can as shown below

const timeoutid = setTimeout(greet,3000)
clearTimeout(timeoutid)     // So here the timer will get cleared and nothing will get logged


// setInterval (If i want to run the block of code repeatedly after some period of time)

function hello(){
    console.log('hello')
}

setInterval(hello,2000)     // logs hello for every two seconds

// so the setInterval will run repeatedly so we should stop at perticular moment as below

const clear = setInterval(hello,3000)
clearInterval(clear)


// we can achieve setInterval with recursive setTimeOut as well as below

// 1) using setInterval

setInterval(function run(){     // the duration interval includes the time taken to excecute the code u want to run
    console.log('run')          
},100)

// 2) using recursive setTimeOut

setTimeout(function walk(){     // Duration is garenteed between excecutions
    console.log('walk')
    setTimeout(walk,100)
},100)


// Callbacks

// 1) Any function that is passed as an argument is called as callback function

function wish(name){
    console.log(`'Hi '+ ${name}`)
}

function wishRishad(callfn){
    const user = 'Rishad'
    callfn(user)
}

wishRishad(wish)

// The function which accepts the function and returns the function 

function wish2(name){
    console.log(`'Hi '+ ${name}`)
}

function higherOrderFunction(callback){
    const user = 'Rishad'
    callback(user)
}

higherOrderFunction(wish2)


// Async callback functions examples

// 1)
function hello(name){
    console.log(`Hello ${name}`)
}

setTimeout(hello,2000,name)

// 2)
function callback(){
    document.getElementById(demo).innerHTML = "Hello World"
}
document.getElementById(btn).addEventListener("click",callback)

// so if we have multiple callback functions where each level depends on result obtained from previuos level, the nesting of functions become
// so deep that the code becomes difficult to read and maintain


// Promise

// what
//  A promise is always one of the three states
    // 1) pending : which is initial state neither full filled nor rejected
    // 2) fullfilled : means operation completed succesfully
    // 3) rejected : meaning that the operation rejected

// Why
// promises help us to deal with sync code in a far more simpler way compared to callbacks
// callback hell can be avoided using promises

// How to work with promises

//      Dinner scenario                             Javascript
//    1) Your Friend                             1) Promise
//    2) Can get tacos/can't get tacos           2) Promise value
//    3) Can get tacos                           3) Fullfill promise
//    4) Can't get tacos                         4) Reject promise
//    5) Set up the table                        5) Success Callback
//    6) Cook pasta                              6) Failur callback

const onFullfillment = (result)=>{
    console.log(result)
    console.log('set up the table to eat tacos')
}

const onRejection = (result)=>{
    console.log(result)
    console.log('Start cooking pasta')
}

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Bringing Tacos')
    },5000)
})

const promise2 = new promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Not bringing tacos, food truck is not there.')
    },5000)
})

promise1.then(onFullfillment).catch(onRejection)    /* (or)  promise1.then(onFullfillment,onRejection) */
promise2.then(onFullfillment).catch(onRejection)

// promises can be chained as below

// promise1.then().then().then().catch()

const promise3 = promise.resolve(3)
const promise4 = 42
const promise5 = new promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo');
})

promise.all([promise3,promise4,promise5]).then((values)=>{      // this will throw arror if any one of promise throw error
    console.log(values)
})

promise.allsettled([promise3,promise4,promise5]).then((values)=>{   // this will wait for excecution of all promises if any one of promise throw error
    console.log(values)
})


// Async Await

// await keyword can be put infront of any async promise based function to pause your code untill that promise settles and returns its result
// await only works inside async functions. cannot use await in normal functions

async function rish(){
    let promise = new promise((resolve,reject)=>{
        setTimeout(()=>resolve('Hello Rishad'),1000)
    });

    let result  = await promise;
    console.log(result)
}
rish()


// Sequential execution

function resolveHello(){
    return new promise(resolve=>{
        setTimeout(() => {
            resolve('Hello')
        }, 2000);
    })
}

function resolveWorld(){
    return new promise(resolve=>{
        setTimeout(() => {
            resolve('World')
        }, 1000);
    })
}

async function sequentialStart(){
    const hello = await resolveHello()
    console.log(hello)                      // here hello will get log after 2 secs

    const world = await resolveWorld()
    console.log(world)                      // here world will get log after 3 secs(2+1)
}
sequentialStart()      

// Concurrent execution

async function conCurrentStart(){
    const hello = await resolveHello()          
    const world = await resolveWorld()
    
    console.log(hello)      // both will get logged after 2 secs
    console.log(world)    
}

// parallel execution

async function parallel(){
    promise.all([
        (async()=> console.log(await resolveHello()))(),    // 2 secs
        (async ()=> console.log(await resolveWorld()))(),   // 1 sec
    ])   
}
parallel()                  // output : world hello 

async function parallel2(){
    await promise.all([
        (async()=> console.log(await resolveHello()))(),    // 2 secs
        (async ()=> console.log(await resolveWorld()))(),   // 1 sec
    ])
    console.log('Finally')                                  
}
parallel2()         // output : world hello finally