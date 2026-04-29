// Level 1 – Functions Basics
// Task 1: Student Form Function

function  studentForm(name, age, course){
    console.log(`Name: ${name}`);         // Name: Mohan
    console.log(`Age: ${age}`);           // Age: 23
    console.log(`Course: ${course}`);     // Course: Java
}

studentForm('Mohan',23,'Java');


// Task 2: Calculator Function

function calc(a,b){
    console.log("Addition - "+ (a+b));        // Addition - 15
    console.log("Subtraction - "+ (a-b));     // Subtraction - 5
    console.log("Multiplication - "+ (a*b));  // Multiplication - 50
}

calc(10,5);


// Task 3: Reusable Greeting

function greeting(name){
    console.log(`Hello ${name}`);
}

greeting('Mohan Raj');  // Hello Mohan Raj
greeting('Kamal');      // Hello Kamal
greeting('Sai');        // Hello Sai



// Level 2 – Return & Scope
// Task 4: Return Value

let square = (num) => {
    return num*num;
}

let sq = square(5);
console.log(sq);  // 25


// Task 5: Scope Check

let scopeCheck = () => {
    let secret = "javascript";
}

// console.log(secret);  // ReferenceError: secret is not defined ,Why means let is block , so we not able to print outside of the block.



// Level 3 – Spread / Rest
// Task 6: Merge Arrays

let boys = ["car","bike"];
let girls = ["doll","teddy"];

let both = [...boys,...girls];

console.log(both);    // ['car', 'bike', 'doll', 'teddy']


// Task 7: Unlimited Numbers

function sumAll(...nums){
    let sum = 0;
    for(let x of nums){
        sum+= x;
    }
    console.log(sum);
}

sumAll(10,20,30,40);   // 100



// Level 4 – Destructuring
// Task 8: Array Destructuring

let colors = ["red","green","blue"];

let [c1,c2,c3] = colors;

console.log(c1);  // red
console.log(c2);  // green
console.log(c3);  // blue


// Task 9: Object Destructuring

let emp = {
 name:"Mohan",
 role:"Developer",
 salary:"5LPA"
}

let {name,role,salary} = emp;

console.log(`${name} ${role}`);  // Mohan Developer



// Level 5 – Real-Time Logic
// Task 10: Offer Generator

function* generator(){
    yield "10% cashback",
    yield "20% cashback",
    yield "50% cashback",
    yield "Try again"
}

let val = generator();

console.log(val.next().value);   // 10% cashback
console.log(val.next().value);   // 20% cashback
console.log(val.next().value);   // 50% cashback
console.log(val.next().value);   // Try again
    
if(val.next().done){
    console.log("No more Offers");   // No more Offers
}



// Level 6 – Advanced
// Task 11: Curry Function

function add(a){
    return function bdd(b){
        return function cdd(c){
             console.log(a+b+c);
        }
    }
}

add(10)(20)(30);   // 60


// Task 12: Student Marks Analyzer

function mark(...nums){
    let total = 0;
    for(let x of nums){
        total+= x;
    }
    let avg = total/nums.length;
    console.log(`Total = ${total}`);     // Total = 300  
    console.log(`Average = ${avg}`);     // Average = 75
}

mark(80,90,70,60);



// 🏆 Challenge Task (Real Company Level)

function register(name, role, ...skills){
    console.log(`Name: ${name}`);          // Name: Mohan Raj
    console.log(`Role: ${role}`);          // Role: Full satck
    console.log(`Skills:`,...skills);      // Skills: HTML CSS JS React Java SQL Spring boot
}

register("Mohan Raj","Full satck","HTML","CSS","JS","React","Java","SQL","Spring boot");

