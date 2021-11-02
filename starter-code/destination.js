
const toggleBtn = document.querySelector('.btn')

const sideBar = document.querySelector('.sidebar')

const closeBtn = document.querySelector('.close-btn')


toggleBtn.addEventListener('click', function () {
    sideBar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
    sideBar.classList.toggle('show-sidebar')
})


