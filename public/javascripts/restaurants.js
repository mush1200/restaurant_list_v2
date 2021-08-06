const form = document.querySelector('#form')
form.addEventListener('submit', function onFormSubmitted(event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
    alert('請填寫正確')  //驗證不通過，就跳 alert
  }
})

const submitButton = document.querySelector('#submit-btn')
submitButton.addEventListener('click', function onSubmitButtonClicked(event) {
  form.classList.add('was-validated')
})