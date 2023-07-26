const sidebar = document.querySelector('sidebar')
const content = document.querySelector('.content')
const btnNav = document.querySelector('.btn-nav')
const navButton = document.querySelector('.nav-button')
const closeButton = document.querySelector('.close-button')
const navIcons = document.querySelector('.nav-icons')


btnNav.addEventListener('click', ()=> {
  sidebar.classList.toggle('active')
  content.classList.toggle('opacity')
  navButton.classList.toggle('none')
  closeButton.classList.toggle('block')
  navIcons.classList.toggle('none')
})

