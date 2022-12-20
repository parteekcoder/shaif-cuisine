const hamburger=Document.getElementsByClassName('hamburger');
hamburger.addEventListener('click',navOpen);

function navOpen() {
    hamburger.classList.toggle('mobile-menu');
}


