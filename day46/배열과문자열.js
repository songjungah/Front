// [1] 배열변수 선언
let pointArray = [100, 50, 30];

// [2] 배열변수의 전체 요소 호출
console.log(pointArray);

// [3] 특정한 위치의 요소 호출
console.log(pointArray[1]);         // 두번째 위치한 50 호출

// [4] 배열의 전체 요소 수정
pointArray = [`유재석`, `강호동`, `신동엽`]
console.log(pointArray);

// [5] 배열의 특정 요소 값 수정
pointArray[1] = `강호동2`;
console.log(pointArray);        

// [6] 배열의 요소 추가/삽입
pointArray.push(`서장훈`);  
console.log(pointArray);

pointArray.splice(1, 0, `하하`);        // 2번째 인덱스에 하하라는 인덱스를 추가한다.
console.log(pointArray);

// [7] 배열의 특정 인덱스 요소 삭제
pointArray.splice(1, 1);        // 두번째 요소부터 1개 삭제
console.log(pointArray);
pointArray.splice(0, 3);
console.log(pointArray);

// [8] 배열 내 특정 값 찾기
let searchIndex = pointArray.indexOf(`서장훈`);
console.log(searchIndex);

searchIndex = pointArray.indexOf(`유재석`);
console.log(searchIndex);       // 찾을 값인 유재석은 존재하지 않으므로 -1
                                // 찾을 값이 존재하면 0

searchIndex = pointArray.includes(`서장훈`);
console.log(searchIndex);       // true

searchIndex = pointArray.includes(`유재석`);
console.log(searchIndex);       // false



// 실습1 : 임의의 점수 3개를 하나의 배열로 저장하시오.
//         배열내 점수들의 합계와 평균을 console.log() 에 출력하시오. 반복문 없이 계산하기.
let random = [30, 50 ,70];

// 합계
let sum = random[0] + random[1] + random[2];
console.log(sum);

// 평균
let avg = (random[0] + random[1] + random[2]) / 3;
console.log(avg);


// 실습2 : 새로운 학생명을 prompt() 로 입력받아 학생목록 내 이미 존재하면 true 아니면 false 를
//         console.log() 로 출력하시오.
// let 학생목록 = [`유재석`, `강호동`, `신동엽`]
let students = [`유재석`, `강호동`, `신동엽`];

// 새로운 학생명 입력받기
let newstudent = prompt(`학생명 : `);

// 입력받은 새로운 학생명이 배열내 존재여부 판단 - indexOf 나 includes 사용

let result = students.includes(newstudent);
console.log(result);