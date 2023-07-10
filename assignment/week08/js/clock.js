//h2 태그 중에서 id값이 clock인 태그를 가져온다
const clock = document.querySelector("h2#clock");

//clock 요소의 html 내용 변경
function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //$: 템플릿 리터럴이라는 데이터 타입
    clock.innerHTML = `현재 시각은 ${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초 입니다.`;
}

// 웹사이트가 load되자마자 getClock()함수를 실행ㅎ고 또 1초마다 다시 실행
getClock();
setInterval(getClock, 1000);