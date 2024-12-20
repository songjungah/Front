// [지문1]
let num1 = Number(prompt(`점수1 : `));
let num2 = Number(prompt(`점수2 : `));
let num3 = Number(prompt(`점수3 : `));
let sum = num1 + num2 + num3

if(sum >= 90) {
    console.log(`성공`);
} else {
    console.log(`실패`);
}


// [지문2]
let num4 = Number(prompt(`정수 : `));
let num5 = Number(prompt(`정수 : `));

if(num4 > num5) {
    console.log(num4);
} else if(num5 > num4) {
    console.log(num5);
} else {
    console.log(`동일한 수 입력 X`);
}


// [지문3]
let num6 = Number(prompt(`정수 : `));
let num7 = Number(prompt(`정수 : `));
let num8 = Number(prompt(`정수 : `));

if(num6 > num7 && num6 > num8) {
    console.log(num6);
} else if(num7 > num6 && num7 > num8) {
    console.log(num7);
} else if(num8 > num6 && num8 > num7){
    console.log(num8)
} else {
    console.log(`동일한 수 입력 X`);
}


// [지문4]
let number1 = Number(prompt(`정수1 값 입력 : `));
let number2 = Number(prompt(`정수2 값 입력 : `));
let number3 = Number(prompt(`정수3 값 입력 : `));

let numbers = [number1, number2, number3];

if(number1 == number2 || number2 == number3 || number1 == number3) {
    console.log(`같은 수가 입력됐습니다.`);
} else { // 여기는 정답 요청
    let ascending = numbers.slice().sort((a, b) => a - b);
    console.log("오름차순 정렬: " + ascending);

    let descending = numbers.slice().sort((a, b) => b - a);
    console.log("내림차순 정렬: " + descending);
}



// [지문5]
let score = Number(prompt(`점수 : `));

if(score >= 90) {
    console.log(`A등급`);
} else if(score >= 80) {
    console.log(`B등급`);
} else if(score >= 70) {
    console.log(`C등급`);
} else {
    console.log(`재시험`);
}


// [지문6]
let id = prompt(`아이디 입력 : `);
let pwd = Number(prompt(`비밀번호 입력 : `));

if(id == `admin` && pwd == 1234) {
    console.log(`로그인 성공`);
} else {
    console.log(`로그인 실패`);
}


// [지문7]
let fruitList = [ '바나나' , '사과' ]
let newFruit = prompt(`새로운 과일 값 : `);

if(fruitList.includes(newFruit)) {
    console.log(`이미 존재하는 과일입니다`);
} else {
    fruitList.push(newFruit);
    console.log(fruitList);
}


// [지문8]
let idNum = prompt(`주민등록번호를 입력하세요 : (ex 241218 - 2121212)`);
let genderNum = idNum.charAt(7);

let colorNum;
if (genderNum == `1` || genderNum == `3`) {
    colorNum = 'blue';
} else if(genderNum == `2` || genderNum == `4`) {
    colorNum = 'red';
} else {
    console.log(`주민번호를 잘못 입력했습니다.`);
}

console.log(colorNum);


// [지문9]
let rock = 0;
let scissors = 1;
let paper = 2;

let player1 = Number(prompt(`0(주먹), 1(가위), 2(보) 중 고르시오 : `));
let player2 = Number(prompt(`0(주먹), 1(가위), 2(보) 중 고르시오 : `));

if(player1 === player2) {
    console.log(`무승부`); 
} else if(player1 === 0 && player2 === 1 || player1 === 1 && player2 === 2 || player1 === 2 && player2 === 0) {
    console.log(`player1 승리`);
} else if(player2 === 0 && player1 === 1 || player2 === 1 && player1 === 2 || player2 === 2 && player1 === 0) {
    console.log(`player2 승리`);
}


// [지문10]
let sheetList = [ 'O' , 'X' , 'O' ]

let sheetNum = Number(prompt(`좌석 번호를 입력해주세요.(0, 1, 2) : `));
if(sheetNum < 0 || sheetNum > 2) {
    console.log(`번호를 다시 입력하세요.`);
} else {
    if(sheetList[sheetNum] === 'X') {
        console.log(`예약 성공`);
    } else if(sheetNum[sheetNum === 'O']) {
        console.log(`예약 실패`);
    }
}


// [지문11]
let carArray = [ '250어7142' , '142가7415' ] 
let locationArray = [ 'A1' , 'B3' ]

let carNum = prompt(`차량 번호를 입력하세요. : `);

let carIndex = carArray.indexOf(carNum);

if(carIndex != -1) {
    console.log(`차량위치는 ${locationArray[index]} 에 있습니다.`);
} else {
    console.log(`차량이 존재하지 않습니다.`);
}