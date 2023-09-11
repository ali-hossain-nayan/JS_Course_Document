// let c = 10;
// let a=3;
// let b=9;
// function timesTen(x,y,z){
// return x+y+z
// }
// let d = timesTen(c,b,a);
// console.log(d);
// const multi = (a) =>{
//     return a * 22
// }
// // let a = 23

// console.log(multi(23))

// let c = 10;
// let a=3;
// let b=9;
// function timesTen(x,y,z){
// return x+y+z
// }
// let d = timesTen(c,b,a);
// console.log(d);

//excution system
// function first() {
//     setTimeout(() => {
//      console.log("It is the first function");
//     function second() {
//      console.log("It is the second function");
//     }
//     second()
//     }, 3000);
//     function third(){
//      console.log("It is the third function")
//     }
//     third()
//     }
//     first();
//     console.log("It is GEC");

//Scope only use for function
//Global variable

// var globalVariable = "I am global variable.";
// console.log(globalVariable); // I am global variable.

// var myFunc = function () {
// console.log(globalVariable);
// };

// myFunc(); // I am global variable.

//Local variable
// var globalVariable = 'I am global variable.';

// var myFunc = function () {
// var localVariable = "I am local variable.";

// console.log(globalVariable);
// console.log(localVariable);
// };

// myFunc();
// // I am global variable.
// // I am local variable.

// console.log(localVariable); // undefined

// Lexical Scoping
//Its like you can access your parent function data but parent function cant
//access child function data

// function outerFunc(a) {
//     var outerFuncVariable = 'Hi there, I am outer ' + a;

//     console.log(outerFuncVariable); // Hi there, I am outer function variable

//     function innerFunc() {
//     var innerFuncVariable = '“Hi there, I am inner ' + a;
//     console.log(innerFuncVariable); // Hi there, I am inner function variable
//     }

//     innerFunc();

//     console.log(innerFuncVariable); // undefined
//     }

//     outerFunc("“function variable”");

// let animal="‘dog’";
// console.log(animal);
// if(true){
//  let animal = "cat";
//  console.log(animal);
// }
// console.log(animal);

//Js hoisting. It means before code excution you can take your variable and function
//exact right destination

// function hoisting() {
//     console.log(message);
//     var message="‘Hi there, We are learning Hoisting!’"
//     }

//     hoisting(); // Output: undefined

//variable hoisting
// console.log(hoistingIntro); // Output: undefined

// var hoistingIntro = "“Hi there, I am a string one.”";

//function hoisting there is no problem with that u can call function anywhere
//its not like a variable
// hoistedFunc(); // Hoisted

// function hoistedFunc() {
// console.log("“Hoisted.”");
// }

// var hoistingIntro = "“Hi there, I am a string one.”";

// function hoistingFunc() {
// console.log(hoistingIntro);
// var hoistingIntro = "“Hi there, I am a string two”";
// console.log(hoistingIntro);
// }

// hoistingFunc();

//Closure is not a function .Its a character of a function where its remember its

// lexical scope variable after the execution.

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// let addTen = add(10);
// let addSeven = addTen(7);

// console.log(addSeven); // 17

//কি হচ্ছে এসব?? ঠিক আছে, চলেন দেখি কোডগুলোকে ভেঙ্গেঃ-

// ১। যখন add ফাংশনটি কল হয় এটি আরেকটি ফাংশনকে return করে।
// ২। ঐ ফাংশনটির এক্সিকিউশন শেষ হয়ে যায় এবং মনে রাখে ঐ সময় তার প্যারামিটার a এর ভ্যালু কি ছিল।
// ৩। যখন addTen ভেরিয়েবলে add ফাংশনকে এসাইন করা হয়। এটি সব সময় মনে রাখবে a এর ভ্যালু কি ছিল যখন এটিকে ইনিশিয়ালি কল করা হয়েছিল।
// ৪। উপরের addTen ভেরিয়েবল একটি ফাংশনকে বোঝায় যেটি সব সময় ভ্যালু ১০ যোগ করবে যা পাঠানো হয়েছিল।
// ৫। তার মানে হল যখন addTen কে কল করা হয় ৭ ভ্যালু দিয়ে, এটি ১০ এর সাথে ৭ যোগ করবে এবং ১৭ রিটার্ন করবে।

// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), 1000);
//     }

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), 1000);
//     }

// const multiply = (x) => {
//     return function (y) {
//     return x * y;
//     };
//     };
//     let multiply10 = multiply(10);
//     let multiplyFive = multiply10(5);
//     console.log(multiplyFive);

//কলব্যাক ফাংশন কি?
//  সহজ কথায়, কলব্যাক ফাংশন হচ্ছে এমন একটি ফাংশন যেটি অন্য একটি ফাংশনে আর্গুমেন্ট হিসাবে পাস করা ফাংশন,
//  যেটি কোন কাজ সম্পন্ন করার জন্যে আউটার ফাংশনের ভিতরে ইনভোক হয়

// হাইয়ার অর্ডার ফাংশন কি?
// যে ফাংশনে অন্য কোন ফাংশনকে আর্গুমেন্ট হিসাবে পাস করা হয় বা কোন ফাংশন
// অন্য কোন ফাংশনকে রিটার্ন করে তাকে হাইয়ার অর্ডার ফাংশন বলা হয়
// function modifyBy2(arr) {
//     let output = [];

//     for(let i = 0; i < arr.length; i++) {
//      output.push(arr[i] + 2);
//     }

//     return output;
//     }

//     const newArr = modifyBy2([1,2,3,4,5,6]);
//     console.log(newArr); // [3, 4, 5, 6, 7, 8]

// "এখন যদি আমরা বিয়োগ বা ভাগ করতে চাই? তাহলে আমাদেরকে আরও দুটি ফাংশন লিখতে হবে তাই না?
//  ব্যাপারটা তাহলে কি ভাল কিছু হচ্ছে? কোড রিপিটেশন হয়ে যাচ্ছে। একটি বিষয় লক্ষ্য করেন আমাদের লেখা দুটি ফাংশনেই
//   শুধু অপারেশনগুলা ছাড়া একই কোড লিখেছি। আমরা যদি এমন কিছু করতে পারি যে আমাদের ফাংশনে যোগ, বিয়োগ যে
//    কাজই করুক না কেন সেটি আমরা বলে দিবো, তাহলে কেমন হয়? এখন আমরা সে কাজটাই করবো। তার জন্যে আমাদেরকে আমাদের
//  ফাংশনের সাথে আরেকটি আর্গুমেন্ট পাস করতে হবে।
//   যেটি আসলে আমাদের অপারেশনটা হ্যান্ডেল করবে।"

// function modifyArray(arr, callback) {
//     let output = [];

//     for(let i = 0; i < arr.length; i++) {
//      output.push(callback(arr[i]));
//     }

//     return output;
//     }

//     function addBy2(elem) {
//     return elem + 2;
//     }

//     function multifyBy2(elem) {
//     return elem * 2;
//     }

//     const additionArr = modifyArray([1,2,3,4,5,6], addBy2);
//     const multiArr = modifyArray([1,2,3,4,5,6], multifyBy2);

//     console.log(additionArr); // [3, 4, 5, 6, 7, 8]
//     console.log(multiArr); // [2, 4, 6, 8, 10, 12]

//this keyword
// function myFunc() {
//     console.log(this);
//     }

//     myFunc();

