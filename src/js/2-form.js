
let formData = {
  email: "",
  message: ""
};


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');


const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email || '';
  messageTextarea.value = formData.message || '';
}

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


form.addEventListener('submit', (event) => {
  event.preventDefault();


  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
  form.reset();
});

