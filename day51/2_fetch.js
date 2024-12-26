// [1] fetch 함수를 이용한 GET 요청
/* 
    - fetch('요청할 URL')                     <== 자바의 컨트롤러 URL 작성
        .then(response => response.json())  <== 통신 요청 결과를 JSON 형식으로 변환
        .then(data => {실행문;})            <== 요청 결과 후 실행할 코드 작성
        .catch(error) => {실행문;})         <== 예외 발생 시 실행할 코드 작성

    - 옵션
    {
        method : 'GET'/'POST'/'PUT'/'DELETE'                <== 4중에 사용할 HTTP메소드를 작성한다. 생략시 GET 이 된다.
        headers : {'Content-Type' : 'application/json'},    <== 서버에게 보낼 자료를 json 형식으로 보내기
        body : JSON.stringify(전송할 객체),                  <== 서버에게 보낼 객체
    }
*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {console.log(data)})      // 100개의 게시믈
    .catch(error => {console.log(error)});

// [2] fetch 함수를 이용한 GET 요청, 샘플 게시물 1개 요청
fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(response => response.json())
    .then(data => {console.log(data)})      // 3번 게시물 1개
    .catch(error => {console.log(error)});

// [3] fetch 함수를 이용한 POST 요청, 임의의 게시물 저장/쓰기 요청
const board = {title : '새로운 제목', body : '새로운 내용' , userID : 1};   // 임의의 게시물 객체
const option1 = {                                       // (1) fetch 함수의 전송 옵션
    method : 'POST',                                    // 1. 전송 http 메소드 작성(GET/POST/PUT/DELETE)
    headers : {'Content-Type' : 'application/json'},    // 2. 보낼 자료의 형식 설정 application/json
    body : JSON.stringify(board)                        // 3. 보낼 자료
}
fetch('https://jsonplaceholder.typicode.com/posts', option1)
    .then(r => r.json())
    .then(data => {console.log(data)})      // {title: '새로운 제목', body: '새로운 내용', userID: 1, id: 101}
    .catch(e => {console.log(e)})

// [4] fetch 함수를 이용한 PUT 요청, 임의 게시물 수정 요청
// 1번 게시물의 수정할 정보 객체
const upBoard = {id : 1, title : '수정할 제목', body : '수정할 내용', userID : 1}
// PUT 옵션 객체
const option2 = {
    method : 'PUT',                                     // method 전송할 http 메소드 선택(GET/POST/PUT/DELETE)
    headers : {'Content-Type' : 'application/json'},    // 전송할 데이터의 타입(JSON 형식) 설정
    body : JSON.stringify(upBoard)                      // 전송할 객체를 문자열 타입으로 변환해서 보내기
}

fetch('https://jsonplaceholder.typicode.com/posts/1', option2)
    .then(r => r.json())            // 응답 결과는 json 타입으로 변환
    .then(d => {console.log(d)})    // 응답 결과가 도착했을 때
    .catch(e => {console.log(e)})   // 예외가 발생했을 때
    // 결과 : {id: 1, title: '수정할 제목', body: '수정할 내용', userID: 1}

// [5] fetch 함수를 이용한 DELETE 요청, 임의 게시물 삭제 요청
const option3 = {
    method : 'DELETE'       // method 속성은 전송할 http 메소드 선택, 삭제 요청은 DELETE 메소드
}
fetch('https://jsonplaceholder.typicode.com/posts/1', option3)
    .then(r => r.json())
    .then(d => {console.log(d)})
    .catch(e => {console.log(e)})
    // 결과 : {}




// 실습 홈페이지 : https://reqres.in/

// 실습1 > fetch 함수를 이용하여 GET 방식으로 요청하여 응답을 console에 출력하시오
// 요청 URL : 'https://reqres.in/api/users/2'
fetch('https://reqres.in/api/users/2', {method : 'GET'})    // GET 기본값이므로 생략 가능
    .then(r => r.json())                    // 응답 결과의 자료를 json 타입으로 변환
    .then(data => {console.log(data)})      // 응답 결과의 자료
    .catch(error => {console.log(error)})   // 만일 요청에 오류가 있으면


// 실습2 > fetch 함수를 이용하여 POST 방식으로 요청하여 응답을 console에 출력하시오
// 요청 URL : 'https://reqres.in/api/users'
// 보낼 데이터 {"name" : "morpheus", "job" : "leader"}
fetch('https://reqres.in/api/users', 
    {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({"name" : "morpheus", "job" : "leader"})
    }
)
    .then(r => r.json())
    .then(data => {console.log(data)})
    .catch(error => {console.log(error)})
    // 결과 : {name: 'morpheus', job: 'leader', id: '633', createdAt: '2024-12-26T12:40:55.726Z'}


// 실습3 > fetch 함수를 이용하여 PUT 방식으로 요청하여 응답을 console에 출력하시오
// 요청 URL : 'https://reqres.in/api/users/2'
// 보낼 데이터 {"name" : "morpheus", "job" : "zion resident"}
fetch('https://reqres.in/api/users/2',
    {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({"name" : "morpheus", "job" : "zion resident"})
    }
)
    .then(r => r.json())
    .then(data => {console.log(data)})
    .catch(error => {console.log(error)})
    // 결과 : {name: 'morpheus', job: 'zion resident', updatedAt: '2024-12-26T12:43:32.308Z'}


// 실습4 > fetch 함수를 이용하여 DELETE 방식으로 요청하여 응답을 console에 출력하시오
// 요청 URL : 'https://reqres.in/api/users/2'
fetch('https://reqres.in/api/users/2', {method : 'DELETE'})
    // .then(r => r.json())    // SyntaxError: Failed to execute 'json' on 'Response' 가 뜨는게 맞음
    .then(data => {console.log(data)})
    .catch(error => {console.log(error)})
