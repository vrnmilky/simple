const body = document.querySelector("body")
const burger = document.querySelector('.header_burger')
const navMenu = document.querySelector('.header_nav')

const search = document.querySelector('.header_actions__btn')
const closeSearch = document.querySelector('.header_actions__close')
const containerInfo = document.querySelector('.header_container')
const searchInput = document.querySelector('#searchInput')



burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navMenu.classList.toggle('active')
  body.classList.toggle('no-scroll')

})

search.addEventListener('click', () => {
  if (!containerInfo.classList.contains('search')) {
    containerInfo.classList.add('search')
    search.classList.add('active')
  }
})

closeSearch.addEventListener('click', () => {
  if (containerInfo.classList.contains('search')) {
    containerInfo.classList.remove('search')
    search.classList.remove('active')
    searchInput.value = ''
  }
})