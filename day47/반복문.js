
// [1] 반복문을 사용하는 이유
    // 1. 반복되는 코드를 간소화하기 위해서
console.log(`안녕하세요.`);
console.log(`안녕하세요.`);
console.log(`안녕하세요.`);
console.log(`안녕하세요.`);
console.log(`안녕하세요.`);

    // 2. 
for(let i = 0; i <= 5; i++) {
    // i는 1부터 5이하까지 1씩 증가 반복
    console.log(`안녕하세요`);
}


// [2] 반복문 사용시 중요한 부분, 반복문이 없을 때로 구상

// 1. 1부터 5까지 출력하시오. (반복문이 없을 때)
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
    // 1. 반복되는 코드                 : console.log()
    // 2. 반복되지 않는 코드            : 1 2 3 4 5
    // 3. 반복되지 않은 코드에 패턴/규칙 : 1부터 5까지 1씩 증가하는 규칙

// 2. 1부터 5까지 출력하시오. (반복문이 있을 때)
for( let value = 1; value <= 5; value++) {
    // value는 1부터 5이하까지 1씩 증가 반복
    console.log(value);
}


// [3] 1부터 10까지 누적합계(모두 더한 값) 를 계산해서 출력하시오.
    // 1. 반복문이 없을 때
let sum = 0;        // 총 합계 변수
sum = sum + 1; 
sum = sum + 2;
sum = sum + 3;
sum = sum + 4;
sum = sum + 5;
sum = sum + 6;
sum = sum + 7;
sum = sum + 8;
sum = sum + 9;
sum = sum + 10;
    // 1. 반복되는 코드 : sum = sum +
    // 2. 반복되지 않는 코드 : 1 2 3 4 5 6 7 8 9 10 let sum = 0
    // 3. 반복되지 않는 코드에 패턴/규칙 : let sum = 0
    // 1 2 3 4 5 6 7 8 9 10 : 1부터 10까지 1씩 증가
let sum2 = 0;       // 총 합계 변수
for(let value = 1; value <= 10; value++) {
    sum2 = sum2 + value;
}
console.log(sum2);


// [4] 구구단의 2단을 출력하세요.
    // 1. 반복문 없을 때
console.log(`2 X 1 = ${ 2*1 }`);
console.log(`2 X 2 = ${ 2*2 }`);
console.log(`2 X 3 = ${ 2*3 }`);
console.log(`2 X 4 = ${ 2*4 }`);
console.log(`2 X 5 = ${ 2*5 }`);
console.log(`2 X 6 = ${ 2*6 }`);
console.log(`2 X 7 = ${ 2*7 }`);
console.log(`2 X 8 = ${ 2*8 }`);
console.log(`2 X 9 = ${ 2*9 }`);

    // 2. 반복문 사용
    // 반복되는 코드 console.log(`2 X = { 2* }`)
    // 반복되지 않는 코드 : 1 2 3 4 5 6 7 8 9
    // 반복되지 않는 코드의 규칙/패턴 : 1부터 9까지 1씩 증가 반복

for( let num = 1; num <= 9; num++) {
    console.log( `2 X ${num} = ${2*num}` );
}


// [5] 구구단 전체를 출력하세요.
    // 단 규칙 : 2부터 9까지 1씩 증가 반복
    for( let 단 = 2; 단 <= 9; 단++) {
        console.log(단);
    }
    // 곱 규칙 : 1부터 9까지 1씩 증가 반복
    for( let 곱 = 1; 곱 <= 9; 곱++) {
        console.log(곱);
    }

// 구구단이란? 1. 단마다 곱 계산인지? O     2. 곱마다 단 계산인지? X
    // for 문의 중첩 : 상-하관계, 단 for 문에 곱 for 문을 포함
for( let 단 = 2; 단 <= 9; 단++) {
    for (let 곱 = 1; 곱 <= 9; 곱++) {
        console.log(`${단} X ${곱} = ${단*곱}`)
    }
}

for( let num1 = 2; num1 <= 9; num1++) {
    for( let num2 = 1; num2 <= 9; num2++) {
        console.log(` ${num1} X ${num2} = ${num1 * num2}`);
    }
}


// [6] 간단한 직삼각형 출력하시오.
/*              줄      별
    *           1       1
    **          2       1 2
    ***         3       1 2 3 
    ****        4       1 2 3 4 
    *****       5       1 2 3 4 5
    - 줄패턴 : 1부터 5까지 1씩 증가
    - 별패턴 : 1부터 현재 줄 수 까지 1씩 증가
        -> 줄마다 별을 출력하는지? O 별마다 줄을 출력하는지? X
*/
let outHTML = '';
for(let line = 1; line <= 5; line++) {              // 1. 줄 for문
    for(let star = 1; star <= line; star++) {       // 2. 별 for문
        outHTML += `★`;
    }
    outHTML += `</br>`
} // for end

let body마크업객체 = document.querySelector('body');    // 선택자의 마크업을 JS 객체로 반환
body마크업객체.innerHTML = outHTML;     // JS 마크업 객체 내 HTML 삽입/대입


// [7] 배열과 반복문 관계
let 과일배열 = ['사과', '포도', '딸기'];
    // 과일 배열내 모든 요소를 하나씩 출력하세요.
    console.log(과일배열[0]);
    console.log(과일배열[1]);
    console.log(과일배열[2]);

    // 반복문, 반복되는 console.log(과일배열[]); , 반복되지 않는 0 1 2
    for( let index = 0; index <= 2; index++) {
        console.log(과일배열[index]);
    }

    for( let index = 0; index <= 과일배열.length-1; index++) {
        console.log(과일배열[index]);
    }


// [8] 반복문 주요 키워드
// (1) continue;
for(let i = 1; i <= 5; i++) {   // i는 1부터 5이하까지 1씩 증가 반복
    if(i == 3) {
        continue;   // i 가 3이면 증감식으로 이동해, 아래코드가 실행되지 않는다
    }
    console.log(i);     // 1 2 4 5
}    

// (2) break;
for(let i = 1; i <= 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i);     // 1 2 3 4
}