// [1] 변수 선언
let value1;
console.log(value1);

// [2] 변수 값 초기화
let value2 = 10;
console.log(value2);

// [3] 변수 값 호출
value2;     // 변수값 호출
console.log(value2);    // 변수값 호출하고 콘솔에 출력한다.

// [4] 변수 값 수정
value2 = 30;    // 특정 변수의 새로운 값 대입(변수는 하나의 값만 저장한다.)
console.log(value2);    // 30

// [5] 변수의 연산(계산)
let value3 = value2 + 100;      // value2(30) + 100 => 130
console.log(value3);

// [6] 상수 선언 > ★주의할 점 : 무조건 초기화를 한다.
const value4 = `유재석`;

// [7] 상수 값 호출
console.log(value4);

// [8] 상수 값 수정
// value4 = `강호동`;       // Assignment to constant variable.

// [9] 상수 연산[계산]
const value5 = value4 + `님 안녕하세요.`;
console.log(value5);



// 실습1 : prompt() 함수로 하나의 점수를 입력 받아서(변수에 저장한 후)
// console.log() 함수로 console 탭에 출력하시오.
// prompt('[실습] 점수를 입력하세요.');    // (1) 입력받기

// (1) 입력받은 값을 반환받아 (2) 변수에 대입
// let score1 = prompt('[실습] 점수를 입력하세요.');

// (1) 입력받은 값을 반환받아 (2) 변수에 대입
let score1 = prompt('[실습] 점수를 입력하세요.');

// (3) 출력함수에 출력할 변수명(상징적인 이름) 작성하여 변수가 갖는 값 호출한다.
console.log(score1);      
// *컴퓨터 기본적인 프로세스(절차) : 1. 입력 2. 처리 3. 출력


// 실습2 :
// prompt() 함수로 국어점수와 수학점수를 각각 입력받아서 (변수에 저장한 후)
// console.log() 함수에 총점과 평균을 각 출력하시오.

// [1] 입력
let korNum = Number(prompt(`국어 점수를 입력하세요.`));
let mathNum = Number(prompt(`수학 점수를 입력하세요.`));

// [2] 처리
let sum = korNum + mathNum;
let avg= sum / 2;
console.log("총점 : ", sum);
console.log("평균 : ", avg);