
// 단축평가 안쓸려면 if 사용하면 되지만 훨씬 간결하다


// console.log(true && 'hello');
// console.log(false && 'hello');

// console.log(true || 'hello');
// console.log(false || 'hello'); 

/* hello
   false
   true
   hello  */

//    let userName = ''; 
//    let displayName = userName || 'Guest';
//    console.log(displayName); 
// let isLoggedIn = true;
// let userProfile = {name: 'Alice'};
// isLoggedIn && console.log(userProfile.name);


// isLoggedIn = false;
// isLoggedIn && console.log(userProfile.name);

//=========null병합연산자============
//null 이냐 undefined 냐를 따짐



//객체분해
// const user = {
//     name: 'RM',
//     age: 30,
// };

// //기존방식
// const name1 = user.name;
// const age1 = user.age;

// //객체 분해 방식
// const { name, age } = user;

// console.log(name);
// console.log(age);

//=========================
//객체분해 alias 별칭을 지원한다 

//  const user1 = {
//     name: 'RM',
//     age: 30,
//  };

//  const { name: userName, age: userAge} = user1;
//  console.log(userName); //RM   
//  console.log(userAge);  //30
//
//==================================
//객체 매개 변수
// function userInfo(user) {
//      console.log(`${user.name} - ${user.age}`);
// }
// userInfo({ name:'RM', age: 30});

// function printUser({name, age}){
//     console.log(`${name} - ${age}`);
// }
// printUser({ name:'RM', age: 30});
//
//====Spread 연산자 ======
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; //1 2 3
// console.log(...arr1);

// const person = { name: 'RM', age:20};
// const copy = { ...person}; //{ name: 'RM', age: 20 }
// console.log(copy);

// const user = { name: '손흥민', age: 20};
// const newUser = { ...user, age:21 }; // { name: '손흥민', age: 21 }
// console.log(newUser);

//rest 매개변수
//
// function sum(...nums) {
//     console.log(nums);
//  }
// sum(1, 2, 3, 4, 5);

// function sum1(num1, num2, ...nums) {
//     console.log(num1);
//     console.log(num2);
//     console.log(nums);
// }
// sum1(1, 2, 3, 4, 5);
//=========문자열 조작==========
// const str = 'JavaScript';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes('script'));
// console.log(str.includes('Java'));
// console.log(str.includes('Script'));
// console.log(str.startsWith('Java'));
// console.log(str.endsWith('Script'));
// console.log(str.includes('Script'));
// console.log(str.indexOf('a'));
// console.log(str.indexOf('z'));
// console.log(str.indexOf('a'));
// console.log(str.slice(0 , 4));
// console.log(str.slice(4));
// console.log(str.replace('Script', 'script' ));
//==========================
// const str1 = 'a,b,c';
// const arr = str1.split(','); 
// console.log(arr);

//===  예외 처리 ========
// try {

// } catch (error) {

// }

// try {
//     console.log(a);
// } catch (error) {
//     console.log('에러 발생!');
// }

// try {
//     console.log('실행');
// } catch (e) {
//       console.log('에러');
// }finally {
//     console.log('무조건 실행');
// }

//=============
//error throw

try {
    throw new Error('문제 발생');
} catch (error) {
   console.log(error.message);
}

function checkAge(age){
  if (age < 18 ) {
    throw new Error('미성년자');
  }
   return '통과';
}

try {
    checkAge(15);
} catch (error) {
      console.error(error);

}

//===========================
// Javascript Module
