const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');


loginBtn.addEventListener('click', openModal);
closeBtn = addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);