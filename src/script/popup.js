import {setMenuActive} from './menu.js';

let buttons = document.querySelectorAll('.activate-popup');
let popup = document.getElementById('popup')
let closeButton = document.getElementById('close-popup-button')
let body = document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        body.classList.add('opened-popup')
        if(body.classList.contains('opened-menu')) {
            setMenuActive()
        }
    })
})

popup.addEventListener('click', () => {
    body.classList.remove('opened-popup')
})

closeButton.addEventListener('click', () => {
    body.classList.remove('opened-popup')
})

popup.querySelector('.popup__inner').addEventListener('click', e => e.stopPropagation())