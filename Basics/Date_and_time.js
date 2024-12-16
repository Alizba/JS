//Dates
const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());

//My_created_Date
const My_created_Date = new Date(2025, 1, 27);
console.log(My_created_Date.toDateString());


// Number 
let num1 = 42;
let num2 = 3.14;
let numBig = 1_000_000; 

// Math methods
console.log(Math.round(3.7)); 
console.log(Math.floor(3.7)); 
console.log(Math.ceil(3.1)); 
console.log(Math.max(1, 5, 3)); 
console.log(Math.min(1, 5, 3)); 
console.log(Math.random()); 
console.log(Math.pow(2, 3)); 
console.log(Math.sqrt(16)); 

// Date creation
let now = new Date(); 
let specificDate = new Date('2024-01-01');
let customDate = new Date(2024, 0, 1);

// Date methods
console.log(now.getFullYear()); 
console.log(now.getMonth()); 
console.log(now.getDate()); 
console.log(now.getDay()); 
console.log(now.getTime()); 
console.log(now.toLocaleDateString()); 
console.log(now.toLocaleTimeString()); 