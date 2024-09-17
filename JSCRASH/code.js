const numbers = [1,2,3,4,5]

for(const i of numbers){
    console.log(i)
}
numbers.forEach(x=>console.log(x))

const double = numbers.map((x)=>{return x*2})

const filter = numbers.filter((x)=>{return x%2===0})

let sum=0

for(let i of numbers){
    sum = sum+i
}
console.log(sum)

const find = numbers.find(x=>{return x>3})
console.log(find)

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

const slice = fruits.slice(1,4)

const newarr = numbers.concat(fruits)

console.log(newarr)

const spead = [...numbers,...fruits]
console.log(spead)

const newarr2 = [0,1,...newarr]

const arr1 = [1,2,3,[4,5]]
const arr2 = [...arr1]

arr2[3][0] = 100

console.log(arr2)

const obj1 = {a:1,b:2,c:{d:1,e:2}}
const obj2 = {...obj1}

obj2.c.e = 100

console.log(obj2)

// flattening of array

function flattenarray(arr){
    return arr.reduce((acc,val)=>{
        return acc.concat(Array.isArray(val)?flattenarray(val):val)
    },[])
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const flattened = flattenarray(nestedArray);
const sum1 = (flattenarray)=>{
    return flattenarray.reduce((sum,val)=>sum+val,0)
}
console.log(flattened);
console.log(sum1(flattened))

// Finding missing numver in an array

function missing(arr){
    const n = arr.length+1
    const totsum = (n*(n+1))/2

    const sum = arr.reduce((acc,val)=>acc+val,0)
    return totsum-sum
}

console.log(missing([1,2,4,5]))

// to return the number count in array

function numcount(arr){
    const freq = {}
    for(let i of arr){
        if(i in freq){
            freq[i]++
        }
        else{
            freq[i] = 1
        }
    }
    return freq
}

console.log(numcount([1,2,3,1,2,3]))