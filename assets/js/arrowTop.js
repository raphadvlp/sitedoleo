

function showBtn() {
    if(window.scrollY === 0) {
        document.querySelector('.arrow--top').style.display = 'none';
    } else {
        document.querySelector('.arrow--top').style.display = 'block';
    }
}

window.addEventListener('scroll', showBtn);


function arrowNone() {
    if(window.scrollY === 0) {
        document.querySelector('.arrou--down').style.display = 'block';
    } else {
        document.querySelector('.arrou--down').style.display = 'none';
    }
}

window.addEventListener('scroll', arrowNone);