const nameForm =  document.getElementById("name_form");
const nameInput = document.querySelector("#name_form input");
const nameDisplay = document.getElementById("name_display");

// add name
function onLoginAgent(event){
    event.preventDefault();
    // localStorage add
    const username = nameInput.value;
    nameForm.classList.add("hidden");
    localStorage.setItem("username", username);
    // display Agent name
    displayName(username);
}

// display name
function displayName(username){
    nameDisplay.innerText =`${username}_Agent`;
    nameDisplay.classList.remove("hidden");
}

// check localStorage name
const checkUsername = localStorage.getItem("username");

if(checkUsername === null){
    //display nameform
    nameForm.classList.remove("hidden");
    nameForm.addEventListener("submit", onLoginAgent);
}else{
    //display Agent name
    displayName(checkUsername);
}