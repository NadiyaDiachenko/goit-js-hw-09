// console.log("Form");

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input[name='email']");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", handleInput);

checkLocalStorage();

function handleSubmit(event){
    event.preventDefault();

    const currentFormState = getFeedbackFormState();
console.log(currentFormState);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)

}

function handleInput(event){
    const el = event.target
    const elName = el.name;
    const elValue = el.value.trim()

    const previousFormState = getFeedbackFormState()
    const newFormState = JSON.stringify({...previousFormState, [elName]: elValue})

    localStorage.setItem(STORAGE_KEY, newFormState);
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


