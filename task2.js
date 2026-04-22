// Student Data

let students = [
  { id: 1, name: "Naveen", mark: 85, course: "MERN" },
  { id: 2, name: "John", mark: 45, course: "Python" },
  { id: 3, name: "Priya", mark: 72, course: "Java" },
  { id: 4, name: "Arun", mark: 95, course: "React" },
];


// Task 1: Print All Students

for (let student of students) {
  console.log( `${student.id} ${student.name} ${student.mark} ${student.course}`);
}

/* Output: 1 Naveen 85 MERN
           2 John 45 Python
           3 Priya 72 Java
           4 Arun 95 React  */


// Task 2: Pass / Fail

for (let student of students) {
  if (student.mark >= 50) {
    console.log(`${student.name} - Pass`);
  } else {
    console.log(`${student.name} - Fail`);
  }
}

/* Output: Naveen - Pass
           John - Fail
           Priya - Pass
           Arun - Pass   */


// Task 3: Grade System

for (let student of students) {
  if (student.mark >= 90)
     console.log(`${student.name} - A Grade`);
  else if (student.mark >= 75)
     console.log(`${student.name} - B Grade`);
  else if (student.mark >= 50)
     console.log(`${student.name} - C Grade`);
  else 
     console.log(`${student.name} - Fail`);
}

/* Output: Naveen - B Grade
           John - Fail
           Priya - C Grade
           Arun - A Grade    */


// Task 4: Topper Student

let topper = 0;

for (let i = 1; i < students.length; i++) {
  if (students[i].mark > students[topper].mark) 
    topper = i;
}

console.log(`Topper is ${students[topper].name} - ${students[topper].mark} `);   // Topper is Arun - 95


// Task 5: Course Search

for (let student of students) {
  if (student.course == "React")
    console.log( `${student.id} ${student.name} ${student.mark} ${student.course}`); // 4 Arun 95 React
}


//  Task 6: Add New Student

students[4] = { id: 5, name: "Rahul", mark: 88, course: "Node JS" };

for (let student of students) {
  console.log(`${student.id} ${student.name} ${student.mark} ${student.course}`);
}

/* Output: 1 Naveen 85 MERN
           2 John 45 Python
           3 Priya 72 Java
           4 Arun 95 React
           5 Rahul 88 Node JS    */


// Task 7: Attendance System

let status = "present";

switch (status) {
  case "present":
    console.log("Welcome");       
    break;
  case "absent":
    console.log("Mark Absent");
    break;
  case "leave":
    console.log("Approved Leave");
    break;
  default:
    console.log("Invalid status");
}

// Output : Welcome



// Task 8: Login System

let username = "admin";
let password = "1234";

if(username=="admin" && password=="1234")
    console.log('Login Success');
else
    console.log('Invalid User');
    
// output: Login Success
