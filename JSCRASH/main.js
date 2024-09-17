console.log('Hello from main.js')

// variables

/* let age = 25
age = 50                    // here i am re assigning the age value but it won't give any error like const
console.log(age)

const salary = 80000        // so const variables should be initialized otherwise we will get error and if we try to re assign the value then also we will get error.
console.log(salary) */



// Data types

//  1) Primitive :- stirng, Number, Boolean, Null type, BigInt, Symbol, Undefined

const Name = "Rishad"
const language = "Hindi"        // strings
const town = `DNL`

const total = 0                 // Numbers
const val = 3.14

const isprimary = true          // Boolean

let result                     // Undefined

const data = null              // Null

//  2) Non-Primitive :- Objects

const person = {                // objects
    firstName : 'Rishad',
    lastName : 'Achukatla',
    age : 30,
}

console.log(person.firstName)

const oddnumbers = [1,3,5,7,9]      // array 
console.log(oddnumbers[2])


// Javascript is dynamically typed cause no need to mention the data type as below example

let a = 'Rishad'
a = 10
a = true


// Operators

let x = 10      // Assignment operators
let y = 2

console.log(x % y)  // Here % and ++ is arithematic operater
console.log(++x)

console.log(x==y)   // comparision operater

const isvalid = x > 8 && y < 8      // logical operator
console.log(isvalid);

console.log('Rishad ' + 'Achukatla')    // here we can use + for adding two strings

const isEven = 10 % 2 === 0 ? 'Number is Even' : 'Number is odd'
console.log(isEven);


// Type Conversions

console.log(true + '5') // output : true5
console.log('4' + '5')  // output : 45
console.log('5' - '4')  // output : 1                          // these all are implicite conversions where they get converted automatically
console.log('ris' - 5)  // output : NAN (Not a Number)
console.log('5' - true) // output : 4
console.log('5' - null) // output : 5


console.log(Number('5')) // Outpur : 5                         // these all are explicite conversions cause we manually converting them
console.log(Number(''))  // Outpur : 0
console.log(Number(true))  // Outpur : 1
console.log(Number(false))  // Outpur : 0
console.log(parseInt('4'))  // Output : 4
console.log(parseFloat('3.14'))  // Outpur : 3.14
console.log(String(true))  // Output : true
console.log((500).toString())  // Output : 500
console.log(Boolean(10))  // Output : true  // but null,0,'',undefined,NAN will return false
console.log(parseInt("123abc"));  // Output: 123
console.log(parseInt("abc123"));  // Output: NaN
console.log(Number("123abc"));  // Output: NaN


// Equality

// const var1 = '10'
// const var2 = 10

const var1 = ''
const var2 = 0

console.log(var1==var2)     // output : true
console.log(var1===var2)    // output : false


// Conditional Statements

const num = -5

if(num>0){
    console.log('Number is positive')
}else if(num<0){
    console.log('Number is Negitive')
}else{
    console.log('Number is Zero')
}

const colour = 'red'

switch(colour){
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    case 'pink':
        console.log('color is pink')
        break
    default :
        console.log('Not a valid color')
}


// Looping code

for(let i=0;i<5;i++){
    console.log('Iteration Number '+i);
}


let i=1
while(i<=5){
    console.log('Iteration Number '+i)
    i++
}

do{
    console.log('Iteration Number ' + i)
    i++
}while(i<=5)

const arr = [1,2,3,4,5]
for(const num of arr){
    console.log('Number is '+num);
}


// Functions

function print(name){
    console.log('My name is '+name);
}

function add(var1,var2){
    return var1+var2;
}

const arrowsum = (num1,num2)=>{
    return num1+num2
}

// if we have only one line of code in arrow function we can remove curly braces and return as well like below

const arrowsum2 = (num1,num2)=> num1+num2

print(Rishad);
add(5,8);



// Scope

// 1) Block scope (introduced in 2015 with the introduction of let and const key words)

if(true){
    const blocknum = 5      // it will throw the error cause const is block scoped and we are calling it outside of the block
}
console.log(blocknum)

// 2) Function scoped      

function nwf(){
    const name  = 'Rishad'
    console.log(name)
}

// 3) Global scoped

// If we declare variables globally then we can access them in function and block and we caanot override the block or function scoped variables with global scoped variables wuith same name as well
