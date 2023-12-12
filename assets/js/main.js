/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
/* const titleData = document.getElementById('title-data'),
      numberData = document.getElementById('number-data'),
      textrData = document.getElementById('text-data'),
      msgChristmas = document.getElementById('msg-christmas')
    
const christmasCountdown = () => {

    let now = new Date(),
        currentMonth = now.getMonth() + 1,
        currentDay = now.getDate()

    let nextChristmas = now.getFullYear()
    if (currentMonth == 12 && currentDay > 25){
        nextChristmas += 1
    }
}

setInterval(christmasCountdown, 1000) */