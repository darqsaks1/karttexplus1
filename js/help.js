const modalHide = document.querySelector('.modalForm');
const mod = document.querySelector('.mod')
const Uslugibutton = document.querySelector('.layotRus');
modalHide.addEventListener('click', (e) => {
    if (!e.target.closest('.form1')) {
        mod.classList.add('display-none');
    }
})


modalHide.addEventListener('click', (e) => {
    if (!e.target.closest('.form1')) {
        mod.classList.add('display-none');
    }
})


Uslugibutton.addEventListener('click', (e) => {
        mod.classList.remove('display-none');
})
