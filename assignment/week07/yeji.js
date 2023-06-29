const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden"); // 요소에 hidden이라는 이름의 class 추가해주기
    const userName = loginInput.value;
    greeting.innerText = `Hello ${userName} !`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",loginSubmit);