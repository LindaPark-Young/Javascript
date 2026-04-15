// for (let i = 0; i < 10; i++){
//     if (i ==2) {
//         break;
//     }
//     console.log(`${i} was executed!`);
// }


// for (let i = 0; i < 10; i++){
//     if (i ===2) {
//         continue;
//     }
//     console.log(`${i} was executed!`);
// }
let age = 0;
while ( age < 5) {
    age +=1;
    if (age ===2) {
        continue;
    }
    console.log(`${age}살입니다.`);
}