//     একটা ব্যাপার সব সময় মাথায় রাখবেন যে “this” এর ভ্যালু কি হবে সেটা নির্ভর করে কোথায় এবং কিভাবে কল হচ্ছে
//     তার উপর ভিত্তি করে। উপরের কোডে myFunc() কে কল করতেছে window অবজেক্ট। কারণ ব্রাউজারে সব কিছু বাই ডিফল্ট window অবজেক্টের আন্ডারে রান হয়।
//     তার মানে হচ্ছে, যে যার মাধ্যমে কল হবে “this” তাকে দেখাবে আউটপুট হিসাবে।
//   যেহেতু myFunc() কে window কল করতেছে তাই myFunc() এর ভিতরে থাকা “this” – window এর সব ভ্যালুকে আউটপুট হিসাবে দেখাচ্ছে।

// Construction this
// let Person = function(fName, lName) {
//     this.fName = fName;
//     this.lName = lName;
//     this.sayInfo = function() {
//     return console.log("“Hi there, Welcome to “" + this.fName +" ” “" + this.lName);
//     }
//     };

//     let person1 = new Person("“Shahan’s”, “Diary”");

//     person1.sayInfo(); // Hi there, Welcome to Shahan’s Diary

//js two types datatypes
//primitive => strings,numbers,boolean,null,undefined,symbol
// প্রমিটিভ ডাটা immutable বা অপরিবর্তনীয় ডাটা টাইপ হিসাবে পরিচিত। কারণ এই ডাটা একবার তৈরি হয়ে গেলে এটি পরিবর্তন করার কোন পথ নেই।

// let str1 = "“Hi there, I am a string!”";
// console.log(str1[1]); // “i”

// str1[1] =" “e”";
// console.log(str1); // “Hi there, I am a string!”

// আপনি হাজার বার চাইলেও স্ট্রিং এর ভ্যালু পরিবর্তন করতে পারবেন না। কারণ স্ট্রিং একটি immutable বা অপরিবর্তনীয় ডাটা।
// একটি কথা মনে রাখবেন যদি স্ট্রিংকে কোন ভেরিয়েবলে অ্যাসাইন করে ফেলেন এবং অ্যাসাইন করার পর স্ট্রিংকে মডিফাই করতে চান,
// তাহলে আপনি একটি নতুন স্ট্রিং পাবেন। যেমন- .toUpperCase(), .slice(), .trim() ইত্যাদি।

// let str1 = "“Hi there, I am a string!”";
// let newStr = str1.toUpperCase();

// console.log(newStr); // HI THERE, I AM A STRING!
// console.log(str1); //"Hi there, I am a string!"

//প্রিমিটিভ ডাটা টাইপগুলো একে অপরের সাথে তাদের ভ্যালু দ্বারা তুলনা করে।
// let str1 = "“Hi there, I am a string!”";
// let str2 = "“Hi there, I am a string!”";

// console.log(str1 == str2); // true

// let num1 = 7;
// let num2 = 7;

// console.log(num1 == num2); // true

//প্রিমিটিভ টাইপগুলো সব সময় তাদের ভ্যালু পাস করে। যখন আমরা কোন প্রিমিটিভ ডাটা টাইপকে অন্য কোন ভেরিয়েবলে অ্যাসাইন করি, তখন তার ভ্যালু কপি হয়ে নতুন ভেরিয়েবলে অ্যাসাইন হয়।

// let num1 = 7;
// let num2 = num1;

// console.log(num1); // 7
// console.log(num2); // 7

// num2 = 8;

// console.log(num1); // 7
// console.log(num2); // 8

//Non-primitive => array,object,function
// নন-প্রিমিটিভ ডাটা mutable বা পরিবর্তনীয়। কারণ একটি নন-প্রিমিটিভ ডাটা তৈরি হয়ে যাওয়ার পরেও তার ভ্যালু পরিবর্তন হতে পারে।
// আমরা যখন কোন নন-প্রিমিটিভ ডাটা তৈরি করি, তখন সেই ডাটার জন্যে মেমোরিতে
// একটা অ্যাড্রেস তৈরি হয় এবং সেই অ্যাড্রেসটাকে মনে রেখে কোন এক জায়গায় ভ্যালুগুলোকে স্ট্রোর করে রাখে।

// let arr1 = ["“JavaScript”, “React”, “Redux”, “React-Redux”"];
// let arr2 = arr1;

// console.log(arr1); // [“JavaScript”, “React”, “Redux”, “React-Redux”]
// console.log(arr2); // [“JavaScript”, “React”, “Redux”, “React-Redux”]

// arr2[3] =" “Redux-Toolkit”";
// console.log(arr1); // [“JavaScript”, “React”, “Redux”, “Redux-Toolkit”]
// console.log(arr2); // [“JavaScript”, “React”, “Redux”, “Redux-Toolkit”]

// নন-প্রিমিটিভ বা রেফারেন্স ডাটাগুলো সব সময় তাদের রেফারেন্স পাস করে। যখন আমরা কোন রেফারেন্স ডাটাকে অন্য কোন ভেরিয়েবলে অ্যাসাইন করি,
// তখন তার রেফারেন্স কপি হয়। মানে arr1 কে যখন আমরা arr2 তে অ্যাসাইন করি তখন তার রেফারেন্স বা অ্যাড্রেসটাকে কপি করে বা মনে রাখে তার ভ্যালুকে না।
//  তাই দুইটা ভেরিয়েবলের অ্যাড্রেস একই থাকে।
// তাই যখন আমরা কোন একটি ভেরিয়েবলের ভ্যালু পরিবর্তন করি, তখন দুইটা ভেরিয়েবলেরই ভ্যালু পরিবর্তন হয়ে যায়।
// let obj1 = {
//     name: "‘JavaScript"
//    };
//    let obj2 = obj1;

//    console.log(`${obj1.name}`); // JavaScript
//    console.log(`${obj2.name}`); // JavaScript

//     obj2.name = "“React”";

//    console.log(`${obj1.name}`); // React
//    console.log(`${obj2.name}`); // React

//Call By Value or primitives types এর উদাহরণ
// function multiplyByTen(value) {
//     value = value * 10;
//    }
//    var number = 7;
//    console.log("“Before call: number = “" + number); // 7
//    multiplyByTen(number);
//    console.log("“After call: number = “" + number); // 7

// function printGreeting(greetName) {
//     greetName = "“Hello, “" + greetName;
//    console.log("“New value: “" + greetName); // Output: Hello, Anik
//    }
//    var greetName =" ‘Anik’";
//    printGreeting(greetName);
//    console.log("“Old value: “" + greetName); // Output: Anik

//Call By Reference of non-primitives types এর উদাহর
// function passByReference(person) {
//     person.name = "“Alex”";
//    }
//    var alam = { name: "“Alam”" };
//    console.log(alam.name);
//    // Alam
//    passByReference(alam);
//    console.log(alam.name);
//    // Alex

// function modifyObj(person) {
//     person.name = "‘Fahim’";
//     person.age = 26;
//    }
//    var person = {
//     name:" ‘Anik’," ,
//     age: 25
//    };
//    console.log("Initial name value: “" + person.name); // Initial name value: Anik
//    modifyObj(person);
//    console.log("“Updated name value: “" + person.name); // Udated name value: Fahim

