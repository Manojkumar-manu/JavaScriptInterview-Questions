//! 1.How to define a class with properties and methods in Javascript.
//! Ans: A class declared with a name which acts as its identifier we can use the name to create new objects using the keyword new.


// class Car{
//     constructor(model, name) {
//         this.model = model;
//         this.name = name;
//     }
//     start() {
//         console.log(`Name of the car ${this.name}`)
//         console.log(`Name of the model ${this.model}`)
//     }
// }
// bmw = new Car(620, "sports edition")
// bmw.start()

//! 2.How to Implement class inheritance in Javascript

// class Car{
//     constructor(name,model) {
//         this.name = name;
//         this.model = model;
//     }
//     start() {
//         console.log(this.model);
//     }
//     end() {
//         console.log("Car stopped");
//     }
// }

// class ElectricCar extends Car{
//     dashboard() {
//         console.log("Child Method");
//     }
//     start() {
//         this.dashboard();
//         super.start();
//         super.end();
//     }
// }
// evCar = new ElectricCar(620, "sports edition");
// evCar.start();

//! 3.How to find duplicate elements in a given array

// let duplicateArray = [10, 20, 6, 10, 30, 40, 20,6];

// let duplicated =duplicateArray.filter((ele,ind,arr)=>arr.indexOf(ele) !==ind)

// console.log(duplicated)

//! 4. How to find the count of duplicates in an array

// let month = ["jan", "feb", "feb", "june", "july", "june", "july", "sep"];

// let duplicateCount = month.reduce((obj, month) => {
//     if (obj[month] == undefined) {
//         obj[month] = 1;
//         return obj;
//     }
//     else {
//         obj[month]++;
//         return obj
//     }
// }, {})
// console.log(duplicateCount)

//! 5. How to check if a given number is an integer

// let number = 10.5
// console.log(isNaN(number));//false
// console.log(!isNaN(number));//true

// let string = "ABC"
// console.log(isNaN(string));//true


//! 6. Explain the difference between Object.freeze() vs const.

// const name = "Manu";
// name = "Raj";
// console.log(name);//Uncaught TypeError: Assignment to constant variable.

// let person = {
//     name:"Anil",
// }
// Object.freeze(person);
// person.name = "Manu";
// console.log(person);//{name: 'Anil'}

//! 7. How to sort a Number Array

// let arr = [10, 20, 2, 3, 1, 15, 9, 10];

// console.log(arr.sort());// [1, 10, 10, 15, 2, 20, 3, 9]

// let sortArray = arr.sort((a, b) => {
//     return a - b;
// })
// console.log(sortArray);// [1, 2, 3, 9, 10, 10, 15, 20]


//! 8. How to sort a given array of strings

// let arr = ["Jan", "Feb", "March", "April", "May", "June", "July"]
// console.log(arr.sort());

//! 9. How to find the unique values in an array

// let arr = [10, 20, 10, 30, 40, 2, 5, 2, 30];

// let uniqueArray = arr.filter((ele, ind, arr) => arr.indexOf(ele) == ind);

// console.log(uniqueArray);

//! 10. How to find unique values from an Array in sorted order

// let arr = [10, 20, 30, 10, 20, 40, 11, 21];
// let uniqueValues = arr.filter((ele, ind, arr) => arr.indexOf(ele) == ind);
// console.log(uniqueValues);// [10, 20, 30, 40, 11, 21]
// let sortValues = uniqueValues.sort((a, b) => {
//     return a - b;
// })
// console.log(sortValues);// [10, 11, 20, 21, 30, 40]

//! 11. How to find the maximum value in a numbered array

// let number = [10, 20, 30, 40, 50, 90];

// function FindMaxValue(arr) {
//     return arr.reduce(function(prev, curr) {
//         return prev > curr ? prev : curr;
//     })
// }
// console.log(FindMaxValue(number));

//! 12. Spread Operator

// let arr1 = [1, 2, 3];
// let arr2 = [5, 6];
// console.log([...arr1, ...arr2]);//[1, 2, 3, 5, 6, 7]

// //!or===

// function test(a, b, c,e,f,) {
//     console.log(a);//5
//     console.log(b);//6
//     // console.log(c);//7
//     if (c) {
//         console.log(c);
//     }
// }
// test(...arr2)

//! 13 What are the different data types in javascript

// Number, Boolean, String, Null, Undefined, BigInt, Symbol

//! 14 How can you create an Object in JavaScript

// let obj = {
//     name: "Manoj",
//     id:123,
// }

// let obj1 = {
//     name: "Manu",
//     id: 22,
//     technologies: ["html", "css", "js", "react"],
//     preferences: {
//         name: "Raj",
//         id:12,
//     }
// }
// console.log(obj1);


//! 15. What is the purpose of this operator in javascript.

//! 16. What is typeof operator in javascript

// var a = 10;//NUmber
// var a = "10";//String
// var a = null;//Null is an object
// var a = true;//boolean
// var a;//undefined
// console.log(typeof (a));

//! 17. What is d/f b/w "==" and "===" Operators

// let a = 10;
// let b = "10";
// // if (a == b) {
// //     console.log("Values are Matching");//!
// // } else {
// //     console.log("Values are not matching");
// // }
// if (a === b) {
//   console.log("Values are Matching");
// } else {
//   console.log("Values are not matching");//!
// }

