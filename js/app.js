window.addEventListener('DOMContentLoaded' , () => {
    const menu = document.querySelector('.none'),
    links = document.querySelector('.links');

    menu.onclick = () => {
        links.classList.toggle('active')
        menu.classList.toggle('active')
    }
})