const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    // 이벤트가 발생했을 때 해당 객체를 지정하여 그것의 부모 태그 지정 -> 어떤 요소 클릭되었는지 알 수 있음
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); // html에 태그를 생성
    const span = document.createElement("span");
    li.appendChild(span); // 부모노드의 자식 노드 리스트 중 마지막 자식으로 붙인다
    span.innerHTML = newTodo;

    const button = document.createElement("button");
    button.innerText = "✅";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    //form 태그에서의 event는 submit을 발생시키고, 브라우저는 기본값으로 설정되어
    //있는 새로고침을 하게 되는데 원치 않기 때문에 기본값을 없애준다
    event.preventDefault();
    const newTodo = toDoInput.value; // 입력값을 newTodo라는 변수에 저장
    toDoInput.value = ""; // 값을 입력하고 엔터를 누르면 입력값 사라지게
    paintToDo(newTodo); // 저장한 입력값을 투두리스트에 그리기
}

toDoForm.addEventListener("submit", handleToDoSubmit);