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
    console.log(`무승부`);
}


// [지문3]
