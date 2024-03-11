let button = document.getElementById('menu-button')
let body = document.querySelector('body')

button.addEventListener('click', () => {
    setMenuActive()
})

export const setMenuActive = () => {
    if (body.classList.contains('opened-menu')) {
        body.classList.remove('opened-menu')
    } else {
        body.classList.add('opened-menu')
    }
}