// LEVEL 1 (Basic Practice)
// Task 1: Array Basics

let arr = [10, 20, 30, 40, 50];

console.log(arr[0]);              // 10
console.log(arr[arr.length-1]);   // 50
console.log(arr.length);          // 5


//  Task 2: Push & Pop

let arr1 = [1,2,3];

arr1.push(4,5); 
arr1.pop();

console.log(arr1);  // [1, 2, 3, 4]


//  Task 3: Includes Check

let arr2 = ["html","css","javascript","react"];

console.log(arr2.includes('javascript'));   // true



//  LEVEL 2 (Intermediate)
//  Task 4: Filter Salaries

let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let out = emp1.filter((c)=>{
       return c.salary>20000;
})

console.log(out);     // [ {name:"B", salary:50000},
                      //   {name:"C", salary:30000} ];



// Task 5: Map Names

let out1 = emp1.map((c)=>{
       return c.name;
})

console.log(out1);   // ['A', 'B', 'C']


// Task 6: Reduce Sum

let out2 = emp1.reduce((acc,c)=>{
    return acc+c.salary;
},0);

console.log(out2);  // 90000



// LEVEL 3 (Logic Building)
// Task 7: Remove Duplicates

let arr7 = [1,2,2,3,4,4,5];
let out3 = [];

arr7.forEach((x) => {
    if(!out3.includes(x)){
        out3.push(x);
    }
})

console.log(out3); // [1, 2, 3, 4, 5]


// Task 8: Find Largest Number

let arr8 = [10, 200, 5, 90];
let largest = arr8[0];

arr8.forEach((x) => {
    if(x>largest){
        largest = x;
    }
});

console.log(largest);  // 200



// Task 9: Reverse String WITHOUT reverse()

let str = "hello";
let out4 = "";

for(let x of str){
    out4 = x + out4;
}

console.log(out4); // olleh



// LEVEL 4 (Advanced Thinking)
// Task 10: Group by Salary

let emp2 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let out5 = {};

emp2.forEach((x) => {
    if(!out5[x.salary]) {
        out5[x.salary] = [];
    }
    out5[x.salary].push(x.name);
});

console.log(out5);  // 10000: ['A', 'C'],
                    // 50000: ['B']



// Task 11: Flatten Array (without flat)

let arr11 = [1,[2,[3,[4]]]];

while (arr11.some(item => Array.isArray(item))) {
  arr11 = [].concat(...arr11);
}

console.log(arr11);  // [1, 2, 3, 4]



// Task 12: Custom Sort (Descending)

let arr12 = [5,2,9,1];

arr12.sort((a,b) => {
    return b-a;
});

console.log(arr12);  // [9, 5, 2, 1]




// BONUS (Interview Level 🔥)
// Task 13: Find Second Largest

let arr13 = [10, 50, 20, 40];

let firstLargest = -Infinity;
let secoundLarget = -Infinity;

for(let x of arr13){
    if(x>firstLargest){
        secoundLarget = firstLargest;
        firstLargest = x;
    } else if (x > secoundLarget && x !== firstLargest){
        secoundLarget = x;
    }
}

console.log(secoundLarget); // 40



//  Task 14: Count Characters

let str1 = "aabbccdde";
let out7 = {};

for(let x of str1){    
    if(!out7[x]){
        out7[x]=1;
    }else{
        out7[x] += 1;
    }
}

console.log(out7); // {a: 2, b: 2, c: 2, d: 2, e: 1}
  