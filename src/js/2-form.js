const inputForm = document.querySelector('.feedback-form');

const fillFormInput = () => {
  try {
    const userDataEl = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (userDataEl === null) {
      return;
    }

    for (const key in userDataEl) {
      inputForm.elements[key].value = userDataEl[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormInput();

const formFieldChange = event => {
  const userData = {
    email: inputForm.elements.email.value,
    message: inputForm.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const submitForm = event => {
  event.preventDefault();
  const userData = {
    email: inputForm.elements.email.value.trim(),
    message: inputForm.elements.message.value.trim(),
  };
  if (!userData.email || !userData.message) {
    alert('Заполните поля');
    return;
  }

  console.log(userData);
  inputForm.reset();
  localStorage.removeItem('feedback-form-state');
};
inputForm.addEventListener('input', formFieldChange);
inputForm.addEventListener('submit', submitForm);