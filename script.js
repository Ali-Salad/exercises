// let name = "liban shuluq";
// let year = 2026;
// const age = 45;
// let ispresident = "true"
// console.log(name);
// console.log(year);
// console.log(age)
// console.log(ispresident);

// let a = 10;
// let b = 5;
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(++a);
// console.log("pre-increment")
// console.log(a);
// console.log(a++)
// console.log("post-increment")
// console.log(a);

// console.log(b--)
// console.log(--b)


// comparision operators

// let x = 10;
// let y = "10";

// // equal
// // qiimaha kaliya ayaa muhiim ah

// console.log( x == y);

// // not equal 
// // qiimaha aya muhiim ah

// console.log( x != y);

// // strictly equal
// // qiimaha iyo data type ayaa muhiim ah

// console.log(x === y);


// // strictly not equel
// // isku mid amahan xagga type-ka
// console.log(x !== y);



// // greater than
// console.log(x > y);

// // less than

// console.log(x < y);

// // greater than or equal

// console.log( x >= y);

// // less than or equal

// console.log(x <= y);


// // logical operators
// let isAdult = true;
// let hasPermision = false;

// // AND &&
// console.log(isAdult && hasPermision)

// // or ||
// console.log( isAdult || hasPermision)

// // not adult

// console.log(!isAdult)

// console.log(!hasPermision)


// string operators
// let firstName = " Ali";
// let lastName = " Salad"
// let greeting = " hello";
// greeting += firstName;
// greeting += lastName;
// greeting += " good morning"
// console.log(greeting)
// // console.log(firstName +" "+lastName)


// function declaraions

// function greet(){

//     console.log("hello, world");
// }

// greet();

// parameter= markii fuction-ka la sameysnayo function greet()
// arguments = markii funtion-ka loo wacaayo greet()


// function greet(name){
//     console.log("hello,  " + name)
// }

// greet(" Ali");
// greet(" said");
// greet(" geedi");


// function calculatetotal(price , quantity){
//     console.log("calculatetotal: $" + price * quantity)
// }

// calculatetotal(2 , 10)
// calculatetotal(5, 2);
// calculatetotal(16 , 3);
// calculatetotal(8 , 5)

// function add(a, b) {
//     return a + b;
// }

// // console.log(add(10, 30));
// let result = add(10, 30);
// console.log(result / 2)
// console.log(result + 10)

// arrays
// let students = ["abdi", "jaamac", "geedi" , "rooble", "raage"]
// console.log(students);

// // objects

// let person = {
//     name: "alisalad",
//     age: 25,
//     city: "adado"

// }
// // console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// console.log(person["city"]);
// console.log(person["name"]);
// console.log(person["age"]);


// let person2 = {
//     name: "kalid",
//     age: 20,
//     city: "boosaaso",
//     greet: function() {
//         console.log("how are you doing", this.name)
//     }
// }

// console.log(person2)

// person2.name = "khalid"
// console.log(person2)

// person2.birthDate = '2020- 05- 16';
// console.log(person2)

// console.log(person2.greet())


// arrays and object in one time for storing student names and informations
// let students = [
//     {
//         name: "alisalad",
//         class: "fullstuck",
//         age: "25",
//         id: "67876",
//     },

//     {
//         name: "abdiwali",
//         id: "76543",
//         class: "f4",
//         age: 16,
//     }
// ]

// console.log(students[0]);
// console.log(students[0].name);
// console.log(students[0].age);
// console.log(students[0].id);

// console.log(students[1])
// console.log(students[1].name)
// console.log(students[1].age)
// console.log(students[1].id)
// console.log(students[1].class)


// for loop waxay naga caawinee meeshii aan soo celceli lahayn iney hal mar noo daabacdo waxaa aan ubaahanahay 
// waxay leedahay 3 sheey oo ah in la ogaado inta aan la qorin ka hor 
// 1: xagee laga bilaabaa
// 1: xagee ku egyahay
// 1: yaa na geeynaya


// for (let i = 0; i < 5; i++) {
//     console.log(i);


// }

// for (let i = 1; i < 11; i++) {
//     console.log(i);

// }


// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);


// const scores = [40 ,50, 60, 70, 80, 90];
// const pass = scores.filter((score) => score >= 60);
// console.log(pass);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, num) => total + num ,0);
// console.log(sum);


// JAVASCRIPT ES6

// const name = "Alisalad";
// const city = "cabudwaq";
// // const oldmassage = "hello " + name  + " welcome " + city ;
// // console.log(oldmassage);

// const massage = `hello ${name} welcome to $city`;
// console.log(massage);

// const fruits = ["banana", "apple", "chery"];
// console.log(fruits)
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);

// const [firs, second, third] = fruits;
// console.log(third)

// object destructuring
// const person = {name: "geedi", age: 20, city: "mogadishu"};
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// const {name , age,city} = person ;
// console.log(name);
// console.log(age);
// console.log(city);


// DEFAULT PARAMETERS
// function greet (name = "guest"){
//     console.log(`hello ${name}`)
// }
// greet("hamuda")


// SPREAD AND REST OPERATIONS
// const numbers = [ 1, 2, 3];
// const allNumbers = [...numbers, 4, 5, 6, 7, 8, 9, 10];
// console.log(allNumbers);

// REST
 function sum(...numbers){
    return numbers.reduce((total , num) => total + num , 0);
 }
console.log(sum(25, 25, 50));
