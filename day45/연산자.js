// [1] 산술연산자
console.log(10 + 3);    // 13
console.log(10 - 3);    // 7
console.log(10 * 3);    // 30
console.log(10 / 3);    // 3.33333
console.log(10 % 3);    // 나눈결과 나머지 1
console.log(parseInt(10 / 3));  // 3, parseInt(값) : 소수점 버리고 정수만 반환함수
console.log(`점수 : ` + 10);    // 덧셈이 아닌 연결된다. "점수 : 10"


// [2] 비교연산자
console.log(10 > 3);    // 초과 true
console.log(10 >= 3);   // 이상 true
console.log(10 < 3);    // 미만 false
console.log(10 <= 3);   // 이하 false
consol.log(10 == 3);    // false
console.log(10 != 3);   // true
console.log(10 === "10");   // false
console.log(10 !== "10");   // true


// [3] 관계연산자
console.log(10 > 3 && 20 > 10);     // true
console.log(10 > 3 && 20 > 30);     // false
console.log(10 > 3 || 20 > 10);     // true
console.log(10 > 3 || 20 > 30);     // true
console.log(!(10 > 3));             // 10은 3보다 크지않다. false


// [4] 복합대입연산자
let param = 10;     // =, param 변수에 10값을 대입한다.
param += 3;         // +=, param 변수에 3을 누적한다. 
param -= 5;         // -=, param 변수에 5를 뺀 누적 합계를 한다.


// [5] 증[가]감[소]연산자
let age = 40;
console.log(age++);     // 후위증가
console.log(age);       // 41
console.log(++age);     // 선위증가
console.log(age);       // 42
console.log(age--);     // 후위감소
console.log(age);       // 41
console.log(--age);     // 선위감소
console.log(age);       // 40


// [6] 삼항 연산자
let score = 80;
// 조건 ? true 일때 코드 : false 일때 코드
let result1 = score >= 80 ? "합격" : "불합격";

let result2 = score >= 80 ? "합격" : score >= 70 ? "재시험" : 불합격;

