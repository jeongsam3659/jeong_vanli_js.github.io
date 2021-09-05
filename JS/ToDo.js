const toDoForm = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

let toDos = [];

// create li, span, btn and append list
function postListToDo(toDo){
    const li = document.createElement("li");
    li.id = toDo.id;
    const span = document.createElement("span");
    span.innerText = toDo.text;
    const button = document.createElement("button");

    button.innerText ="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 
}

// delete list li
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //대상의 아이디로 삭제.
    saveToDos();
}

// localStorage add
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

// localStorage get
const savedToDos = localStorage.getItem("todos");

// check list to localStroage
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(postListToDo);
}

function handleToDoSubmuit(event){
    event.preventDefault();

    const toDo = toDoInput.value;
    toDoInput.value = ""; // content init
    // set obj(text, id)
    const ToDo_obj = {
        text : toDo,
        id : Date.now(),
    };
    toDos.push(ToDo_obj);
    postListToDo(ToDo_obj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmuit);


