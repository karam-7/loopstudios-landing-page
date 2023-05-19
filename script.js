const close = document.getElementById('close');
const open = document.getElementById('open');
const header = document.getElementById('header');
const bar = document.querySelector('.bar-ul');

open.addEventListener('click' , () => {
    open.style.display = 'none';
    bar.style.display = 'block';
    close.style.display = 'block';
    header.style.background = 'black';
})

close.addEventListener('click' , () => {
    open.style.display = 'block';
    bar.style.display = 'none';
    close.style.display = 'none';
    header.style.background = '';
})