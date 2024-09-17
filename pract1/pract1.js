
// Reversing a string
function reversesrtring(str){
    return str.split('').reverse().join('');
}

console.log(reversesrtring("hello rishad"));

//Largest number in array
function findLargestNumber(arr) {
    return Math.max(...arr);
}


console.log(findLargestNumber([10, 5, 20, 15]));

// Counting vowels in string
function countvowelsinstring(str){
    let vowels = "aeiou";
    return str.toLowerCase().split('').filter(x=>vowels.includes(x)).length;
}

console.log(countvowelsinstring("Rishad Achukatla"));

//prime number
function primenumber(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i) return false;
    }
    return "prime number";
}

console.log(primenumber(5));

//Fibonacci series
function fibonacciseries(num){
    const series = [0,1];                           // we can change or add the values of array but we cannot re assign the new array to const variable
    for(let i=2;i<num;i++){
        series.push(series[i-1]+series[i-2]);
    }
    return series;
}

console.log(fibonacciseries(5));

// for the button in html

const button = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');

let count = 0;

button.addEventListener('click',()=>{
    count++;
    counterDisplay.textContent = `Count : ${count}`;
});
