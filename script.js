const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        nav.classList.add('white')
    }
    else{
        nav.classList.remove('white');
    }
})