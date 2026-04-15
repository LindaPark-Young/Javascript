//구구단의 단을 매개변수로 전달받아
//출력하는 함수를 정의하고 호출하시오.
//for(let dan =2; dan <10; dan++) {
//    console.log(`======${dan}단=====`);
//     for(let num = 1; num <10; num++){
//         const result = `${dan} x ${num} = ${dan * num}`;
//         console.log(result);
       
//     }
//     //console.log(`---------------`);
// }
// console.log(`---------------`);

function gugudan (dan){
    console.log(`======${dan}단=====`);
  for(let i= 1; i < 10; i++) {
    const result = `${dan} x ${i} =${dan * i}`;
    console.log(result);
  }
}
gugudan(5);