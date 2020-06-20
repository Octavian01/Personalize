let searchIcon = Array.from(document.querySelectorAll('.nav__submit-icon'));
let waitForH = document.querySelectorAll('.wait-for-h');
const input = Array.from(document.querySelectorAll('.nav__search-input'));
input.forEach(el => {
    el.onfocus = inputFocus;
    el.onblur = inputBlur;
})

function inputFocus(e) {
    const myElement = e.path[0].nextElementSibling;
    myElement.classList.add('nav__submit-icon-b');
    myElement.classList.remove('nav__submit-icon-w');
    myElement.children[0].classList.add('h');
}

function inputBlur() {
    searchIcon.forEach(el => {
        const searchIconElClasses = el.classList;
        searchIconElClasses.add('nav__submit-icon-w');
        searchIconElClasses.remove('nav__submit-icon-b');
        Array.from(waitForH).forEach(e => {
            e.classList.remove('h');
        })
    })
}

export {input};  