//sest 선언과 초기화
//const set  = new Set([1, 2, 3, 4, 5]);
// console.log(set);
// //사이즈 확인
// console.log(set.size);

//아이템 추가
// set.add(6);
// console.log(set);
// //중복허용하지 않음
// set.add(6);
// console.log(set);

// console.log(set.has(3));
// console.log(set.has(6));

// set.delete(6);
// console.log(set);

// set.clear();
// console.log(set);
// const item = ([1, 2, 3, 4, 5]);

// set.forEach((item) => console.log(item));
// for (const value of set.values()) {
//     console.log(value);
// }

//====Math====
// console.log(Math.abs(-10));
// console.log(Math.ceil(-1.4));
// console.log(Math.floor(1.4));
// console.log(Math.round(1.49));
// console.log(Math.round(1.5));
// console.log(Math.trunc(1.4));
// console.log(Math.trunc(1.5));
// console.log(Math.trunc(1.565465));
 //console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10) + 1);


// QUIZ --로또발생기
//숫자범위 1~45
// 
// 6일때 빠져나와야함 sort
//중복없음
// set 순서가 없음 정렬를 해야되서 array로 순서정렬
//함수로 만들어라 
//array
//set

//const set = new Set([1, 3, 4, 5, 6, 7, 8, 9, 9, 9, 2 ]);
//const array = [...set]. //중복을 허용하지 않음
//console.log(array);

//const lott = [1,2,]


// function lotto () {
//     let numbers = [];
//     while (numbers.length < 6) {
//     const num = Math.floor(Math.ramdom() * 45) + 1; //0<= x < 1 실수, 1포함이 안됨 
//     if(!numbers.includes(num)){
//     numbers.push(num);
//     }
// }
//    return numbers;
// }
// let result = lotto().sort((n1, n2) => n1 - n2);
// console.log(result);

//===================

function getLottoWithSet() {
    let numbers = new Set();
    while(numbers.size < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        numbers.add(num);
    }
    const result = [...numbers];
    return result.sort((n1, n2) => n1 -n2);
}
console.log(getLottoWithSet().join(' , '));
//https://bit.ly/483x57h
//bit.ly/47NRTiX

//===================