// মনে করুন, আমি Google Doc এ একটি ফাইল খুলেছি এবং সেটাতে আপনাকেও এডিট করার পারমিশন দিয়েছি।
//  এখন ফাইলটিতে আপনি বা আমি যেই কোন কিছু লিখি বা পরিবর্তন করি না কেন সেটা আমাদের দুজনের দিক থেকেই পরিবর্তন হবে।
//  বিষয়টি এমন হবে না যে আপনি দেখলে এক রকম হবে আর আমি দেখলে অন্য রকম হবে। এই বিষয়টি ঠিক Call by reference এর মতো।
//  আবার অন্যদিকে, আমার কাছে থাকা একটি ফাইলের কপি আমি আপনাকে দিলাম অর্থাৎ কপি মূলত দুটি, একটি আপনার আর অন্যটি আমার।
//   সুতরাং আমি যদি আমার ফাইলে কোন পরিবর্তন করি তবে সেটি শুধুমাত্র আমার ফাইলেই পরিবর্তন হবে, আপনারটা যেমন ছিল বা আপনি যেভাবে পরিবর্তন করেছেন সেভাবেই থাকবে।
//  আমাদের কারো পরিবর্তন একে অন্যের উপর কোন প্রভাব ফেলবে না। এই বিষয়টি Call by value এর মতো।

// IIFE – এর পূর্ণরুপ হচ্ছে Immediately Invoked Function Expression। IIFE হল একটি ফাংশন যা
//একটি এক্সপ্রেশন হিসাবে ডিক্লেয়ার এবং ডিক্লেয়ারেশনের পরপরই এক্সিকিউট করা হয়।
//normal way function
// (function () {
//     // code goes here…
//     })();

//     // OR arro fat function
//     (() => {
//         // code goes here…
//         })();

//         var math = (function () {
//             function add(a, b) {
//             return a + b;
//             }

//             function sub(a, b) {
//             return a - b;
//             }

//             function mult(a, b) {
//             return a * b;
//             }

//             function div(a, b) {
//             return a / b;
//             }

//             return {
//              add: add,
//              sub: sub,
//              mult: mult,
//              div: div,
//             };
// })();

//IIFE always detain conflict from the same variable problems .if we use IIFE it can help us to write even same type of variable

// (function greetings() {
//     let message = "“Hello, I am Sam Smith”";
//     console.log(message);
//    }());
//    let message = "hey"

//Pure Function in JS
//জাভাস্ক্রিপ্টে ফাংশন হল প্রথম শ্রেণীর নাগরিক। জাভাস্ক্রিপ্টে শুধু কোন ফাংশনই তৈরি করা যায় তাই নয়, ফাংশনটিকে Modify করতে
// পারা যায়, একটি ফাংশনকে অন্য একটি ফাংশনের প্যারামিটার হিসেবে পাঠানো যায় এমনকি ফাংশনকে
// অন্য কোন ফাংশন থেকে returnও করতে পারা যায়। শুধু তাই নয়, আমরা কোন ভেরিয়েবলের মধ্যে কোন
// ফাংশনকে Assign-ও করতে পারি। মূল কথা হল, ফাংশন ব্যাতিত জাভাস্ক্রিপ্টে কাজের উপযোগী কোন কোড লিখা প্রায় অসম্ভব

// একটি Pure ফাংশনের অবশ্যই নিচের বৈশিষ্ট্যগুলো থাকতে হবে।

// সর্বদা নিজের আর্গুমেন্টের উপর নির্ভর করবে।
// ফাংশনটি নিজের Scope এর বাইরে কোন ভারিয়েবলের মান পরিবর্তন করবে না।
// ফাংশনটি কোন side effects তৈরি করবে না। always fixed output

// function pure() {
//     let val1 = 6;
//     let val2 = 4;
//     return val1 * val2;
//     }
//     let pro = pure();
//     console.log(pro)//pure function bcz all the elements inside of the function

// //Not pure bcz var  declare outside the function
//     let val1 = 6;
//     let val2 = 4;
//     function pure() {
//     return val1 * val2;
//     }
//     let p = pure();
//     console.log(p)

//USE Strict
// প্রায় সব ল্যাংগুয়েজেরই নিজস্ব একটা ডকুমেন্ট আছে। যার মাধ্যমে আমরা ঐ ল্যাংগুয়েজের ভাল কিংবা খারাপ দিক অথবা
//  ভাল প্র্যাকটিস এবং খারাপ প্র্যাকটিস সম্পর্কে জানতে পারি। কিন্তু জাভাস্ক্রিপ্টের এই রকম কোন কিছু নেই। যে কারণে এখানে ভুলটা বেশি
//  হবার সুযোগ থাকে এবং সবাই নিজের মত করে কোড লিখে সে ভুলটা করেও বটে। যেগুলো আসলে ভুল সিনট্যাক্স এবং আনসিকিউর কোড।
//   কিন্তু আমরা যখন স্ট্রিক্ট মোড ব্যবহার করি
// , তখন জাভাস্ক্রিপ্ট কোড কোন ভুল সিনট্যাক্স ছাড়া এক্সিকিউট করে এবং কোড আরও সিকিউর করে
//basically code debug needs to take use strict .without it sometime not code error show js

// গ্লোবাল ডিক্লারেশনঃ
// // যখন আমরা গ্লোবাল ডিক্লারেশন হিসাবে “use strict” ব্যবহার করি, তখন ঐ পেজের সমস্ত জাভাস্ক্রিপ্ট কোড স্ট্রিক মোডে এক্সিকিউট হয়।
// "“use strict”";

// console.log("“Hello JavaScript”");

// ফাংশন ডিক্লারেশনঃ
// যখন আমরা ফাংশন ডিক্লারেশন হিসাবে “use strict” ব্যবহার করি, তখন ফাংশনের ভিতরের সমস্ত জাভাস্ক্রিপ্ট কোড স্ট্রিক মোডে এক্সিকিউট হয়।
// ফাংশনের বাহিরে সব কোড নর্মাল মোডে এক্সিকিউট হয়।

// (function() {
//     "“use strict”;"
//     console.log("“Hello JavaScript”");
//     })();

// //Call() মেথডঃ
// Call() মেথড প্রথম প্যারামিটার হিসাবে “this” এর ভ্যালু সেট করে।
//  তারপর যে প্যারামিটারগুলো থাকবে সেগুলো হবে ফাংশনের প্যারামিটার। Call() মেথড ইনডিভিজুয়াল প্যারামিটার নেয়
// let person = {
//     name:" “Saroar Hossain Shahan”",
//    };

//    let getInfo =  function(id)  {
//    return `Welcome ${this.name}, Your roll number is ${id}.`;
//    };

//    console.log(getInfo.call(person, 99)); // Welcome Saroar Hossain Shahan, Your roll number is 99.

// উপরের কোডে আমরা দেখতে পাচ্ছি যে, getInfo() এর সাথে Call() মেথড ব্যবহার করা হয়েছে এবং Call() মেথড তার প্রথম প্যারামিটার
//  হিসাবে “this” ভ্যালু সেট করে, যেটি হচ্ছে person অবজেক্ট। তারপরের প্যারামিটারগুলো হচ্ছে যে ফাংশনের সাথে কল হচ্ছে তার আর্গুমেন্টস।
// চলুন আরেকটি উদাহরণ দেখি যেটি আপনাদের রিয়েল লাইফ প্রোজেক্টে কাজে দিতে পারে।

// function Person(fname,lName,age){
//     this.firstName = fname
//     this.lastName = lName
//     this.age = age
// }
// function Student (fName,lName,age,roll,section){

//     this.firstName = fName
//     this.lastName = lName
//     this.age = age
//     this.roll = roll
//     this.section = section
// }

// let std1 = new Student("Ali Hossain",'Nayan',23,88,"E")
// console.log(std1)

