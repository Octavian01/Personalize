import { getContent2 } from './down-drop-items/getContent.js';
import { getPrincipalContent } from './down-drop-items/getPrincipalContent.js';

function productsSearch() {
    console.log(window.innerWidth);
    if ( window.innerWidth > 475 ) {
        
        const ul = Array.from(document.querySelector('.nav__list').children);

        const searchInput = document.querySelectorAll('.nav__search-input');

        const isHover = e => e.parentElement.querySelector(':hover') === e;

        const navDrop = document.querySelector('.nav__drop-down');

        const downDrop = document.querySelector('.nav__drop-down-content');

        const formSearch = document.querySelectorAll('.nav__search-submit');

        let principalItemClassName;
        document.addEventListener('mousemove', () => {
            Array.from(searchInput).forEach(el => {
                const inputIsHover = isHover(el);
                if (inputIsHover) {
                    Array.from(formSearch).forEach(e => {
                        if (e.id === el.parentNode.id) {
                            e.classList.add('hovered-input');
                        }
                    })
                } else {
                    Array.from(formSearch).forEach(e => {
                        if(!isHover(e)) {
                            e.classList.remove('hovered-input');
                        } 
                    })
                }
            })
            ul.forEach(el => {
                const hovered = isHover(el);
                const navDropHovered = isHover(navDrop);
                if (hovered) {
                    let displayNavDropInstant = false;
                    ul.forEach(li => {
                        if (li.classList.contains('nav__item-hovered')) displayNavDropInstant = true;
                    })
                    if (displayNavDropInstant) {
                        hoveredElementFromUL(el);
                        principalItemClassName = el.children[0].className;
                    } else {
                        setTimeout(() => {
                            const h = isHover(el);
                            if (h) {
                                hoveredElementFromUL(el);
                                principalItemClassName = el.children[0].className;
                            }
                        },300);
                    }
                } else {
                    if (el.classList.contains('nav__item-hovered')) {

                    }
                }
                if (navDropHovered && hovered) {
                    setTimeout(() => {
                        const h = isHover(el);
                        if (h) downDrop.style.display = 'flex';
                    },300);
                } 
                if (!navDropHovered && downDrop.style.display === 'flex') {
                    setTimeout(() => {
                        let h = isHover(navDrop);
                        if (!h) {
                            downDrop.style.display = 'none';
                            ul.forEach(li => {
                                if (li.classList.contains('nav__item-hovered')) {
                                    li.classList.remove('nav__item-hovered');
                                    li.classList.add('nav__item-nonhovered');
                                } 
                            })
                        }
                    },400);
                }
            })
            if (downDrop.children.length > 0) {
                const content1Ul = Array.from(downDrop.children[0].children[1].children);
                let h = false;
                content1Ul.forEach(el => {
                    if (isHover(el)) {
                        content1Ul.forEach(li => {
                            li.classList.remove('nav__drop-down-item-active');
                        })
                        el.classList.add('nav__drop-down-item-active');
                        getIdContent1(el);
                    }
                })
                content1Ul.forEach(el => {
                    if (el.classList.contains('nav__drop-down-item-active')) {
                        h = true;
                    }
                })
                if (!h && !content1Ul[0].classList.contains('nav__drop-down-item-active')) {
                    content1Ul[0].classList.add('nav__drop-down-item-active');
                }
            }
        })

        const getIdContent1 = el => {
            const item = el.parentNode.parentNode.parentNode.children[1];
            for ( const i of getPrincipalContent ) {
                if ( i.className === principalItemClassName ) {
                    for ( const j of i.items ) {
                        if (Object.values(j)[0].id === el.id) {
                            item.innerHTML = getContent2(Object.values(j)[0].value);
                            break;
                        }
                    }
                    break;
                }
            }

        }

        function hoveredElementFromUL(el) {
            ul.forEach(li => {
                if (li !== el && li.classList.contains('nav__item-hovered')) {
                    li.classList.add('nav__item-nonhovered');
                    li.classList.remove('nav__item-hovered');
                }
            });
            el.classList.remove('nav__item-nonhovered');
            if(!el.classList.contains('nav__item-hovered')) {
                el.classList.add('nav__item-hovered');
            }
            const classElement = el.children[0].className;
            for ( const i of getPrincipalContent ) {
                if ( i.className === classElement ) {
                    downDrop.innerHTML = i.content();
                    break;
                }
            }
        }
    }
}


export default productsSearch;