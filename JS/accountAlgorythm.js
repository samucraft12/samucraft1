//: Register Inputs

let registerEmail = document.getElementById("registerEmail");
let registerPassword = document.getElementById("pass");
let checkPasswordRegister = document.getElementById("checkPas");
let sumbitRegisterButton = document.getElementById("sumbitRegisterR");
let userCount = 1000;
//: Log In Inputs

let logInEmailInput = document.getElementById("logInEmail");
let logInPasswordInput = document.getElementById("logInPassword");
let remindMe = document.getElementById("remindMeInput");

//: span
let sumbitLogInButton = document.getElementById("sumbitLoginR");
let spanLi = document.getElementById("accountSpan");
let header = document.getElementById("header");

//: Now Real Coding (Register)

function checkRegisterRequirements() {

    //: Email Requirements

    if(registerEmail.value.includes("@") && registerEmail.value.length >= 5) {
        alert("It Works");
        console.log(registerEmail.value);
        console.log(registerPassword.value);
    }
    else if(registerEmail.value.length == 0 || registerEmail.value.length <= 5) {
        alert("Try Again");
    }

    //: Password Requirements

    if(registerPassword.value.length >= 15 && /\d/.test(registerPassword.value)) {
        alert("Password: It works X2");
    } 
    else {
        alert("Password: Try Again");
    }
    if(checkPasswordRegister.value == registerPassword.value) {
        alert("Password: Password Matches");
    }
    else {
        alert("Password: Password don't Matches");
    }
}
function checkLogInRequirements() {
    
    //: Email Requirements

    if(logInEmailInput.value.includes("@") && logInEmailInput.value.length >= 5) {
        alert("It Works");
        console.log(logInEmailInput.value);
    }
    else if(logInEmailInput.value.length == 0 || logInEmailInput.value.length >= 5) {
        alert("Try Again");
    }

    //: Passwords Requirements

    if(logInPasswordInput.value.length >= 15 && /\d/.test(logInPasswordInput.value)) {
        alert("Password: It works X2");
        console.log(logInPasswordInput.value);
        liHeaderVisibility();
    } 
    else {
        alert("Password: Try Again");
    }
}
let accountLi = document.getElementById("account");

function liHeaderVisibility() {
    userCount++
    spanLi.innerHTML = "<a>Welcome!</a>";
    accountLi.style.display = "block";
    accountLi.style.color = "white";
    header.style.gridTemplateColumns = "repeat(5, 1fr)"
}
