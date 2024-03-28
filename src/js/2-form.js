// console.log("Form");

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input[name='email']");

form.addEventListener("submit", handleSubmit);
textarea.addEventListener("input", onTextareaInput);
input.addEventListener("input", handleEmailInput);

checkLocalStorage();

function handleSubmit(event){
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)

}

function onTextareaInput(event){
    const message = event.target.value
    const previousFormState = getFeedbackFormState()
    const newFormState = JSON.stringify({...previousFormState, message})

    localStorage.setItem(STORAGE_KEY, newFormState);
}

function handleEmailInput(event){
    const email = event.target.value;
    const previousFormState = getFeedbackFormState()
    const newFormState = JSON.stringify({...previousFormState, email})

    localStorage.setItem(STORAGE_KEY, newFormState)
}

 function getFeedbackFormState() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
 
    return data
}
 

function checkLocalStorage() {
if(!getFeedbackFormState()) return;
    
const {email, message} = getFeedbackFormState()

if (email) {
    input.value = email;
}
if (message) {
    textarea.value = message
}
}


