// Object
// 데이터와 기능(데이터를 핸들링하는 기능)
// 키 key와 값 value 한쌍
//함수 속성 가질 수 있음

const { captureOwnerStack } = require("react");




// 객체 리터럴(값 자체)

const human = {
   name : '라일랜드',
   age: 30,

};
//console.log(human.age);
//console.log(human.name);


//human.age = 20;
//human.name = '그레이스';
//console.log(human.name);
//console.log(human.age);


// 객체 리터럴 Method==============
// const eridian = {
//     name: '로키',
//     age: 30,
//     greet: function () { //객체의 Method
//     console.log(`안녕 나는 ${this.name}야!`);

//     },
//     goodbye() {
//         console.log(`goodbye`);
//     },
// };
// eridian.greet();
// eridian.goodbye();

//==================
//객체 속성 추가
// human.job = "teacher";
// console.log(human.job);

//==================
//생성자 함수
// function Person(name, age) {
//    this.name = name;
//    this.age = age;
//    this.greet = function () {
//     console.log(`안녕 나는 ${this.name}야!`);
//    };
// }
// // 프로토타입 결국 상속을 위한것
// // new 빈 객체를 만들고, 
// const person1 = new Person('양관식', 20);
// const person2 = new Person('오애순', 20);
// console.log(person1);
// console.log(person2);
// console.log(person1.name, person1.age);
// console.log(person2.name, person2.age);
// person2.greet();
// person1.greet();

//=====================================
// function Student( lang, name, age ) {
//     this.lang = lang;
//     this.name = name;
//     this.age = age;
//     this.intro = function () {
//         console.log( c안녕 나는 ${this.name}야! 지금 ${this.lang}를 배우고 있어`);
//     };
// }
// const student1 = new Student('Java','이미래', 27);
// const student2 = new Student('Python','하하호호', 30);
// console.log(student1);
// console.log(student2);
// console.log(student1.lang,student1.name, student1.age);
// console.log(student2.lang,student2.name, student2.age);
// student1.intro();
// student2.intro();


//======================================
// class 사용

// class Person1{
//    constructor(name, age) {

//    this.name = name;
//    this.age = age;
// }
//    greet() {
//     console.log('Hello,' + this.name);
//    }
// }

// const person3 = new Person1('양금명', 20);
// console.log(person3.age, person3.name);
// person3.greet();

//================================
//class 사용 private

// class Person2{
//     #idNo;
//    constructor(name, age, idNo) {

//    this.name = name;
//    this.age = age;
//    this.#idNo = idNo;
// }
//    getiDNo() {
//     console.log(`idNo:${this.#idNo}`);
//    }
// }
// const person4 = new person2('양금명', 20, '123456');
// person4.getiDNo();
//===================================
// class Vehicle{
//     constructor( speed ) {
//         this.speed =speed;

//     }
//     speedu() {
//         a = a + 10

//     }
//     speedD() {
//         a = a - 10
//     }
//     info() {

//     }
// }

// //===========================
// class Vehicle{
//     constructor( speed ) {
//         this.speed =speed;

//     }
//     speedUp() {
//         this.speed +=10
//     }
//      speedD() {
//         this.speed -=10
//     }
//     info(){
//         console.log(`현재속도는 ${this.speed}입니다.`);
//     }
// }

// const vehicle = new Vehicle(100)
// vehicle.speedUp();
// vehicle.info();
//========================================


//=========클래스의 상속===========
// Trucl < Car < Vehicle
//기능적으로는 트럭이 제일 많음

//======상속의 구현 ======================
// class Car extends Vehicle {
//     constructor(speed, wheels, seats) {
//         super(speed);
//         this.wheels = wheels;
//         this.seats = seats;
//     }
//     drive() { console.log(`현재속도는 ${this.speed}로 운행`);}
// }
// const car = new Car(100, 4, 4);
// car.speedUp();
// console.log(car.speed);
// car.drive();
// console.log(car.wheels);
// console.log(car.seats);
//=====================================

// class Car extends Vehicle {
//     constructor(speed, wheels, seats) {
//         super(speed);
//         if(!wheels){
//           this.wheels = 4;
//         }
//         this.wheels = 4;
//         this.seats = seats;
//     }
//     drive() { console.log(`현재속도는 ${this.speed}로 운행`);}
// }
// const car = new Car(100, 4, 4);
// car.speedUp();
// console.log(car.speed);
// car.drive();
// console.log(car.wheels);
// console.log(car.seats);

//=========================
//클래스 상속 실습

// class Truck extends Car {
//     constructor(speed, wheels, seats, loadage) {
//        super(speed, wheels, seats)
//        this.loadage = loadage;
//        let loadage = 0;
//     }

// }  다시해보기
//==================================
//Collection type 집단자료형
//배열 Array
//집합 Set "중복을 허용하지 않음"
//맵 Map  키 key: 값value


// //Array
// console.log("==================");
// const numbers = [1, 2, 3, 4, 5 ];
// //console.log(numbers[0]) //index 는 0부터 시작

// let array = new Array(2); //size
// //console.log(array);


