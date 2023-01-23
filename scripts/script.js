const menu_btn = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.navbar-links');
const body = document.getElementById('body');
const searchIcon = document.querySelector('.naviconsearch');
const searchIconMobile = document.querySelector('.navsearchmobile ');
const triggerSearch = document.getElementById('navSearch');
const input = document.getElementById ('searchBox');
const closeIcon = document.getElementById ('closeIcon');

closeIcon.addEventListener('click', (e) => {
    input.classList.remove ('open');
    nav_menu.classList.remove('close');
    searchIconMobile.classList.add ('active');
    

})

document.addEventListener ('click', function (e) {
    if(!input.contains(e.target) && !searchIcon.contains(e.target) && !searchIconMobile.contains(e.target))  {
        console.log('clicked outside');
        input.classList.remove ('open');
        nav_menu.classList.remove('close');
        searchIconMobile.classList.add ('active');
        
    } else {
        console.log('clicked inside');
    }
})

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('active');
    nav_menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    searchIconMobile.classList.add ('active');
    
})


const showMore = document.querySelector('#showMoreBtn');
let i = 0;


if (showMore) {
    
    showMore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.main .container .article')];
        for ( i; i < 8; i++) {
            if (elementList[i+4]) {
                elementList[i+4].style.display = 'block';
            }
        }
        console.log(i)
    
        // Load more button will be hidden after list fully loaded
        if (i >= elementList.length) {
            showMore.style.display = 'none';
        }
    })
} 

triggerSearch.addEventListener('click', (e) => {
    input.classList.toggle('open');
    nav_menu.classList.toggle('close');

})

searchIconMobile.addEventListener('click', (e) => {
    input.classList.toggle('open');
    console.log("Open")
    searchIconMobile.classList.remove ('active');
    
})








        