//এখন একটি বিষয় লক্ষ্য করুন যে, আমাদের Person ক্লাসে যে কয়টা প্রোপার্টি আছে একই প্রোপার্টিগুলো আমাদের Student ক্লাসেও আছে।
// আচ্ছা এখন এমন যদি হত যে, Person ক্লাসের সব কয়টা প্রোপার্টি আমাদের Student ক্লাসের জন্যেও কাজ করবে। তাহলে ব্যাপারটা অনেক মজার হত তাই না?
//  আচ্ছা দেখি কোন মতে Person ক্লাসের প্রোপার্টিগুলোকে আপনাদের জন্যে ধার করা যায় কিনা।

// function Person(fName,lName,age){
//     this.firstName = fName
//     this.lastName = lName
//     this.age = age
// }
// function Student(fName,lName,age,roll,section){
//     Person.call(this,fName,lName,age,roll,section)
//     this.roll = roll
//     this.section = section
// }

// let std1 = new Student("Ali Hossain ",'Nayan',23,99,'E')
// console.log(std1)

// আমাদের অনেক কোড কমে গেল। আউটপুট দেখেন সব কিছু আগের মতই আছে

// Apply() মেথডঃ
// Apply() মেথড এবং Call() মেথডের মাঝে বিশেষ কোন পার্থক্য নেই। দুটাই ফাংশনকে ইমিডিয়েটলি ইনভোক করে এবং Apply() মেথড আর্গুমেন্টস হিসাবে একটা Array নেয়।

// let person = {
//     name: "“Saroar Hossain Shahan”",
//    };

//    let getInfo = function (id) {
//    return `Welcome ${this.name}, Your roll number is ${id}.`;
//    };

//    console.log(getInfo.call(person, [99])); // Welcome Saroar Hossain Shahan, Your roll number is 99.

//    function Person(fName, lName, age) {
//     this._firstName = fName;
//     this._lastName = lName;
//     this._age = age;
//     }

//     function Student(fName, lName, age, roll, section) {
//      Person.apply(this, [fName, lName, age, roll, section]);
//     this._roll = roll;
//     this._section = section;
//     }

//     let std1 = new Student("“Saroar Hossain”, “Shahan”", 25, 99, "“B”");

//     console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: ‘B’
 * */

//     Bind() মেথডঃ
// Bind() মেথড হচ্ছে Call() এবং Apply() মেথডের বিপরীত। কারণ Call () এবং Apply() মেথড ইমিডিয়েটলি ইনভোক করে ফেলে।
// কিন্তু Bind() মেথড সেটা না করে সে একটা ফাংশন ডেফিনেশন রিটার্ন করে।
// যা আপনি পরবর্তীতে যেকোন সময়, যেকোন জায়গায় আপনার ইচ্ছা মত ব্যবহার করতে পারবেন।
// let person = {
//     name: "“Saroar Hossain Shahan”",
//    };

//    let getInfo = function (id) {
//    return `Welcome ${this.name}, Your roll number is ${id}.`;
//    };

//    let boundInfo = getInfo.bind(person);

//    console.log(boundInfo);

//    /**
//    * output:
//    * f (id) {
//    * return `Welcome ${this.name}, Your roll number is ${id}.`;
//    * }
//    * */

//call
//    function sumOfNumbers() {
//     var total = 0;
//    for(var i = 0; i < arguments.length; i++){
//     total += arguments[i];
//    }
//    return total;
//    }
//    var sum = sumOfNumbers.call(null,1,2,3,4);
//    console.log(sum);

//    //apply

// function sumOfNumbers() {
//     var total = 0;
//    for(var i = 0; i < arguments.length; i++){
//     total += arguments[i];
//    }
//    return total;
//    }
//    var numbers = [1,2,3];
//    var sum = sumOfNumbers.apply(null, numbers);
//    console.log(sum)

// alert(): ok button সহ message সম্বলিত alert box প্রদর্শন করে

//DOM using js you can do this perform this activities

//Pillars of DOM
//1.selection of an element
//2.changing HTML
//3.changing CSS
//4.Event Listener

// var x = document.querySelector("h1")//1.selection using js
// console.log(x)

// 2.changing HTML
// document.querySelector("h1").innerHTML = "changing HTML using DOM js" one way
// var x = document.querySelector('h1')
// x.innerHTML = 'changing HTML'   //another way to write

// 3.changing CSS
// var x = document.querySelector('h1')
// x.style.color='aqua'//variable.style.any css property u wanat to.if css file name not style.css yet style keyword

//4.Event Listenter
// var x = document.querySelector("h1")
// x.addEventListener("click",function(){//two property which event like click and the function which will execute.....
//    x.innerHTML="Change for the click event"
//    x.style.color="blue"
//    x.style.backgroundColor="#000"
// })

//Real life DOM 4 Pillars example with bulb on and off
// var bulb = document.querySelector('#bulb')
// var btn = document.querySelector("button")
// var flag = 0
// btn.addEventListener('click',function(){

//     if(flag==0){

//         bulb.style.backgroundColor = 'yellow'//camel case
//         console.log('clicked')
//         flag = 1
//     }else{
//         bulb.style.backgroundColor='transparent'
//         console.log('Again clicked')
//         flag = 0
//     }

// })

// multiple Elements select

// var h = document.querySelectorAll('h1')
// // console.log(h)
// h.forEach(function(e){
//     console.log(e)
// })

//we can also select getElementbyID and getElementbyClass
// var h = document.getElementById('bulb')//idName
// var x = document.getElementsByClassName('ss')//className

//cookies is like a id.if someone enter any browser then browseer
//set a cookie id for this client and next time if he again want to
//enter it will match the cookie
//Its like a simple database
// console.log(document.cookie);
// document.cookie = "name = nayan3344220";
// document.cookie = "name2 = nayan3344226788";
// let key = prompt("enter your key");
// let value = prompt("enter your value");
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie);
//using this function we can set any type of strings key or value
//but we have to decode the code as we encoded it like :://decodeURIComponent("1%3D%3D")

//Local storage
// console.log(localStorage.setItem("test", 1));

//local storage like a permanant key and value for the browser
//if copy the url and paste it another tab then that will be same
//of course we have to run it in console and check it application
//local storage area..we can delete upadate refresh the ket in application
//local storage

//different functionality localstorage
// let key = prompt('enter key')
// let value = prompt('enter value')
// localStorage.setItem(key,value)
// console.log(`The value at ${key} is ${localStorage.getItem(key)} `)
// if(key=='red' || key=='blue'){
//     localStorage.removeItem(key)
// }
// if(key==0){
//     localStorage.clear()
// }
// সিঙ্ক্রোনাস জাভাস্ক্রিপ্ট কিভাবে কাজ করে?
//It means if the one work hasnt done yet then the second one will not start..
//line by line code complete.here first: hey1->hey2->hey3-> hey4 one after another

// console.log('hey1')
// console.log('hey2')
// console.log('hey3')
// console.log('hey4')

// অ্যাসিঙ্ক্রোনাস জাভাস্ক্রিপ্ট কি ?

// some works start with same time and which one done first we havae to give the
// answer of this work first.like 1,2,3,4 works.3 done first which answer give first
//not line by line code complete
//Basically we write Asynchronus code for this things

// setInterval
// setTimeout
// Promises
// fetch
// axios
// XMLHttpRequest

