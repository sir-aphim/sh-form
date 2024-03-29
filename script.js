let passwordInput = document.getElementById("pwd");
let confirmPasswordInput = document.getElementById("confirm-pwd")
let passwordError = document.getElementById("passwordRequiredMessage");
let submitButton = document.getElementById("submitButton")

function validateForm() {
    let a = passwordInput.value;
    let b = confirmPasswordInput.value;
    
    if (a == "" && b == "") {
        passwordError.style.visibility = "visible";
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error")
    } else if (a == "") {
        confirmPasswordInput.classList.remove("error")
        passwordError.style.visibility = "visible";
        passwordInput.classList.add("error");
    } else if (b == "") {
        confirmPasswordInput.classList.add("error")
        passwordError.style.visibility = "hidden";
        passwordInput.classList.remove("error");
    } else {
        confirmPasswordInput.classList.remove("error")
        passwordInput.classList.remove("error");
        passwordError.style.visibility = "hidden";
    }
};

submitButton.addEventListener("click", validateForm)