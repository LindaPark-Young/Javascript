//함수(Function)
//재사용할려고
// function sayHello() {
//     console.log('Hello');
// }
// sayHello();
// sayHello();
// sayHello();

// function sayHello1(name){
//     console.log(`'Hello ${name}'`);
// }
// sayHello1('World!');
// sayHello1(1);
// sayHello1('Peter');


// 함수의 할당

// const sayHello4 = sayHello;
// sayHello4();
// sayHello();


// const cal
// 함수 정의 실습1

// function calcul(num1 , op, num2) {
    
//     switch(op) {
//     case '+': result= num1+num2; break;
//     case '-': result= num1+num2; break;
//     case '*': result= num1+num2; break;
//     case '/': result= num1+num2; break;
//     default:
//         result = undefined;
//   } 
//   return result;
// }
// console.log(calcul(4, '+', 5678));

//함수의 매개변수

// function sayHello(name) {
//     console.log(`'Hello ${name}'`);
// }
// function sayHi(name) {
//     console.log(`'Hi ${name}'`);
// }
// function greet(name, callback) {
//     console.log(name);
//     callback(name);
// }
// greet('깐부', sayHi);
// greet('선생님', sayHello);

// 함수 정의 실습2

// function plu(a, b){
//     return a + b ;
// }
// function min(a, b){
//     return a - b ;
// } 
// function mul(a, b){
//     return a * b; 
// }
// function div(a, b){
//     return a / b;
// }

// function cal2(n1, n2, fn){
//     return fn(n1, n2);
// }

// let result = cal2(4,5, plu)
// // result = cal2(4,5, min)
// // result = cal2(4,5, mul)
// // result = cal2(4,5, div)
// console.log(result);



// // 다양한 함수 정의 방식
// //함수 선언문
// function add1(n1, n2){
//     return n1 + n2;
// }
// console.log(add1(1,2));

// //함수 표현식
// let add2 = function (n1, n2) {
//     return n1 + n2;
// };
// console.log(add2(1,2));

// //화살표 함수
// let add3 = (n1, n2) => {
//     return n1+ n2;
// };
// console.log(add3(1,2));

//익명함수 =>한번사용할때 
function plu(a, b){
    return a + b ;
}
function min(a, b){
    return a - b ;
} 
function mul(a, b){
    return a * b; 
}
function div(a, b){
    return a / b;
}

function cal2(n1, n2, fn){
   return fn(n1, n2);
}

l
// let result = cal2(4,5, plu)
// // result = cal2(4,5, min)
// // result = cal2(4,5, mul)
// // result = cal2(4,5, div)
// console.log(result);


//===========QUIZ callback 실습===================================

console.log('-------------');
console.log(cal2(1 , 5, (n1, n2)=> {return n1 + n2}));
console.log(cal2(1 , 5, (n1, n2)=> n1 + n2));

cal2(2 , 6 , function (n1, n2){return n1 + n2});
cal2(3 , 7 , function (n1, n2){return n1 * n2});

//=====
let result = cal2(5, 4, add)
result = cal2(5, 4 ,(n1, n2) => { return n1+n2})
result = cal2(8, 4, (n1, n2)=> n1 - n2)
result = cal2(1,2, function(n1,n2){return n1 *n2; })
//===============================================================


