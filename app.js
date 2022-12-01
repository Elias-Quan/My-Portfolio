let hamburger = document.querySelector('.hamburger-menu-btn')
let closeBtn = document.querySelector('.nav-close-btn')
let navLinks = document.querySelectorAll('.nav-link')

hamburger.addEventListener('click', function(){
  document.body.classList.toggle('toggledClass')
})

closeBtn.addEventListener('click', function(){
  document.body.classList.remove('toggledClass')
})


navLinks.forEach((item) =>{
  item.addEventListener('click', () =>{
    document.body.classList.remove('toggledClass')
  })
})

