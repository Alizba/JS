//Scoping
var x = 10;
if (true) {
  let x = 20;
  console.log(x); 
}
console.log(x);

//coercion
console.log(2 + "2");
console.log(2 - "2"); 

//object and equity
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2); 

console.log(typeof NaN);
console.log(NaN === NaN);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);
console.log(3 * "2");
//stack memory
let a = "hello";
let b = a;
b = "world";
console.log(a);
console.log(b);
//heap memory
let z = {};
let y = z;
y.name = "Alizba";
console.log(x.name);

console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});


console.log(parseInt("100px"));
console.log(parseFloat("100.5px"));
console.log(Number("100px"));
