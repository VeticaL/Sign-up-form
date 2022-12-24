let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let submit = document.querySelector(".submit");
let msg = document.querySelector("p")

submit.addEventListener("click", function() {
    if (password.value === confirmPassword.value & password.value != "") {
        msg.innerHTML = "Account Created!"
    } else if (password.value != confirmPassword.value) {
        msg.style.color = "red";
        msg.innerHTML = "Passwords do not match!"
    } else {
        msg.innerHTML = "Fill in the details"
    }
});

