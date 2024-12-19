// [지문1]
let kor = Number(prompt(`국어점수 : `));
let math = Number(prompt(`수학점수 : `));
let eng = Number(prompt(`영어점수 : `));

let sum = kor + math + eng;
console.log(sum);
let avg = (kor + math + eng) / 2;
console.log(avg);


// [지문2]
let radius = Number(prompt(`반지름 값 : `));
let diameter = radius * radius * 3.14;
console.log(diameter);


// [지문3]
let essence1 = Number(prompt(`실수1 값 : `));
let essence2 = Number(prompt(`실수2 값 : `));

let essenceResult = (essence1 / essence2) * 100;
console.log(essenceResult);


// [지문4]
let num1 = Number(prompt(`정수 값 : `));
console.log(
    num1 % 2 == 0 ? `true` : `false`
);


// [지문5]
let num2 = Number(prompt(`정수 값 : `));
console.log(
    num2 % 7 == 0 ? `true` : `false`
); 


// [지문6]
let id = prompt(`아이디 입력 : `);
let pwd = Number(prompt(`비밀번호 입력 : `));

console.log(
    id == `admin` && pwd == 1234 ? `true` : `false`
);


// [지문7]
let num3 = Number(prompt(`정수 값 : `));

console.log(
    num3 % 2 == 0 && num3 % 7 == 0 ? `true` : `false`
);


// [지문8]
let money = Number(prompt(`십만원 단위로 금액 입력 : `));

console.log(
    `십만원 : ` + parseInt(money / 100000) + `장`,
    `만원 : ` + parseInt((money % 100000) / 10000) + `장`,
    `천원 : ` + parseInt((money % 10000) / 1000) + `장`
);



// [지문9]
let score1 = Number(prompt(`1차 점수 입력 : `));
let score2 = Number(prompt(`2차 점수 입력 : `));

let scoreSum = score1 + score2;
console.log(
    scoreSum >= 150 ? `합격` : `불합격`
);


// [지문10]
let name1 = prompt(`이름을 입력하세요.`);
let name2 = prompt(`이름을 입력하세요.`);

console.log(
    (name1 === `유재석` ? name1 + `(방장)` : name1) + ',' +
    (name2 === `유재석` ? name2 + `(방장)` : name2)
);
