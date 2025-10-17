let menu = document.querySelector('#menu-icon');
let navlsit = document.querySelector('.navlsit');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlsit.classList.toggle('open');
}