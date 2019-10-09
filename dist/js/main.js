const form = document.getElementsByClassName('form');
const email = document.getElementById('email-error');

form[0].addEventListener('input', e => {
  if (!e.target.validity.valid) {
    e.target.classList.add('invalid');
    e.target.nextElementSibling.textContent =
      e.target.nextElementSibling.dataset.msg;
  } else {
    e.target.classList.remove('invalid');
    e.target.nextElementSibling.textContent = '';
  }
});