//Main motive async is some cases in code we dont know how much time is required
//to come the answeer of the code and when it comes some particular code
//will run with the respect to the answer code.
//for example pic from facebook then it will show..because takes time to come
//demo
// setTimeout(callback,timinms) two parameters callback is functionand second
//one is TimeinMs..
// console.log('hey1')//first run sync
// setTimeout(function(){
//     //It was waiting for the setTime 2000ms async
// },2000)
// console.log('hey2')//second run sync

//but if we want to run the third line after second line then we have to
//put that line inside the function..
//for example
// console.log('hi')
// setTimeout(function(){
//     console.log('h2') // callbacks function always async code run after the answer/time
// },2000)
//  | a |
//sync = a,b,c(main stack)| b |                     |  d |
//async = e,d(side stack) | c | main stack sync     |  f |side stack async
//check between main stack and side stack is event loop and it take give between main and side stack
//Js is not async its a single thread language.one time one completion
//request send fetch,axios,promises,setTimout,setintervel
//after answer come then this works then catch,callbacks,async await

//Promises take three parameter resolve,reject,pending and always accept to function
//user will ask for a number between 0 to 9 and if the number  is below 5 resolve and if not reject

// var ans = new Promise((res,rej) =>{
//     var n = Math.floor(Math.random()*10);
//     if (n<5){
//         return res()//->then
//     }else{
//         return rej()//->catch
//     }
// })
// ans.then(function(){
//     console.log('below')
// })
//     .catch(function(){
//         console.log('above')

// })

//now we are going to create looping promises into async
// var ans = new Promise((res,rej) =>{
//     return res("come home")

// })
// var promi2 = ans.then((data) =>{
//     console.log(data)
//     return new Promise((res,rej) =>{
//         return res("open the door and close it")
//     })

// })
// var prom3 = promi2.then((data)=>{
//    console.log(data)
//    return new Promise((res,rej)=>{
//     return res("cook and eat")
//    })
// })
// prom3.then((data)=>{
//     console.log(data)
// })
//it means we can create new promise into the .then part in the first promise ....promise chain

//Async await ..In the promise sector we use .then when we get the answer.but we can skip the this by using async await
//example without async await
//  function xyz(){
//     fetch(`https://randomuser.me/api/`)//api link
//     .then(function(raw){
//         return raw.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
//  }
//  xyz()

//using async await
// async function xyz(){
//     let raw = await fetch(`https://randomuser.me/api/`)
//     let ans = await raw.json()
//     console.log(ans)
// }
// xyz()

//concurrency is togetherness of async ans sync code running main and side stacks
//throttling is control the code from number of execution

//AJAX ->Asynchronous JavaScript and XML.Its a user experience,.we can communicate with the server without reloading
//our page.like facebook we give like but our page not reloaded but like is counting..

// function loadData() {
//     // create a new request
//     const xhr = new XMLHttpRequest();

//     // what to do when response arrives
//     xhr.onload = function () {
//         const container = document.getElementById("demo");
//         container.innerHTML = this.responseText;
//     };

//     // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
//     xhr.open("GET", "./data/data.txt");

//     // add a request header
//     // xhr.setRequestHeader("MY_GF", "JavaScript");

//     // send request
//     xhr.send();

//     // abort
//     // xhr.abort();
// }

//Error handling Template
// try{
//     //regular code
// } catch(err){
//     console.log(err)//here are our error handleing
// }

// try {
//     // কোনো ধরনের এক্সেপশন থ্রো হওয়ার আগ পর্যন্ত এই ব্লকের কোড রান করতে থাকবে
//     } catch {
//     // ট্রাই ব্লক থেকে কোনো এক্সেপশন থ্রো হলে এই ব্লকের কোড রান করবে
//     } finally {
//     // এক্সেপশন থ্রো হোক অথবা না হোক, ট্রাই এবং ক্যাচ ব্লকের পরেই এই ব্লকের কোড রান করবে
//     }

//throw is like create your own error in catch

// let x = "stjlk"
// try{
//     if(x==""){
//         throw {
//             message:"empty"
//         }
//     }
//     if(isNaN(x)){
//         throw {
//            message: "Not a number"
//         }
//     }
//     x = Number(x)
//     if(x<5) throw{
//         message: "too Low"
//     }
//     if(x>10) throw{
//         message:"too high",
//         name:"higherrror"
//     }
// } catch(err){
//     console.log(err)
// }
// console.log("this is a test!!")

// 3 types error in js
// 1.syntax erroe
// 2.runtime error;
// 3.logical error

//If else কন্ডিশন দিয়ে এরর হ্যান্ডেলিং
// function convertToInteger(input) {
//     let result = Number.parseInt(input);
//     if (!result){
//     return "This data can’t be converted to integer."
//     } else {
//     return result;
//     }
//     }

//     let result = convertToInteger("25");
//     console.log(result); // 25

//     result = convertToInteger("String");
//     console.log(result); // This data can’t be converted to integer.
//     এখানে convertToInteger ফাংশন টির কাজ হলো যেকোনো টাইপের ইনপুট নিয়ে সেটিকে ইন্টেজার
//      এ রূপান্তর করার চেষ্টা করা। কিন্তু Number.parseInt() ফাংশন কিন্তু সব ধরনের ডাটা-কে ইন্টেজারে রূপান্তর করতে পারেনা।
//      যেসব ক্ষেত্রে পারেনা সেসব ক্ষেত্রে NaN রিটার্ন করে। অর্থাৎ জাভাস্ক্রিপ্ট কিন্তু এখানে আমাদের জন্য কোনো এরর থ্রো করছেনা বরং
//       অন্য একটি ডাটা টাইপ সেইভ করে রাখছে যেটি আমাদের কাম্য না। এই পরিস্থিতিতে আমাদের যেহেতু আমাদের জানা আছে যে
//       এধরনের এরর হতে পারে, আমরা এখানে কন্ডিশনাল স্টেটমেন্ট ব্যবহার করতে পারি। এই কাজটিই উপরে করা হয়েছে যেখানে ইফ
//     স্টেটমেন্টে রেজাল্টের ভ্যালু চেক করে একটি এরর মেসেজ রিটার্ন করা হচ্ছে।

// var input = 25;
// try {
// if (input < 10) {
// throw "‘too small!’";
// } else if (input > 20) {
// throw "‘too big!’";
// } else {
// console.log("‘Input was ‘" + input);
// }
// } catch (error) {
// console.log("‘Input was ‘" + error);
// } finally {
// console.log("‘Inside finally block!’")
// }

// Output: Input was too big!
// Inside finally block!

//4 pillars of OOP

//1.Abstraction : Hide low level things and show high level code. jete neeed oita dekhbu jete need net oita dekhbu nh

// 2.Encapsulation : keep properties and method private.that will not work outside of the class

// 3.Inheritance : child class will take mahching properties and values from parent class

//4.Polimorphism: this will behave many ways.a child class can overwrite a method that inherited from parent class
//(AEIP)

//কম্পিউটার সায়েন্সের ভাষায় অবজেক্ট একটি ভ্যারিয়েবল, ফাংশন, ডাটা স্ট্রাকচার যেকোনো কিছুই হতে পারে। অবজেক্ট
// ওরিয়েন্টেড প্রোগ্রামিং-এ অবজেক্ট সাধারণত ভ্যারিয়েবল, ফাংশন কিংবা ডাটা স্ট্রাকচারের সমন্বয়ে হয়ে থাকে। জাভাস্ক্রিপ্টে প্রায় সকল
//  জিনিসকেই অবজেক্ট হিসেবে বলা যেতে পারে। মাত্র এই ৬ টা জিনিস ছাড়া প্রায় সবকিছুকেই অবজেক্ট ধরা যেতে পারে, এই ৬ টা জিনিস হলো null,
//  undefined, strings, numbers, boolean, and symbols।

