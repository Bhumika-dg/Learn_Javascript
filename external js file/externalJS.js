console.log("Connected with external JS file");
// Single line comment 
// console.log("Wont be displayed");
/* multi 
line 
comment
*/
/* console.log("hey");
console.log("hey");
console.log("hey");
console.log("hey");*/

var a = 1;
var b = 2;

if(a+b>4)
{
    console.log(a+b);
}
else if(a+b<1)
{
    console.log(a+b);
}
else
    console.log("HI");

//Types of foe loop
//1
for(var i=0;i<5;i++){
    console.log(i);   
}

//2
let fruits = ['apple','peach','orange']
fruits.forEach(item => console.log(item));

//3 -- of returns item
for(item of fruits){
    console.log(item);

}
//4 -- in returns index
var n = [1,2,3,4]
for(item in n){
    console.log(item);

}

//operators

/* Unary
1.Increment
2.Decrement
a) postfix : consider value and then update 
b) prefix : first update and then consider the value 
*/

for(item of n){
    console.log(--item);
}

/*Arithmetic operators
add,sub,mul,div
modulus  --returns remainder
exponent (a**b)== pow(a,b)  */

/*Shift operators
1.left
2.right
  */

var num1 = 8,n=2;
console.log(num1<<n);//  8 * (2**2)

console.log(num1>>n);//  8 / (2**2)

/*Relational Operators
==
!=

== -- type coercion(type is changed)  === type coercion not allowed
ex 
+0 == -0 -> true
+0 === -0 -> false

object.is(NaN,NaN)
false
2!="2" -- false
2!=="2" -- true

*/


/* Bitwise Operators
& - 1 if both bits are 1 or 0
| - 1 if either bits is 1 else 0
^ - 1 if both bits are different else 0 (XOR)
~ - changes 1 to 0 and vice versa
*/

/* Logical operators -- checks only first conditon usually
&&
||
!
 /* Assignment & ternary(?:)

 conditon? if true : if false
 */

 //Hoisting-- Allocates memory to the func and var during the crreation phase,before execution

 var favouriteFood="Mango";

 var foodthought = function()
 {
    console.log("OG choice" + favouriteFood); // gives undefined if not defiened already , unlike other languages showing error
    favouriteFood = "sushi";
    console.log("new choice" + favouriteFood);
 }
foodthought();

// to obtain error us let and CONST
var p =2;
console.log(p);
var p = 2; // value cannot be changed once assigned
console.log(p);

//global and block scope
var x = 2
for (let n =1;n<10;n++){
    console.log(n)
}
console.log(x)
console.log(n)

// const keyword
const q=100;

/*data types
1.primitive
2.Non-primitive


1.String
var s="Alex is ${x}"

*/
var age=60;
var s='Alex is ${age}';
console.log(s);
console.log('${age} is the age of Alex');
console.log(typeof(age));
 /*Boolean
 true or false
 numbers are treated as true
 0,null,NaN,undefined,Empty string-false
 null -value is null
 undefined- no value is yet defined

  */
 //Symbol
 /* creating unique properties
 var n= Symbol("foo")
 var y = Symbol("foo")
 n===y -- NO
  */
 /* object -- collection of key value pairs
 
  */
var fruit= {
    "apple":"red",
    "mango":"yellow"
 };
console.log(fruit['apple']);

var obj = {
    name:"ddd",
    roll_no : "76485",
    sing: function()
    {
        console.log('${this.name} sings');
    }
};
console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);
//object creation
/* Object literal  -- {" ": " "}; to create object
New keyword ---*/

// New keyword
let animal = new Object();
animal.name="cat";
animal["color"]="white";
console.log(animal.name);
// JSON.stringify -- converted into strings

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }

// Function is called, the return value will end up in x
let l = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
// JS and html events
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";


