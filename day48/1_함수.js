// [1] 함수 정의하기
function myFunc(x, y) {
    console.log('myFunc 실행');
    return true;
}

// [2] 함수를 실행하기
let result = myFunc(3, 5);
console.log(result);

console.log(myFunc(7,3));

// [3] 수학 1차함수 정의/만들기
function 함수1차(a, b, c) {
    let result = (a*b) + c;     // 1차 함수
    return result;
}

// [4] 1차함수 실행하기
let result2 = 함수1차(3, 2, 7);
console.log(result2);

// [5] 믹서기 함수 정의/만들기
function mixFunc(fruit) {
    let result = fruit + "쥬스"
    return result;
}

// [6] 믹서기 함수 만들기
console.log(mixFunc('바나나'));
console.log(mixFunc('딸기'));


// [실습1] prompt() 함수로 두개의 정수를 입력받아
// (정의한) 덧셈함수에 입력받은 값을 전달하여 결과를 출력하시오

// (1) 덧셈함수 만들기, 매개변수 x,y 2개, 반환값은 두 매개변수를 더한 값
function 덧셈함수 (x, y) {
    let result = x + y;
    return result;
}

// (2) 뎃셈 함수 사용/호출
console.log(덧셈함수(3, 5));
console.log(덧셈함수(10, 5))

// (3) 입력받은 값을 함수의 인수로 사용
let num1 = Number(prompt(`정수1 입력 : `));
let num2 = Number(prompt(`정수2 입력 : `));

console.log(덧셈함수(num1, num2));


// [실습2] 앞전에 작성한 실습에서 뺄셈함수, 곱셈함수 를 구현하시오
function 뺄셈함수 (x, y) {  // [메소드정의] : function 함수명() {로직; return 반환값}
    let result2 = x - y;
    return result2;
}

let num3 = Number(prompt(`정수1 입력 : `));
let num4 = Number(prompt(`정수2 입력 : `));

console.log(뺄셈함수(num3, num4))


function 곱셈함수 (x, y) {
    let result3 = x * y;
    return result3
}

let num5 = Number(prompt(`정수1 입력 : `));
let num6 = Number(prompt(`정수2 입력 : `));

console.log(곱셈함수(num5, num6));