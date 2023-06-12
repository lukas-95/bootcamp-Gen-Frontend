let name= window.document.getElementById('nameForm')
let email = document.querySelector('#email')
let subject = document.querySelector('#subject')


nameForm.style.width = '100%'
email.style.width = '100%'
subject.style.width = '100%'

function nameValidation (){

   let txtName = document.querySelector('#txtName')
    if (nameForm.value.length < 3) {
        txtName.innerHTML = 'Invalid name 😰'
        txtName.style.color = 'red'
               
    } else {
        txtName.innerHTML = 'Valid name 😅'
        txtName.style.color = 'green'
    }

}

function emailValidation (){

    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Invalid e-mail 😰'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Valid e-mail 😅'
        txtEmail.style.color = 'green'
    }


 }