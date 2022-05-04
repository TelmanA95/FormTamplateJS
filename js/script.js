let form = document.getElementById("form")
let emailInp = document.getElementsByClassName("email")[0]
let passwordInp = document.getElementsByClassName("psw")[0]
let formInputs = document.querySelectorAll(".inputs")
let logInBtn = document.getElementsByClassName("logInBtn")
let errEmail = document.getElementById("errorEmail")
let psw = document.getElementById("errorPsw")




function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {

    let emailVal = emailInp.value
    let passwordVal = passwordInp.value
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '')
    let lowerCaseLetter = /[a-z]/g
    let uperCaseLetter = /[A-Z]/g


    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })

    if (emptyInputs.length !== 0) {
        errEmail.innerHTML = "Incorrect Email"
        psw.innerHTML = "Password cannot be empty"
        return false
    }

    if (!validateEmail(emailVal)) {
        errEmail.innerHTML = "Incorrect Email"
        emailInp.classList.add('error')
        return false
    } else {
        emailInp.classList.remove('error')
        errEmail.innerHTML = ""

    }



    if (passwordVal.length < 8 || passwordVal.length > 20) {
        psw.innerHTML = "Password must be longer than 8 and less than 20"
        passwordInp.classList.add('error')
        return false
    }

    if (!passwordVal.match(lowerCaseLetter)) {
        psw.innerHTML = "The password must contain at least one lowercase letter"
        passwordInp.classList.add('error')

        return false

    }
    if (!passwordVal.match(uperCaseLetter)) {
        psw.innerHTML = "The password must contain at least one upercase letter"
        passwordInp.classList.add('error')

        return false

    }



}