//এখানে Person নামের একটি অবজেক্ট তৈরি করা হয়েছে যার মধ্যে firstName, lastName, age, gender ও getFullName নামের প্রোপার্টি রয়েছে।

// const person = {
//     firstName: "Anik",
//     lastName: "Roy",
//     age: 50,
//     gender: "male",
//     getFullName: function() {return this.firstName + " " + this.lastName;}
//     };

//একটি employee অবজেক্ট যার name, id, post নামের ৩ টি প্রোপার্টি রয়েছে।

// const employee= {
//     name: "John‘’",
//     id:"‘011’",
//     post: "‘Senior Engineer’"
//     };

// object access

// অবজেক্ট
// const student = {
//     name: "‘Mehedi’",
//     class: 12
//     };

//     // ডট নোটেশন দিয়ে অবজেক্ট এক্সেস করা
//     console.log(student.name) // আউটপুটঃ Mehedi

// অবজেক্ট
// const student = {
//     name: "‘Mehedi’",
//     class: 12
//     };

//     // ব্র্যাকেট নোটেশন দিয়ে অবজেক্ট এক্সেস করা
//     console.log(student["name"]) // আউটপুটঃ Mehedi

// এখন আমরা চাইলে নেস্টেড অবজেক্ট মানে একটা অবজেক্টের মধ্যে আরও অবজেক্ট ডিফাইন করতে পারি।
// অবজেক্ট
// const student = {
//     name: "‘Mehedi’",
//    class: 12,
//     marks: {
//     physics: 80,
//     biology: 55
//    }
//    };
// const employeeInfo = {
//     employeeName: "“John Doe”",
//     employeeId: 27,
//     salary: { 2018: "“40000$”", 2019: "“50000$”", 2020: "“65000$”" },
//     address: {
//     locality: { address1: "“bronx”", address2: "“Newyork”", },
//     city: "“Newyork”", country: "“US”"
//    }
//    }

//জাভাস্ক্রিপ্টে অবজেক্টের মধ্যে ফাংশনও থাকতে পারে। যেমনঃ
// const student = {
//     name: 'Mehedi',
//    class: 12,
//     greet: function (){
//    console.log("Hello!")
//    }
//    };

//    student.greet();

//নিম্নোক্ত অবজেক্টটিও একটি নেস্টেড অবজেক্ট। কারণ এখানে একটি অবজেক্ট person এ কতগুলো
//  অবজেক্ট এর একটি অ্যারে রয়েছে যা cars ভ্যারিয়েবল এ এসাইন করা রয়েছে।
//  অ্যারে নিজেও একটি অবজেক্ট।
// const person = {
//     firstName: "“Elon”",
//     lastName: "“Musk”",
//     age: 25,
//     cars: [
//    { name:" Ford", "models": ["Fiesta", "Focus", "Mustang"] },
//    { name: "BMW", "models": ["320", "X3", "X5"] },
//    { name: "Fiat", "models": ["500", "Panda"] }
//    ]
//    };

//    const lastName = person.age
// console.log(person.age)
// //returns array of names of his cars
// const carNames = person.cars.map((car) => car.name)

// ক্লাস হলো এমন একটি টেম্পলেট যা ভ্যারিয়েবল এবং ফাংশনের সমন্বয়ে তৈরি। শুনতে তো অবজেক্ট এর মতোই হয়ে গেল তাইনা?
//  আরেকটু ভালোভাবে ভাবে বলতে গেলে, ক্লাস হলো একধরণের blueprint যা থেকে সুনির্দিষ্ট অবজেক্ট তৈরি করা হয়। ক্লাসের মধ্যেও Attributes
//  এবং Function থাকে যাদেরকে Method বলা হয়। নিচের কোডটি খেয়াল করিঃ

// class Car {
//     constructor(color, brand, model){
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//     }
//     repaint(){
//     this.color = "“Red”";
//     }
//     }

//     const myCar = new Car("“Black”", "“Doge”", "“Charger”");
//     const helensCar = new Car("“Blue”", "“Nissan”", "“Ultima”");

// আমরা একটা Car নামে ক্লাস তৈরি করেছি। তার মধ্যে properties হিসেবে color, brand এবং model
//  দিয়েছি। এবং তার মধ্যে repaint নামে একটি মেথড দিলাম যা গাড়ির রং পরিবর্তন করে। তারপর এই ক্লাস থেকে
//   আমরা দুইটি ‘Car’ টাইপের অবজেক্ট myCar এবং helensCar তৈরি করেছি।এখন আমরা চাইলে এই ক্লাস থেকে হাজারটা অবজেক্টও
// তৈরি করতে পারব এবং প্রত্যেকটা অবজেক্টেরই ইউনিক প্রোপার্টি থাকবে।

//Constructor
// constructor একটি স্পেশাল ধরণের ফাংশন যার সাহায্যে অবজেক্ট কে ইনিশিয়ালাইজ করা যায়।
//   আরেকটু সহজ করে বলতে গেলে, এটি এমন একধরনের ফাংশন যা নিজেকে নিজেই কল করে। আমরা যখন ‘new’
//   keyword ব্যবহার করে কোনো ক্লাসের অবজেক্ট তৈরি করি, তখনই সাথে সাথেই constructor ফাংশনটি কল হয় এবং
//    অবজেক্টের মধ্যে কোন ভ্যালু সেট করে দিলে constructor এর মধ্যে সেগুলো এসাইন হয়ে যায়। ‘new’ keyword এর
//    ব্যবহার নিয়ে আমরা পরবর্তীতে বিস্তারিত আলোচনা করব। constructor এর কাজই হচ্ছে অবজেক্ট তৈরি করা এবং
//     অবজেক্টের কোনো প্রোপার্টি থাকলে তাদের ভ্যালু সেট করা। এটা অবজেক্ট তৈরি করার খুবই সহজ পদ্ধতি কারণ
//     আমাদের কষ্ট করে অবজেক্ট রিটার্ন করতে হয়না। জাভাস্ক্রিপ্টে কোনো ক্লাস তৈরি করার সময় অটোম্যাটিক
//   constructor তৈরি হয়ে যায়, কোনো প্যারামিটার ছাড়াই।
// constructor(){

// }

// class Car {
//   constructor(options) {
//   this.wheels = options.wheels;
//   this.doors = options.doors;
//   this.color = options.color;
//   }
//   }
//   class Truck {
//   constructor(options) {
//   this.wheels = options.wheels;
//   this.doors = options.doors;
//   this.color = options.color;
//   }
//   }
//   class Factory {
//   constructor(type) {
//   this.type = type;
//   }
//    create = (options) => {
//    let vehicleType = this.type;
//    let vehicle;
//   if (vehicleType === "“car”") {
//    vehicle = new Car(options);
//   } else if (vehicleType ===" “truck”") {
//    vehicle = new Truck(options);
//   }
//    vehicle.vehicleType = vehicleType;
//    vehicle.startEngine = ()=> console.log(`Reving ${vehicleType} engine`);
//    vehicle.driveVehicle = ()=> console.log(`Driving ${vehicleType}…`);
//    vehicle.stopEngine = ()=> console.log(`Stop ${vehicleType} engine`);
//   return vehicle;
//   }
//   };
//   const TruckFactory = new Factory("“truck”");
//   const truck = TruckFactory.create({
//    wheels: 12,
//    doors: 2,
//    color: "“yellow”"
//   })
//   console.log(truck)
//   truck.startEngine();

