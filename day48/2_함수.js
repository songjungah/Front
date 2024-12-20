// [1] 매개변수X , 반환값 없는 함수
function func1() {
    console.log('func1 execute');
}
func1();

// [2] 매개변수O, 반환값 없는 함수
function func2(x, y) {
    console.log(`func2 execute ${x+y}`);
} 
func2(2, 3);

// [3] 매개변수O, 반환값 있는 함수
function func3(x, y) {
    console.log(`func3 execute`)
    let result = x + y
    return result;
}
let a = func3(3, 5);    // 인수값이란 함수 호출시 전달하는 값
console.log(a);

// [4] 매개변수X, 반환값 있는 함수
function func4() {
    console.log('func4 execute');
    return 10;
}
let b = func4();
console.log(b);


// [실습1] 주어진 숫자가 홀수인지 짝수인지 반환하는 함수를 만드시오.
function isEvenOrOdd(value) {
    if(value % 2 ==0 ) {
        return "Even"
    } else {
        return "Odd"
    }
}

// 함수 실행/사용 : 함수명을 작성하고 소괄호 안에 인수값을 넣는다. 함수 실행결과 반환값을 변수에 저장한다.
let result1 = isEvenOrOdd(3);
console.log(result1);
console.log(isEvenOrOdd(4));


// [실습2] 주어진 배열에서 가장 큰수를 반환하는 함수를 만드시오.
    // 함수정의 : findMax, 매개변수 : 배열1개, 반환값 : 배열내 가장 큰 값
function findMax(arr) {
    
    let max = 0;        // 최댓값 변수 0으로 초기화
    for(let index = 0; index <= arr.length -1; index++) {
        // index 는 0부터 배열 내 마지막 인덱스까지 1씩 증가 반복
        if(arr[index] > max) {
            // 만약에 index 번째 요소가 최댓값 변수 보다 크면
            max = arr[index];       // index 번째 요소를 최댓값 변수에 대입
        }
    }
    return max;     // 배열내 가장 큰 값을 반환하는 함수
}

let array1 = [3, 5, 2, 1];
console.log(findMax(array1));

let array2 = [100, 1500, 2100, 1700];
console.log(findMax(array2));


// [실습3] 주어진 배열을 오름차순으로 정렬하여 반환하는 함수를 만드시오.
    // 함수명 : arrOrderBy(), 매개변수 : 배열1개, 반환값 : 정렬된 배열1개
function arrOrderBy(arr) {

    for(let index = 0; index <= arr.length-1; index++) {        // index 요소 : 비교기준
        // index 는 0부터 배열의 마지막 인덱스까지 1씩 증가 반복
        // for 중첩
        for(let index2 = index + 1; index2 <= arr.length -1; index2++) {    // index2 요소 : 비교할 대상
            if(arr[index] > arr[index2]) {
                // 만약에 index 번째 요소가 index2 번째 요소보다 크면
                // *스왑* : 두 변수간의 값 교환
                let temp = arr[index];
                arr[index] = arr[index2];
                arr[index2] = temp;
            }
        }
    }
    return arr;     // 반환
}

let array3 = [3, 5, 2, 1];
console.log(arrOrderBy(array3));        // [1, 2, 3, 5]


// [지문4] 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 console.log() 함수로 출력하시오.  (단] 동일한수 제외)
let value1 = 3;
let value2 = 5;
let value3 = 2;

if(value1 > value2) {   // 첫번째 값이 두번째 값보다 크면 자리바꿔
    let temp = value1; value1 = value2; value2 = temp;
} 
if(value1 > value3) {   // 첫번째 값이 세번째 값보다 크면 자리바꿔
    let temp = value1; value1 = value3; value3 = temp;
}
if(value2 > value3) {   // 두번째 값이 세번째 값보다 크면 자리바꿔
    let temp = value2; value2 = value3; value3 = temp;
}
console.log(`${value1}, ${value2}, ${value3}`);