const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 765){
        nav.classList.add('white')
    }
    else{
        nav.classList.remove('white');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideArray = Array.from(slides.children);
    let currentIndex = 0;

    const updateSlider = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideArray.length;
        updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideArray.length) % slideArray.length;
        updateSlider();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideArray.length;
        updateSlider();
    }, 3000);
});