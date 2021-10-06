const inputIsValid = (input, form) => {
  const errorContainer = form.querySelector(`.${input.name}-error`)
  if (!input.validity.valid) {
    errorContainer.textContent = input.validationMessage
    input.classList.add('input__error');
  } else {
    errorContainer.textContent = '';
    input.classList.remove('input__error');
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
  const form = document.querySelector(config.formSelector)
  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log('Отправлено')
  })
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  inputs.forEach(input => {
    input.addEventListener('input', (evt) => {
      inputIsValid(input, form)
      enableButtonIfFormIsValid(inputs, config.buttonSelector, form)
    })
  })
}
