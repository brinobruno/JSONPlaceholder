// Scroll header

const header = document.querySelector('.main-header')
const logo = document.querySelector('.logo a')
const menuLines = document.querySelector('.menu-icon__line')
const links = document.querySelectorAll('.main-header .nav-links .nav-link a')

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 10) {
        header.classList.add('scrolled')

        logo.classList.add('scrolled')

        menuLines.classList.add('scrolled')

        links.forEach(element => {
            element.classList.add('scrolled')
        })
        
    } else {
        header.classList.remove('scrolled')

        menuLines.classList.remove('remove')

        logo.classList.remove('scrolled')

        links.forEach(element => {
            element.classList.remove('scrolled')
        })
    }
})