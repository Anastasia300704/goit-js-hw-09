let formData = {
    email: "",
    message: ""
};


const form = document.getElementById('feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;


function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}


form.addEventListener('input', (event) => {
 
    formData[event.target.name] = event.target.value.trim(); // Використовуємо trim()
   
    saveToLocalStorage();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

   
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

   
    console.log(formData);

   
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    form.reset();
});


loadFromLocalStorage();
