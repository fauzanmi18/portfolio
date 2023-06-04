//navbar fix
window.onscroll = () => {
    const header = document.querySelector('#navbar')
    const navFixed = header.offsetTop
    const toTop = document.querySelector('#to-top')

    // window.pageYOffset > navFixed 
    // ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed')
    if(window.pageYOffset > navFixed){
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// hamburger toggle
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

//hide hamburger
window.addEventListener('click', (e) => {
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})