//! 18. What would be the result of 13+6+"2"

// console.log(13 + 6 + "2");//192
// console.log(13 + 6 + 2);//21

//! 19. What do you mean by null in javascript

// let x = null;
// console.log(typeof (x));//object
// console.log(x);//null

//! 20. How do detect clients operating system

// console.log(navigator.language);//en-US
// console.log(navigator.onLine);//true
// console.log(navigator.platform);//Win32

//! 21. Of what Javascript type is an Array

// let a = [10, 20, 30];
// let b = ["10", "29"];
// let c={name:"Manu",id:12}
// console.log(typeof (a));//object
// console.log(typeof (b));//object
// console.log(typeof (c));//object

//! 22  What property tells you the length of a JAvascript array

// let a = [10, 20, 30];
// let b = [1, 2, 3, 3, 4, 5];

// console.log(a.length);//3
// console.log(b.length);//6

//! 23 What does array.shift() method returns

// let a = [10, 20, 30, 40];
// console.log(a.shift());//[10]
// console.log(a);//[10,20,30,40]

//! 24 Explain Array.push() method
// let a = [10, 20, 30, 40];
// console.log(a.push(40, 50));
// console.log(a);// [10, 20, 30, 40, 40, 50]

//! 25  Explain the Array.pop() method

// let a = [10, 20, 30, 40];
// console.log(a.pop());//40
// console.log(a);// [10, 20, 30]

//! 26 Explain the Array.unshift() method

// let a = [10, 20, 30, 40];
// console.log(a.unshift(50));//5
// console.log(a);//[50, 10, 20, 30, 40]
// console.log(a.length);//5

//! 27 Explain the template literals in ES6

// let a = 'Manu';
// let b = 'Kumar'
// let c = `${a}${b}`;
// console.log(c);//ManuKumar

//! 28 What is the output of the following code sample

// var y = 1;
// if (function f() { }) {
//     y += typeof typeof f;//1string
//      y += typeof f;//1undefined
// }
// console.log(y);

//! 29 What is NaN ? What is its type ?

// console.log(typeof NaN);//Number
// console.log(typeof "number");//string
// console.log(typeof NaN === "number");//true
// console.log(typeof (NaN === "number"));//boolean
// console.log(NaN === "number");//false
// console.log(NaN == NaN);//false

//! 30 What is the output of the following code sample

// //The below 2 functions return the same output;

// function a() {
//     return {
//         name:"Manu"
//     }
// }
// function b() {
//     return {
//         name: "Manu"
//     }
// }
// console.log(a());//Manu
// console.log(b());//Manu

// //!or======

// function a() {
//     return
//     {
//         name:"Manu"
//     }
// }
// function b() {
//     return
//     {
//         name: "Manu"
//     }
// }
// console.log(a());//undefined
// console.log(b());//undefined

//! 31 What will the code below output

// console.log(false == '0');//true
// console.log(false === '0');//false

//! 32 What's the output of below code

// console.log(1 < 2 < 3);//true
// console.log(3 > 2 > 1);//false

//! 33. How do you clone an object

// let test = {
//     name: "Anil",
//     id: 12,
//     salary:1000,
// }
// let task = {
//     completed:"yes",
// }
// console.log(test)//{name: 'Anil', id: 12, salary: 1000}

// let testclone = Object.assign({}, test);
// console.log(testclone)//{name: 'Anil', id: 12, salary: 1000}

// let testclone1 = Object.assign(task, test);
// console.log(testclone1);//{completed: 'yes', name: 'Anil', id: 12, salary: 1000}

//! 34. Which keyword are used to handle the exceptions

// try {
    
// } catch (error) {
    
// }
// finally {
    
// }

//! 35. What is variable typing

// let i = 2;//integer
// i = "Manu"//string
// i = true;//boolean
// console.log(i);

//! 36. How are object properties are assigned

// let obj = {}

// obj.name = "Anil";
// obj["lastname"] = "Kumar";

// console.log(obj);//{name: 'Anil', lastname: 'Kumar'}

//! 37. Explain window.onload and onDocumentReady

//! 38. Define Event bubbling

// eventBubbling: false;

//! 39. Is JavaScript is case sensitive

// Because inbuilt methods in Javascript
// getElementById
// getElementByClassName...... so theseare all in camel cases so the js is case insensitive

//! 40. What boolean operators can be used in javascript

//OPerators which always result in either true or false are called as Boolean operators

//! 41. What is the role of break and continue statements

// function test() {
//     for (let i = 0; i < 10; i++){
//         if (i == 5) {
//             break;
//         }
//         // console.log(i)//0 1 2 3 4
//         if (i == 4) {
//             continue
//         }
//         console.log(i);// 0 1 2 3
//     }
// }
// test();

//! 42. Define unescape() and escape() functions

// console.log(escape("Hello-How are-you what's going on?"));//Hello-How%20are-you%20what%27s%20going%20on%3F

// console.log(unescape("Hello-How%20are-you%20what%27s%20going%20on%3F"));

//! 43. What is the length of the array after deletion

let arr = ['a', 'b', 'c', 'd', 'f']
delete arr[2];
console.log(arr.length);//5
 