// array = new Array(1, 2, 3, 4, 5);
// //console.log(array);

//==========================

// array 속성

//item의 개수
// console.log("==================");
// console.log(numbers.length);

// numbers[3] = -4;
// numbers[5] =  6;

// console.log(numbers.length, numbers);

// numbers[8] =  7;
// console.log(numbers.length, numbers);

// delete numbers[1];
// console.log(numbers.length, numbers);


//Array 활용

// let bts1 = ['진', '슈가', '제이홉', 'RM'];
// console.log(bts1);
// let bts2 = new Array('지민','뷔', '정국');
// // console.log(bts2);

// console.log(bts1.indexOf('슈가'));
// console.log(bts2.indexOf('슈가'));

// console.log(bts1.indexOf('RM'));
// console.log(bts1.indexOf('지민'));
//  console.log("==================");
//추가
// bts1.push('박보검');
// console.log(bts1);
// console.log(numbers.length);

// bts1.unshift('이도현');
// console.log(bts1);

// //삭제

// let first = bts1.shift();
// console.log(bts1);
// console.log(first);

// let last = bts1.pop();
// console.log(last);
//  console.log(bts1);
// //================
// const deleted= bts1.splice(1, 1);
// console.log(bts1);
// console.log(deleted);

// let bts1 = ['진', '슈가', '제이홉', 'RM'];
// console.log(bts1);
// let bts2 = new Array('지민','뷔', '정국');
// console.log(bts2);

// const bts = bts1.concat(bts2);
// console.log(bts);

// const rbts = bts.reverse();
// console.log(rbts);

// let members = bts.join(', ');
// console.log(members);


// //===============Array 활용========

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.sort();
// //console.log(fruits);

// //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

//  const numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort();
// //console.log(numbers);

// //[ 1, 10, 100, 25, 40, 5 ]

// //============================

// //오름차순 정렬
// numbers.sort(function (n1, n2){ return n1 - n2});
// console.log(numbers);
// //[ 1, 5, 10, 25, 40, 100 ]


// numbers.sort( (n1, n2) => n2 - n1);
// console.log(numbers);

// //[ 100, 40, 25, 10, 5, 1 ]

// numbers.sort( (n1, n2)=> n1 - n2);
// console.log(numbers);

// const items = [ 
//     {name: 'Apple', price: 50},
//     {name: 'Banana', price: 10},
//     {name: 'Mango', price: 30},
// ];
// items.sort((a, b) => a.price - b.price);
// console.log(items);
// items.sort((a, b) => b.price - a.price);
// console.log(items);


// items.sort((n1, n2) => n1.name.localeCompare(n2.name));

// items.sort((n1, n2) => n2.name.localeCompare(n1.name));

// //====array 순회========

// const bts = ['RM','진', '슈가', '제이홉', '지민', '뷔', '정국']

// for (let i = 0; i < bts.length; i++) {
//     console.log(bts[i]);
// }

// for (let member of bts) {
//     console.log(member);
// }

// bts.forEach((member, index, array) => {
//     console.log(`전체 ${array.length}명중에 ${index}번째 멤버 ${member}입니다.`)
// });
//==================
// //Quiz-Array
// const list = ['슈가', '차은우', '박서준', '이도현', '제이홉', '주우재', '지민'];
// const bts = ['진', '슈가', '제이홉', 'RM', '지민', '뷔', '정국'];


// // const result = [];

// // for(const name of list){
// //     if(bts.includes(name)){
// //         result.push(name);
// //     }
// // }
// // console.log(result);
// // console.log(result.join(','));
// // console.log(result.join(':'));
// //====================
// //Map
// const nums = [1, 2, 3, 4, 5];
// const doubled = nums.map((num) => {
//     return num * 2;
// });
// //console.log(doubled);
// //===========
// //filter() 
// const evenNumbers = nums.filter((num) =>{
//     return num % 2 === 0;
// })
// console.log(evenNumbers);

// const evenNumbers1 = nums.filter((num) =>{
//     return num % 2 === 1;
// })
// console.log(evenNumbers1);

// const evenNumbers3 = nums.filter((num) =>{
//     return num * 2 === 6;
// })
// console.log(evenNumbers3);


// const list = ['슈가', '차은우', '박서준', '이도현', '제이홉', '주우재', '지민'];
// const bts = ['진', '슈가', '제이홉', 'RM', '지민', '뷔', '정국'];
// const result = list.filter((name)=> bts.includes(name));
// //const result = list.filter((name)=> bts.includes(name)).join(',')
// console.log(result);
// const strMember = result.join(',');
// console.log(strMember);


//reduce() 함수

// const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); //초기값

// console.log(sum); //15

//=====================
//Quiz - 고차원 함수 활용

// const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const bnum = nums.filter((num) => num % 3 === 0).map((num)=>
//      num * 2 ).reduce(acc + cur) => {
//         return acc + cur;
//      }, 0);



     const total = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((num)=> num % 3 ===0).map((num) => num * 2).reduce((acc , cur) => acc + cur, 0);
     console.log(total)



