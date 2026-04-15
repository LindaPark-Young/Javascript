//함수 정의 반환값
//중간의 결과를 반환
// function sayHello2(name) {
//    return `Hello ${name}`;
// }
// let greeting = sayHello2('RM');
// console.log(greeting);
// console.log(sayHello2('morning'));


function sayHello3(name) {
    console.log('함수시작');
    return;
    console.log('실행안됨');
}
greeting = sayHello3('RM');
console.log('greeting');
//return문이 없는 함수도 undefined를 반환