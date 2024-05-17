const btns = document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.bloc-modal');
const close = document.querySelector('.close');
const index = document.querySelector('.bloc-modal img');

btns.forEach(btn => {
    btn.addEventListener('click' , (e) => {
        index.src = 'img/info-${e . target . getAttribute('data-index')}.jpg;
        modal.classList.add('active');
    })
})
modal.addEventListener('click' , () => {
    modal.classList.remove('active');
})

// Nav animation
const Nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY >30){
        nav.classList.add('nav-animmate')
    } else{
        nav.classList.remove('nav-animmate')
    }
})