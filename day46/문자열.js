// [1] 문자열
// "유재석"
// '유재석'
// `유재석`

// [2] '작은따옴표와 "큰따옴표 출력하는 방법
console.log("유재석'강호동'");
console.log('유재석"강호동"');  
console.log(`'유재석'"강호동"`)

// [3] 문자열과 문자열 혹은 변수값 연결
let age = 40;
console.log(`나이 : ` + age);       // `문자열` + 변수값 > 나이 : 40
console.log(`나이 : ${age}`);       // `문자열${변수호출}` > 나이 : 40 ★권장!

// [4] JS의 문자열을 html에 출력하기
// let body마크업객체 = document.querySelector('body')
// console.log(body마크업객체);    // head 에 script 가 있으면 null 이 나옴

// body마크업객체.innerHTML = `<h3>안녕</h3>`
// body마크업객체.innerHTML = `<h3> 나이 : ${age} </h3>`;

// [5] 두명의 직워명을 임의로 변수에 대입하고 html 의 ol 마크업에 출력하시오
let 직원명1 = `유재석`;
let 직원명2 = `강호동`;
let ol마크업객체 = document.querySelector('ol');
console.log(ol마크업객체);
ol마크업객체.innerHTML = `<li> ${직원명1} </li> <li> ${직원명2} </li>`

// [6] input 으로 부터 입력받은 값을 JS 로 가져오기(onclick 이벤트 함수)
let input마크업객체 = document.querySelector('input');
console.log(input마크업객체);


// 실습1 : 두개의 정수를 prompt 로 입력받아서 합계를 HTML <div>에 출력하시오.
let num1 = Number(prompt(`숫자 입력1 : `));
let num2 = Number(prompt(`숫자 입력2 : `));
let sum = num1 + num2;

let div마크업객체 = document.querySelector('div');      // div 마크업을 JS 객체로 요청
div마크업객체.innerHTML = `총합계 : ${ sum }`;

