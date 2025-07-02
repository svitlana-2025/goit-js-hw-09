const form = document.querySelector("form");//import refs
const localStorageKey = "feedback-form-state";//import KEY

const data = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};//import localStorage.getItem


form.elements.email.value = data.email ? data.email.trim() : "";
form.elements.message.value = data.message ? data.message.trim() : "";



form.addEventListener("input", handleInput);
function handleInput(event) {

    data.email = event.currentTarget.elements.email.value.trim();
    data.message = event.currentTarget.elements.message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(data));//import localStorage
   
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    
    event.preventDefault();
    const messageField = event.currentTarget.elements.message.value.trim();
    const emailField = event.currentTarget.elements.email.value.trim();

    if (!(messageField && emailField)) {
        alert("Fill all fields!")
        return
     
    }
    console.log(data);
    localStorage.removeItem(localStorageKey);// import localStorage.removeItem
    form.reset();

}