//
// class chocolateIceCream{
//   constructor() {
//    console.log("‘chocolate’")
//   }
//   };
//   class vanillaIceCream{
//   constructor() {
//    console.log("‘vanilla’")
//   }
//   };
//   class oreoIceCream{
//   constructor() {
//    console.log("‘oreo’")
//   }
//   };
//   class IceCreamFactory {
//   constructor(type) {
//   this.type = type
//   }
//    createIceCream = () => {
//   if(this.type === "“vanilla”")
//   return new vanillaIceCream();
//   if(this.type === "“chocolate”")
//   return new chocolateIceCream();
//   if(this.type === "“oreo”")
//   return new oreoIceCream();
//   }
//   };
//   const iceCreamFac = new IceCreamFactory("chocolate");
//   const iceCream = iceCreamFac.createIceCream();

// Factory Pattern ব্যবহার করে ক্লাস তৈরি করা:

// আমরা Factory Pattern সম্পর্কে জেনেছি। দেখেছি কীভাবে Factory Function ব্যবহার করতে হয়। আজ আমরা দেখব কীভাবে Factory Pattern ব্যবহার
// করে ক্লাস তৈরি করা যায়।

// Factory Pattern সম্পর্কে আমরা জানি যে, এটি দিয়ে অবজেক্ট তৈরি করা যায় ডিরেক্টলি new
//  কিওয়ার্ড ব্যবহার না করে। তার পরিবর্তে এইটা একটা কমন ইন্টারফেস তৈরি করে যা সাবক্লাসগুলো দিয়ে অবজেক্ট তৈরি করে। ধরা যাক,
//   একটা cake এর ফ্যাক্টরিতে হরেক রকমের cake তৈরি করা হয়। যেমনঃ চকলেট, পাউন্ড আর বিস্কুট cake। এক্ষেত্রে আমরা কীভাবে ফ্যাক্টরি প্যাটার্ন
// ফলো করে কাজ করব? নিচের উদাহরণটি খেয়াল করি

// class CakeFactory {
//   constructor() {
//     this.createCake = (flavor) => {
//       let cake;
//       if (flavor === "chocolate") {
//         cake = new ChocolateCake();
//       } else if (flavor === "biscuit") {
//         cake = new BiscuitCake();
//       } else if (flavor === "pound") {
//         cake = new PoundCake();
//       }
//       return cake;
//     };
//   }
// }

// class ChocolateCake {
//   constructor() {
//     this.cakeFlavor = "Chocolate Cake";
//     this.made = () => {
//       console.log("You made " + this.cakeFlavor);
//     };
//   }
// }

// class BiscuitCake {
//   constructor() {
//     this.cakeFlavor = "Biscuit Cake";
//     this.made = () => {
//       console.log("You made " + this.cakeFlavor);
//     };
//   }
// }

// class PoundCake {
//   constructor() {
//     this.cakeFlavor = "Pound Cake";
//     this.made = () => {
//       console.log("You made " + this.cakeFlavor);
//     };
//   }
// }

// const cakeFactory = new CakeFactory();
// const chocolate = cakeFactory.createCake("chocolate");
// const pound = cakeFactory.createCake("pound");
// const biscuit = cakeFactory.createCake("biscuit");

// chocolate.made();
// pound.made();
// biscuit.made();


// Constructor Pattern ব্যবহার করে জাভাস্ক্রিপ্টের ক্লাস তৈরি
// function CreateCircle(radius){
//   this.radius = radius;
//   this.draw = function () {
//   console.log(`Circle radius is ${this.radius}`);
//   };
//   }
   
//   const circle1 = new CreateCircle(5);

//   function CreateCircle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//     console.log(`Circle radius is ${this.radius}`);
//     };
//     }
     
//     const circle1 = new CreateCircle(5);
//     console.log(circle1.draw());
//     const circle2 = new CreateCircle(10);
//     console.log(circle2.draw());
     
     
//     // output:
//     // Circle radius is 5
//     // Circle radius is 10


//class 
// class Vehicle {
//   color = ''
//  constructor(brand, model) {
//  this.brand = brand;
//  this.model = model;
//  }
//  setColor(color) {
//  this.color = color;
//  }
//  }
  
//  const myBike = new Vehicle("Yamaha" ,"R15 ","v3");
//  console.log(myBike); // Vehicle { color: ”, brand: ‘Yamaha’, model: ‘R15 v3’ }
//  myBike.setColor("‘Black’");
//  console.log(myBike); // Vehicle { color: ‘Black’, brand: ‘Yamaha’, model: ‘R15 v3’ }


//  আমরা যখন কন্সট্রাক্টর প্যাটার্ন ইউজ করার সময় new কীওয়ার্ড ইউজ করি তখন সাধারণত ৪ টা জিনিস হয়। সেগুলো হচ্ছেঃ

// একটি সম্পূর্ণ নতুন অবজেক্ট তৈরি হয়
// নতুন অবজেক্টের প্রোটোটাইপ হিসেবে ফাংশনের প্রোটোটাইপ সেট হয়
// this এর ভ্যালু হিসেবে নতুন অবজেক্টটি সেট হয়
// নতুন তৈরি করা অবজেক্টটি অটোমেটিক রিটার্নড হয়

// একটি সম্পূর্ণ নতুন অবজেক্ট তৈরি হয়
// নতুন অবজেক্টের প্রোটোটাইপ হিসেবে ফাংশনের প্রোটোটাইপ সেট হয়
// this এর ভ্যালু হিসেবে নতুন অবজেক্টটি সেট হয়
// নতুন তৈরি করা অবজেক্টটি অটোমেটিক রিটার্নড হয়

// function Car(color) {
//   this.color = color;
//   };
// let mercedes = new Car("Red");
// console.log(typeof mercedes) // Output: object

// নতুন অবজেক্টের প্রোটোটাইপ হিসেবে ফাংশনের প্রোটোটাইপ সেট হওয়া


// function Car(color) {
//   this.color = color;
//   };
   
//   Car.prototype.getColor = function(){
//   console.log("“Color of the car is “"+this.color)
//   }
   
//   let mercedes = new Car("“Red”");
//   mercedes.getColor() // Output: Color of the car is Red
//   let bmw = new Car("“Black”");
//   bmw.getColor() // Output: Color of the car is Black


//Abstraction
// function Car(name){
//   this.name = name;
//   this.start = ()=>{
//   // car starting mechanism
//   console.log(this.name + ' starts');
//   }
//   this.stop = ()=>{
//   // break mechanism
//   console.log(this.name+ " stops");
//   }
//   }
   
//   let mercedes = new Car("Mercedes Benz");
//   mercedes.start(); // Output: Mercedes Benz starts
//   mercedes.stop(); // Output: Mercedes Benz stops

//   এখানে mercedes নামের নতুন অবজেক্টের গাড়ী কীভাবে স্টার্ট এবং স্টপ ইমপ্লিমেন্টেশন হয় তা জানার দরকার নেই। 
//   তার শুধুমাত্র জানা দরকার যে start মেথড কল করলে গাড়ী স্টার্ট হবে, এবং stop মেথড কল করলে গাড়ী স্টপ হবে।

