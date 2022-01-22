const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu-mobile')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('none')
})