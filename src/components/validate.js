const inputIsValid = (input, form, errorClass) => {
  const errorContainer = form.querySelector(`.${input.name}-error`)
  if (!input.validity.valid) {
    errorContainer.textContent = input.validationMessage
    input.classList.add('input__error');
  } else {
    errorContainer.textContent = '';
    input.classList.remove(errorClass);
  }
}

const enableButtonIfFormIsValid = (inputs, buttonSelector, form) => {
  const button = form.querySelector(buttonSelector)
  const formIsValid = inputs.every(input => input.validity.valid)
  if (formIsValid) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', 'disabled')
  }
}

export const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      console.log('Отправлено')
    });
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    inputs.forEach(input => {
      input.addEventListener('input', (evt) => {
        inputIsValid(input, form, config.errorClass)
        enableButtonIfFormIsValid(inputs, config.buttonSelector, form)
      })
    });
  })
}

export function clearValidation(form) {
  Array.from(form.querySelectorAll('input')).forEach((input) => {
    input.classList.remove('input__error');
    input.value = '';
    form.querySelector(`.${input.name}-error`).textContent = '';
  });
}