// উপরে আমরা কন্সট্রাক্টর ফাংশন দিয়ে উদাহরণ দিয়েছি। আমরা চাইলে তা জাভাস্ক্রিপ্ট ক্লাস দিয়েও করতে পারি।


  //  class Account{
  //   #balance = 0
  //   constructor(name,initBalance){
  //     this.name = name
  //     this.#balance = initBalance

  //   }
  //   addBalance(amount){
  //     this.#balance = this.#balance + amount
  //   }
  //   deductBalance(amount){
  //     this.#balance = this.#balance - amount
  //   }
  //   showBalance(){
  //    console.log(`current balance is: `,this.#balance)
  //   }
  //  }
  //  const myAccount = new Account('Nayan',3467477)
  //  console.log(myAccount)
  //  myAccount.addBalance(45667)
  //  myAccount.showBalance()
   // উপরের কোডটিতে কিভাবে একাউন্টে টাকা যোগ বা বিয়োগ করা হচ্ছে সেটি সরাসরি না দেখিয়ে একটি মেথডের মাধ্যমে কাজটি করা হচ্ছে এবং মেথডের ভিতরের প্রসেসটি ইউজারের কাছ থেকে হাইড করে রাখা হচ্ছে।


  //  function InternetBanking(name, mobile, initBalance) {
  //   this.name = name;
  //   this.mobile = mobile;
  //   this.balance = initBalance;
     
  //   this.checkLocation = function () {
  //   // Process here
  //   }
  //   this.checkValidNumber = function (number) {
  //   // Process here
  //   }
  //   this.checkAmountValidity = function (amount) {
  //   // Process here
  //   }
  //   this.addAmount = function (amount, number) {
  //   // Process here
  //   }
     
  //   this.transferBalance = function (amount, toNumber) {
  //   this.checkLocation();
  //   this.checkValidNumber(toNumber);
  //   this.checkAmountValidity(amount);
  //   this.addAmount(amount, toNumber);
  //   console.log("‘Successfully balance transfered.’");
  //   }
  //   }
     
    // const mobileBanking = new InternetBanking("‘Imrul’", "‘01710304050’", 15000);
    // mobileBanking.transferBalance(7000, "‘01520708090’"); // Successfully balance transfere


//Polymorphism is like a function works in a different way in different place.method override and methos overload way

//Override: a child class after inheriting can access the all properties from parent class but when 
//it write the property different way what already in the parent class can access but in his own way this called
//overriding

// class Dog{//parent class
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   bark(){
//     console.log("Dog Barking!!")
//   }
// }
// class HuskyDog extends Dog{//extends for 
//   constructor(name,age){
//     super(name,age)//super keywords 
//   }
//   bark(){
//     console.log("husky dog barking!!!")
//   }
//   play(){
//     console.log(this.name + ' is playing and his age ' + this.age )
//   }
// }

// const hachi = new HuskyDog('Hachi',3)
// hachi.bark()
// hachi.play()

// Method Overloading (মেথড ওভারলোডিং)

// মেথড ওভারলোডিং হলো একই মেথড কে দিয়ে ভিন্নরকম কাজ করানো। যেমনঃ একই নামের ফাংশনের প্যারামিটার যখন 
// দুইটা দিয়ে কল করা হবে তখন সেটি এক কাজ করবে, আবার তিনটা প্যারামিটার
//  দিয়ে কল করা হলে আরেক কাজ করবে

// class Dog{
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   bark(){
//     console.log("Dog barking")
//   }
//   play(){
//     console.log(this.name + ' is playing')
//   }
//   play(partner){
//     console.log(this.name + ' is playing with ' + partner)
//   }
//   play(partner1,partner2){
//     console.log(this.name + ' is playing with ' + partner1 +' and ' + partner2)
//   }
// }

// const hachi = new Dog('Hachi',2)
// hachi.play()/// Output: Hachi is playing with undefined and undefined
// hachi.play('Broley')//// Output: Hachi is playing with Broley and undefined
// hachi.play('Borley','Bravo')// Output: Hachi is playing with Broley and Bravo
 

// //এখানে আমরা একই নামের মেথড play কে দিয়ে ভিন্ন রকমের কাজ করিয়েছি। 
// // কিন্তু আউটপুটে undefined হওয়ার কারণ হল, অন্যান্য ল্যাংগুয়েজের মতো জাভাস্ক্রিপ্ট মেথড ওভারলোডিং সাপোর্ট করে না। 
// // এইটা কি কারণে হয় বলেন দেখি! এইটা হয় hoisting এর জন্য। কারণ জাভাস্ক্রিপ্টে ফাংশন ডিক্ল্যারেশন hoisted হয়। আমরা চাইলে
// //  আমাদের মত করে মেথড ওভারলোডিং 
// //ইমপ্লিমেন্ট করতে পারি। কিন্তু তা তুলনামূলক জটিল।


//কীভাবে জাভাস্ক্রিপ্টে Getter এবং Setter ইউজ করতে হয়?
 

// আমরা অবজেক্ট সম্পর্কে জানি। অবজেক্টের মধ্যে দুই ধরণের properties থাকে। প্রথমটা হল data properties, যার সাথে আমরা পরিচিত। আমরা এতক্ষণ পর্যন্ত যেই প্রপার্টিগুলা ইউজ করে আসছি সেগুলো সবই ডাটা প্রোপার্টি।
// দ্বিতীয়টি হল accessor properties, যা অবজেক্টে ফাংশন আকারে থাকে এবং ভ্যালু get আর set করতে ব্যবহৃত হয়। আমরা সাধারণত এই দুইটি keyword ব্যবহার করে থাকি accessor properties ডিফাইন করতে।

// get – প্রোপার্টির ভ্যালু পাওয়ার জন্য getter মেথড ডিফাইন করতে
// set – প্রোপার্টির ভ্যালু ঠিক অথবা পরিবর্তন করার জন্য setter মেথড ডিফাইন করতে

// জাভাস্ক্রিপ্ট Getter:
// জাভাস্ক্রিপ্টে getter মেথড অবজেক্টের প্রোপার্টিগুলো এক্সেস করতে ব্যবহৃত হয়। নিচের উদাহরণটি লক্ষ্য করুণঃ
// const person = {
//   // ডাটা প্রোপার্টি
//    name: "Mehedi",
//   // এক্সেসর প্রোপার্টি (getter)
//    get getName (){
//   return this.name;
//   }
//   }
   
//   console.log(person.name) // Output: Mehedi
//   console.log(person.getName) // Output: Mehedi
   
//   console.log(person.getName()) // TypeError: person.getName is not a function


//জাভাস্ক্রিপ্ট Setter:
// জাভাস্ক্রিপ্টে setter মেথড অবজেক্টের প্রোপার্টিগুলোর ভ্যালু সেট করতে কিংবা চেঞ্জ করতে ব্যবহৃত হয়। নিচের উদাহরণটি লক্ষ্য করুণঃ
// const person = {
//   // ডাটা প্রোপার্টি
//    name: "Mehedi",
//   // এক্সেসর প্রোপার্টি (setter)
//    set setName (newName){
//   this.name = newName; 
//   }
//   }
   
//   console.log(person.name) // Output: Mehedi
//   person.setName = "Azad";
//   console.log(person.name) // Output: Azad

//prototype

// function Car(color,name,manufactureDate){
//   this.color = color
//   this.name = name
//   this.manufactureDate = manufactureDate
// }
// Car.prototype.getColor = function(){
//   return this.color
// }
// Car.prototype.getName = function(){
//   return this.name
// }
// Car.prototype.getManufactureDate = function(){
//   return this.manufactureDate
// }

// const firstCar = new Car('red','BMW',2020)
// console.log(firstCar)
// const secondCar = new Car('blue','Tesla',2023)
// console.log(secondCar)

