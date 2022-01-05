const button = document.getElementById("btn");
const text = document.getElementById("drop-text");

button.addEventListener('click', () => {
    if (text.classList.contains('hidden')) {
        text.classList.remove('hidden')
    }else{
        text.classList.add('hidden');
    }
})

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden');
    }
})



