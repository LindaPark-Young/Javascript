//====비동기 프로그래밍(Asynchronous program)===
//==동기 프로그래밍 (Synchronous programming)=====
//==== setTimeout  (매개 변수 는 2개) =====
/* setTimeout :특정 작업을 일정 시간이 지난 후에 실행하도록 예약하는 비동기 함수
n 밀리초(ms) 후에 전달된 콜백을 실행 시킵니다. */

// console.log('1번');
// setTimeout(() => {
// console.log('2번');
// }, 1000);
// console.log('3번');

//화살표 함수
// 함수바디가 한줄이면 자동 return, {} 같이 생략해야함
//const add = (a, b) => a + b;
//반환형이 객체일 경우 = () => ({namw: 'Son'});

//  function sayHello(name){
//   console.log(`'Hello ${name}' 오랜만이야~~ `);
//  }

//  const sayHello = (name) => {
//     console.log(`'Hello ${name}' 오랜만이야~~ `);
//  }




// function asyncTest(name, callback) {
//     console.log('타이머 시작');
//     setTimeout(() => {
//         callback(name);
//     }, 3000); 
// }

// function doOtherthing() {
//    for (let i = 0; i < 300; i++) {
// console.log(`${i}번째 처리`);
// }
// }
// asyncTest('뷔', sayHello);
// doOtherthing();

//===================================
//====callback 지옥 =============

// const DB = [];

// function save2DB(user, callback) {
//     DB.push(user);
//     console.log(`${user.name}님 데이터베이스에 저장 완료되었습니다.`);
//     return callback(user);
// }

// function sendEmail(user, callback) {
//     console.log(`${user.email}으로 이메일이 전송 완료되었습니다.`);
// }

// function getResult(user) {
//     return `${user.name}님 회원가입에 성공했습니다.`;
// }

// function register(user) {
//     return save2DB(user, (user) => {
//         return sendEmail(user, (user) => {
//             return getResult(user);
//         });
//     });
// }

// const result =
//     register({ name: '손흥민' , email: 'son@naver.com'});
// console.log(result);

//===== promise ==============
// 콜백의 단점을 보완하기 위해 만들어진 비동기 처리 객체



// const promise =  new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve('작업성공!');
//     } else {
//         reject('작업실패!');
//     }
// });
// promise
//    .then((result) => {
//     console.log('성공 결과:', result);
//    })
//    .catch((error) => {
//     console.error('성공 결과:', error);
//    });
//===================
// ====== Promise ====

// const p = new Promise((resolve) => {
     
//     console.log('1. Promise 실행');
//     resolve(10);
// });

//  console.log('2. 코드는 계속 실행');
 
//  p.then((num) => {
//     console.log('3. then 실행:', num);
//  });

 //==== promise 체이닝 ========
//promise 는 promise를 반환한다 그것을 promise 체인이라고 한다


// const promise = new Promise((resolve, reject) => {
// const success = true;
// if (success) {
// resolve('작업 성공!');
// } else {
// reject('작업 실패!');
// }
// });
// promise
// .then((result) => {
// console.log('성공 결과:', result);
// })
// .catch((error) => {
// console.error('실패 결과:', error);
// });

//4월10 금요일 복습
// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     if (false) {
//         resolve('작업성공!');
//     }else {
//         reject('작업 실패!');
//     }
// });
// promise
//    .then((result) => {
//    console.log('성공 결과:', result);
//    })
//    .catch((error) => {
//     console.error('실패 결과:', error);
//    });

// const p = new Promise((resolve) => {
//     resolve(10);
//     console.log('1. Promise 실행');

// });
// console.log('2. 코드 계속 실행');
// p.then((num) => {
//     console.log('3. then 실행:', num);
// });
//======

// const p1 = new Promise((resolve) => {
//     const result = 10;
//     resolve(result);
// });

// const p2 = p1.then((num) => num + 1);

// p2.then ((num) => console.log(num));
// p1.then((num) => num +1 ).then((num) => console.log(num));


//=== 즉시 성공 promise=====

// new Promise((resolve) => {
//     resolve(10);
// });


// // 아래처럼 바꿀수 있음
// Promise.resolve(10);
// //함수가 promise 하면 편하기떄문에
// function getData() {
//     return Promise.resolve('데이터');
// }
// getData().then(console.log);
// //Promise 체이닝 사용
// Promise.resolve(1)
//     .then((n) => n + 1)
//     .then(console.log);


//===즉시 실패 promise===

// Promise.reject('에러').catch(console.log);

// function checkAge(age) {
//     if (age < 18) {
//         return Promise.reject('미성년자');
//     }
//      return Promise.resolve('통과');
// }
// //checkAge(15).catch(console.log);
// //checkAge(30).then(console.log);
// //checkAge(25).then(console.log).catch(console.log);




//=== Promise -- 회원가입 1 =======


// const DB = [];

// function saveDB(user){
//     const oldDBLength = DB.length;
//     DB.push(user);
//     console.log(`${user.uname} 저장 완료되었습니다.`);
//     return new Promise((resolve, reject) => {
//         if (DB.length >  oldDBLength ) {
//             resolve(user);
//         } else {
//             reject(new Error('저장에 실패 했습니다.!'));
//         }
//     });
// }

//==== 짧게 하는 방법 
const DB = [];

function saveDB(user) {
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`${user.uname} 저장 완료되었습니다.`);
    
        if (DB.length >  oldDBLength ) {
            return Promise.resolve(user);
        } else {
            return Promise.reject(new Error('저장에 실패 했습니다.!'));
        }
    }







//====Promise -- 회원가입 2 =======

