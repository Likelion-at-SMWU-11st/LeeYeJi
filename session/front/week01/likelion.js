let myName = "yeji";
console.log("바꾸기 전의 이름은 " + myName);

myName = "LEE";
console.log("바꾸고 나서 이름은 " + myName);

//boolean 사용하기
//const amIStudent = true; // "true"라고 작성하면 true라는 문자열이 됨
//console.log(amIStudent);

//null 사용하기
const amIStudent = null; //"null"이라고 작성하면 null이라는 문자열이 됨
console.log(amIStudent);

//undefined
let likelion;
console.log(likelion);

// null : 변수에 아무것도 없는 상태로 채워주는 것
// undefined : 값이 아예 존재하지 않는 것

const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];
console.log(daysOfWeek[5]);
daysOfWeek.push("sun"); // array에 항목 추가하기
console.log(daysOfWeek);

const my = {
    name : "yeji",
    sayHello : function(){
        console.log("Hello!")
    },
    age : 22,
    major : "IT",
    amIBoy : false,
};
console.log(my);
console.log(my.name);
console.log(my.amIBoy);
// 속성 바꾸기
my.major = "likeLion";
console.log(my);
// 속성 추가하기
my.height = 171;
console.log(my);
// 속성 바꾸기2
my.height = my.height + 10;
console.log(my.height);

//함수
function sayHello(name){
    console.log("Hello! my name is " + name);
}
sayHello('yeji');
sayHello('leeeyez');
sayHello('mutsa');

console.log(my.name);
my.sayHello();

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(24);
console.log(krAge);

age = parseInt(prompt("How old are you?"));
if(isNaN(age)){
    console.log("Please write a number");
}
console.log(age);
console.log(typeof age);

const topic = document.getElementById("topic");
console.dir(topic);

//querySelector를 이용해서 원하는 요소 데려오기!
const content = document.querySelector("div.content h1");

//클릭했을 때 작동할 함수를 만들어주기
function handleContentClick(){
    //content의 style 중 color를 orange로 바꿔주기
    content.style.color="orange";
}

//content를 클릭했을 때의 이벤트를 listen 후, handleContentClick이라는 함수를 자바스크립트에서 실행시키도록
content.addEventListener("click",handleContentClick);