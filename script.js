var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

const notMatch = document.querySelectorAll(".not-match")

function validatePasswords() {
    if (password.value === confirmPassword.value) {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        notMatch[0].textContent=''
        notMatch[1].textContent=''
    } else {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        notMatch[0].textContent="Passwords do not match";
        notMatch[1].textContent="Passwords do not match";

    }
}