// function sendEmail(user) {
//     console.log(`${user.email}으로 이메일을 발송했습니다.`);
//      return new Promise((resolve)  => {
//          resolve(user);
//      });
// }
// function getResult(user) {
//     return new Promise((resolve) => {
//         resolve(`${user.uname}님 등록 성공했습니다.`);
//     });
// }

// //====Promise -- 회원가입3 =======
// function registerByPromise(user) {
//     const result = saveDB(user)
//     .then(sendEmail)
//     .then(getResult)
//     .catch((error) => new Error(error));
//     return result;
// }
// const myUser = { uname: '손흥민', email: 'son@naver.com' };
// const result = registerByPromise(myUser);
// result.then(console.log);

// 간단하게 하는 방법
function sendEmail(user) {
    console.log(`${user.email}으로 이메일을 발송했습니다.`);
     return Promise.resolve(user);
}
function getResult(user) {
    return Promise.resolve(user);
}


//====Promise -- 회원가입3 =======
function registerByPromise(user) {
    const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error));
    return result;
}
const myUser = { uname: '손흥민', email: 'son@naver.com' };
const result = registerByPromise(myUser);
result.then(console.log);
//===간단히 하는 방법
// function registerByPromise(user) {
//     const result = saveDB(user)
//     .then(sendEmail)
//     .then(getResult)
//     .catch((error) => new Error(error));
//     return result;
// }
// const myUser = { uname: '손흥민', email: 'son@naver.com' };
// const result = registerByPromise(myUser);
// result.then(console.log);


//==================================
//==== Promise 영화정보  ========
//http 는 요청과 응답 구성
//fetch 브라우저가 지원 url을 보냄 request 만듬 요청을 서버에서  받아서 response를 만듬==> 
//response.json(); 하면  return이됨 
//fetch실행하면서 발생하는 문제만 catch 이전에 관리

// const url = 
// 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';


// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .catch(() => {
//         console.log('요청에 실패 했습니다.');
//     })
//     .then((data) => {
//         if (!data) {
//             throw new Error('데이터가 없습니다.');
//         }
//         if (!data.articleList || data.articleList.length === 0) {
//             throw new Error('데이터가 없습니다.');
//         }
//         return data.articleList;
//     })
//     .catch((error) => {
//         console.error('에러 발생:', error.message);
//     })
//     ,then ((articles) => {
//         return articles.map((article, idx) => {
//             return { title: article.title, rank: idx + 1 };
//         });
//     })
//     .then((results) => {
//         for (let movie of results) {
//             console.log(`[${movie.rank}위] ${movie.title}`);
//         }
//     })
//     .catch((err) => {
//         console.log('<<에러발생>>');
//         console.log(err);s
//     })


//=========강사님 설명 =========
//간략하게

// const url = 
// 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';


// fetch(url)
// .then((res) => res.json()) //Promise.resolve(res.json())
// .catch((e) => console.log(e.message + '해서 요청에 실패했습니다.'))
// .then((data) => {
//     if(!data){
//         throw new Error('데이터가 없습니다.')
//     }
//     if (!data.articleList || data.articleList.length === 0){
//              throw new Error('데이터가 없습니다.')
//     }
//     return data.articleList; //promise.resolve(data.articleList)
// })

// .then((articles) => {
//  return articles.map((article, index) => ({title:article.title, rank:index+1
//     //같은 내용 return {title:article.title, rank:index+1}
//  }))//Promise([{title:'', rank:1}....{}])
// })
//  .then((movies) => {
//     for (let movie of movies) {
// console.log(`[${movie.rank}위] ${movie.title}`);
// }
  
// }) 
// .catch((e) => {
    
//     console.log(e.message);
// });

//================== async/await ========================
// 요줌 많이 쓰는 방법 
// async / await 
// 비동기 코드인데 동기 코드처럼 짤수 있게 해준다
//를 더 쉽게 다루기 위한 문법


async function func1() {
    return 'hello';
}
func1().then(console.log);

//=======
function func2() {
    return new Promise((resolve) => {
resolve('hello');
});
}

func2().then(console.log);

//========

async function func3() {
    //await 는 뒤에 오는 프로미즈가 실행완료될떄까지 기다림
    //saync함수에서만 사용가능
    let name = await func1();
    console.log(name);
}

func3();
//==================================
//====================================
// saync/await  -- 회원가입 ---

// async function registerByAsync(user) {
//     try {
//         const savedUser = await saveDB(user);
//         const emailedUser =await sendEmail(savedUser);
//         const result = await getResult(emailedUser);
//         return result;
//     } catch (error) {
//      return new Error(error);
// }
// }

// const myUser = { uname: '손흥민', email: 'son@naver.com' };
// registerByAsync(myUser).then(console.log);

//====== async/await ---영화정보 ---
//
//1. 데이터 가져오기 (fetch)
async function fetchMovieData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('요청에 실패. 상태 코드:' + response.status );
    }
    const data = await response.json();
    return data;
}

//2.데이터 검증
function validateMovieData(data) {
    if (!data.articleList || data.articleList.length === 0) {
throw new Error('데이터가 없습니다.');
}
}
//3. 영화 정보 추출
function extractMovieInfos(articleList) {
    return articleList.map((article, idx) =>({
        title: article.title,
        rank: idx + 1,
    }));
}

//4. 영화 출력
function displayMovies(movieInfos) {
    for (const movie of movieInfos) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}

const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';


async function movies() {
    try {
        const data = await fetchMovieData(url);
        validateMovieData(data);
        const movieInfos = extractMovieInfos(data.articleList);
        displayMovies(movieInfos);
} catch (err) {
     console.error('에러 발생:', err.message);
}
}
movies();
//======================================












