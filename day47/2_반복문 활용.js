// [문제1]
    // (1) 영화의 제목과 평점을 배열로 선언
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRating = [8, 4, 7, 6];

    // (2) HTML에 출력할 메세지 구성하기
let outHTML = `<table>`;                    // table 마크업 시작

for(let index = 0; index <= movieNames.length-1; index++) {
    // index는 0부터 마지막 인덱스까지 1씩 증가 반복
    let names = movieNames[index];          // index 번째의 영화 제목을 반환

    outHTML += `<tr> <td> ${ names } </td>`   // <tr> 마크업 시작, <td> 영화제목
        // (4) 영화평점 만큼 별 출력하기, 남은 별은 빈별
        let starHTML = '';                  // 별을 출력할 HTML 구성
        for(let star = 1; star <= 10; star++) {
            
            if(movieRating[index] >= star) {    // 만약에 평점이 star보다 이상이면 검은별 추가
                // 현재 star 보다 평점이 더 크면
                starHTML += `★`
            } else {                            // 만약에 평점이 star 보다 작으면 흰별 추가
                starHTML += `☆`
            }
        }

    outHTML += `<td> ${starHTML} </td> </tr>`   // <tr> 마크업 종료, <td> 구성은 10개의 별
}

outHTML += `</table>`                           // <table> 마크업 종료

    // (3) DOM객체를 이용한 html에 변수값 출력하기
let exampleDIV1객체 = document.querySelector('#exampleDIV1')        // 특정한 선택지의 마크업을 JS객체로 가져온다. 
exampleDIV1객체.innerHTML = outHTML;        // 가져온 마크업 객체의 innerHTML 를 이용하여 구성한 HTML를 대입한다.



// [문제2]
// (1) 좌석 상태를 저장하고 있는 배열 선언
let 좌석정보 = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석']

// (2) HTML 에서 출력할 HTML 문자열 구성하기
let seatHtml = '';
for(let index = 0; index <= 좌석정보.length-1; index++) {
    // index 는 0부터 마지막인데스까지 1씩 증가 반복, 6회

    // <div>에 index번째 값을 <span>d로 구성 / 만약에 좌석정보가 빈좌석이면 blue 예약석이면 red
    seatHtml += `<span style="color : ${좌석정보[index] == '빈좌석' ? 'blue' : 'red'}"> ${ 좌석정보[index] } </span>`
    // + 2배수 마다 줄바꿈 처리
    if((index+1) % 2 == 0) {      // 현재 인덱스 +1 했을 때 2의 배수이면
        seatHtml += `<br/>`
    }
}
// (3) 특정 html 선택자로부터 마크업 객체를 가져와서 html 대입
let exampleDIV2객체 = document.querySelector('#exampleDIV2')
exampleDIV2객체.innerHTML = seatHtml;


// [문제3]
// (1) 학생이름목록과 학생점수목록을 배열 선언
let nameArray = [ '유재석' , '강호동' , '신동엽' ]
let scores = [ 92 , 86 , 72 ]

// (2) HTML에 출력할 html 문자열 구성, HTML 에서 작성할 html 코드를 JS에서 문자열로 작성중
let studentHTML = `<table> <tr> <th> 이름 </th> <th> 점수 시각화 </th> </tr>`
for(let index = 0; index <= nameArray.length-1; index++) {
    // index는 0부터 마지막 인덱스까지 1씩 증가 반복, 3회 반복

    studentHTML += `<tr> <td> ${nameArray[index]} </td>`        // 학생명 <td> 대입

    // (4) 점수 출력
    let scoreHTML = ``;     // 동그라미 문자열을 구성하는 html 문자열
    for(let score = 1; score <= 100; score++) {
        // score 은 1부터 100까지 1씩증가 반복, 100회 반복
        
        if(scores[index] >= score) {
            // 만약에 index 번째 점수가 현재 scroe 보다 크면
            scoreHTML += `●`
        } else {
            scoreHTML += `○`
        }
    } 

    studentHTML += `<td> ${scoreHTML} </td> </tr>`      // 점수시각화 <td> 대입
}
studentHTML += `</table>`

// (3) 특정한 선택자의 마크업을 JS 객체로 가져오기
let exampleDIV3객체 = document.querySelector('#exampleDIV3')
exampleDIV3객체.innerHTML = studentHTML;        // JS에서 구성한 HTML 코드 구성