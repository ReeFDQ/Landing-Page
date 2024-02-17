const accordion = document.getElementsByClassName('contentbx');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

// Sticky Navbar 
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});