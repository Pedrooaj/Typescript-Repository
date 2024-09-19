import isEmail from "validator/es/lib/isEmail";

const inputUser = document.querySelector('#username') as HTMLInputElement;
const inputEmail = document.querySelector('#email') as HTMLInputElement;
const inputPassword = document.querySelector('#password') as HTMLInputElement;
const secondPassword = document.querySelector('#password2') as HTMLInputElement;
const form = document.querySelector('#form') as HTMLFormElement;
const error = 'show-error-message';


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    hideErrorMessages(form);
    checkEmptyField(inputUser, inputEmail, inputPassword, secondPassword);
    checkEmail(inputEmail);
    checkPasswords(inputPassword, secondPassword);

    if(sendForm(form)) console.log('Formulario enviado');
    
})


function checkPasswords(password1: HTMLInputElement, password2: HTMLInputElement): void{
    if(password1.value != password2.value){
        showErrorMessage(password1, "As Senhas não batem");
        showErrorMessage(password2, "As Senhas não batem")
    }
}
function checkEmail(email: HTMLInputElement): void{
    if(!isEmail(email.value)){
        showErrorMessage(email, "Email Invalido")
    }

}

function checkEmptyField(...inputs: HTMLInputElement[]): void{
    inputs.forEach(input => {
        if(!input.value){
            showErrorMessage(input, "Este Campo não pode ficar vazio")
        }
    })
}


function hideErrorMessages(form: HTMLFormElement): void{
    form.querySelectorAll('.' + error).forEach(item => item.classList.remove());
}

function showErrorMessage(input: HTMLInputElement, msg: string): void{
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(".error-message") as HTMLSpanElement;
    errorMessage.innerHTML = msg;
    formFields.classList.add(error)
}

function sendForm(form: HTMLFormElement): boolean{
    let send = true;
    form.querySelectorAll('.' + error).forEach(() => (send = false));
    return send;
}





