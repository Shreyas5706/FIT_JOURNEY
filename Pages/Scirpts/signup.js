
function validateForm() {
    let  email = document.querySelector("#email");
    let  password = document.querySelector("#password");
    let  username = document.querySelector("#username");
    let  confirm_password = document.querySelector("#con-pass");
    if(username.value.trim() === ""){
        alert("Please enter your username");
    } else if(password.value.trim() === ""){
        alert("Please enter your password");
    } else if(email.value.trim() === ""){
        alert("Please enter your email");
    } else if(!validateEmail(email.value.trim())){
        alert("Invalid email address");
    } else if(confirm_password.value.trim() === ""){
        alert("Please re-enter your password to confirm");
    } else if(password.value.trim() !== confirm_password.value.trim()){
        alert("Passwords do not match");
    } else {
        console.log("Form is valid!");
        window.location.href = "login.html";
    }
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});