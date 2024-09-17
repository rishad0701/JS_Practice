// Nested functins
                        
let a = 10
function outer(){
    let b = 5
    function inner(){
        let c = 1
        console.log(a,b,c)
    }
    inner()
}
outer()     // output : 10 5 1


// Clousers (A clouser is combintion of function bundled together with ref to its surrounding state)

function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    inner()
}
outer() // Output : 1       // here with every invokation of funcion the temp memory will get established and here make counter to 0
outer() // Output : 1


// another example

function outer1(){
    let counter = 0
    function inner(){
        counter++
    }
    return inner()
}

const fn = outer1()
fn()  // output : 1     // here outer function is returning the inner function with it's scoped variable as well
fn()  // output : 2     // inner function will have access to outer function scope after outer fucntion has finished it's exhecution


// function currying

function sum1(a, b, c) {
    return a + b + c;
}

// Curry function
function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            };
        };
    };
}

// Using the curried function
const curriedsum = curry(sum1); // Change sum to sum1
console.log(curriedsum(1)(2)(3)); // This will output 6

// Alternatively, using the curried function step by step
const add1 = curriedsum(1);
const add2 = add1(2);
const add3 = add2(3);
console.log(add3);


// This Keyword

// implicite binding

const person = {
    name : 'Rishad',
    sayMyName : function(){
        console.log(`my name is ${this.name}`)  
    } 
}

person.sayMyName()  // here this will get the person object

// Explicite binding

function sayMyName(){
    console.log(`my name is ${this.name}`)
}

sayMyName.call(person);     // here this will get the called parameter i.e person

// New binding

function person(name){  
    this.name = name
}

const person1 = new person('rishad')        // here whenever we craete object using new keyword then this keyword will take that instance
const person2 = new person('lokesh')
console.log(person1.name)
console.log(person2.name)

// defalt binding

// in none of above cases this will search for global object with same name
// order of preference is 1) new binding 2) explicite 3) implecite 4) default


// Prototype

function newPerson(fName,lName){
    this.firstName = fName
    this.lastName = lName
}

const person3 = new newPerson('Rishad','Achukatla')
const person4 = new newPerson('xx','yy')

newPerson.prototype.getFullName = function(){       // here by using prototype we are adding the method for newPerson function so that we can now acces this using the instances of the functions
    return this.firstName + ' ' + this.lastName
}
console.log(person2.getFullName())


// protypal inheritance

function man(fName,lName){
    this.firstName = fName
    this.lastName = lName
}

man.prototype.getFullName = function(){       // here by using prototype we are adding the method for newPerson function so that we can now acces this using the instances of the functions
    return this.firstName + ' ' + this.lastName
}

function superHero(fName,lName){
    man.call(this,fName,lName)
    this.isSuperHero = true
}
superHero.prototype.fughtCrime = function(){
    console.log('Fighting crime')
}

superHero.prototype = Object.create(man.prototype)
const batMan = superHero(Rishad,Achukatla)
superHero.prototype.constructor = superHero
console.log(batMan.getFullName())


// classes

class vehichle{
    constructor(vehichlename,color){
        this.nameofvehichle = vehichlename
        this. colorofvehichle = color
    }

    sayCarName(){
        return this.nameofvehichle + 'and color is ' + this.colorofvehichle
    }
}

const newvehichle = new vehichle('tata','black')
console.log(newvehichle.sayCarName())

class car extends vehichle{
    constructor(carname,color){
        super(carname,color)
        this.car = true
    }

    carDetails(){
        console.log(this.color + this.carname + 'car')
    }
}

const inst = new car('black','tata')
console.log(inst.sayCarName())


// Iterables and Iterators

const str = 'Rishad'
const arr = ['R','I','S','H','A','D']

for(let i = 0;i < str.length;i++){
    console.log(str.char(i))
}

for(let i;i < arr.length;i++){
    console.log(arr[i])
}
// here to iterate like this it is little bit difficult so

for (const char of str){
    console.log(char)
}

for(const item of arr){
    console.log(item)
}

// implementing object contains iterator

const obj = {
    [Symbol.iterator] : function(){
        let step = 0
        const iterator={
            next : function(){
                step++
                if(step==1){
                    return{value:'hello',done:false}
                }else if(step==2){
                    return {value:'world',done:false}
                }          
                return {value:undefined,done:true}     
            }   
        }
        return iterator
    }
}

for(const word of obj){
    console.log(word);
}


// Generators

function normalFunction(){
    console.log('hello')
    console.log('world')
}

function* generatorFunction(){
    yield 'hello'
    yield 'world'
}

const generatorobject = generatorFunction()
for(const word of generatorobject){
    console.log(word)
}



