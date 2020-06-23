import productsSearch from './products-search.js'; // Products search animation
import { getPrincipalContent } from './down-drop-items/getPrincipalContent.js';

function mobileMenu() {
   const menuContainer = document.querySelector('.nav__mobile-menu');
   const dropDown  = document.querySelector('.nav__drop-down');
   let windowWidth = window.innerWidth;
   let browsedAlready = false;
   if ( windowWidth >= 475 ) {
      insertNav(windowWidth, dropDown, browsedAlready, []);
      productsSearch();
   }

   menuContainer.addEventListener('click', () => {
      if ( menuContainer.classList.contains('middle-clicked') ) {
         closeMenu();
      } else {
         menuContainer.classList.add('middle-clicked');
         dropDown.classList.add('nav__drop-down-active');
         browsedAlready = false;
         initialMobileMenu();
         insertNav(windowWidth, dropDown, browsedAlready, []);
         setTimeout(() => {
            document.addEventListener('click', function removeListener(e) {
               const bool = searchForDownDropElement(e.target);
               if ( !bool ) {
                  document.removeEventListener('click', removeListener);
                  closeMenu();
               }
            })
         }, 120);
      }
      function closeMenu() {
         menuContainer.classList.remove('middle-clicked');
         dropDown.classList.remove('nav__drop-down-active');
      }

      function searchForDownDropElement(event) {
         for ( let i = 0; i < 4 && event; i++, event = event.parentElement ) {
            if ( event.getAttribute('data-down-drop-element') ) {
               return true;
            }
         }
         return false;
      }
   })
   
   window.addEventListener('resize', () => {
      windowWidth = window.innerWidth;
      insertNav(windowWidth, dropDown, browsedAlready, []);
   })

   function initialMobileMenu() {
      const ul = createUl();
      ul.setAttribute('data-down-drop-element', 'true');
      contiunuieCreateMobileUl(ul, dropDown);
   }
}

function insertNav(windowWidth, dropDown, browsedAlready, stackForBrowseCategoriesMobile) {
   if ( windowWidth < 475 ) {
      let backWardArrowCount = 0;
      specifyCategoryOnClickNavItem(document.querySelector('.nav__list').children, stackForBrowseCategoriesMobile, browsedAlready, backWardArrowCount);
   } else if ( windowWidth >= 475 ) {
      const ul = createUl();
      dropDown.innerHTML = '';
      ul.innerHTML = `
         <li class="nav__item"><a class="nav__item-jewelry" href="/jewellery&accessories">Jewellry & Accessories<div class="nav__item-border"></div></a></li>
         <li class="nav__item"><a class="nav__item-clothing"href="/">Clothing & Shoes</a></li>
         <li class="nav__item"><a class="nav__item-home-products"href="/">Home Products</a></li>
         <li class="nav__item"><a class="nav__item-wedding"href="/">Wedding & Party</a></li>
         <li class="nav__item"><a class="nav__item-toys"href="/">Toys & Entertainment</a></li>
      `;
      const navDropDownContent = document.createElement('div');
      navDropDownContent.classList.add('nav__drop-down-content');
      dropDown.insertAdjacentElement('beforeend', ul);
      dropDown.insertAdjacentElement('beforeend', navDropDownContent);
      productsSearch();
   }
   function specifyCategoryOnClickNavItem(items, stack, browsedAlready, backWardArrowCount) {
      if ( stack.length === 0 && !browsedAlready ) {
         drySpecifyCategory('Browse Category', 'object');
      } else if ( stack.length === 1 ) {
         drySpecifyCategory(stack[stack.length - 1].headTitle[1], 'item');
      }
      function drySpecifyCategory(firstHeadTitle, dataType) {
         Array.from(items).forEach(el => {
            el.addEventListener('click', function removeListener() {
               el.removeEventListener('click', removeListener);
               backWardArrowCount++;
               const dataClassName = el.getAttribute('data-className');
               let subCategoryItems;
               if ( dataType === 'object' ) {
                  subCategoryItems = searchInGetPrincipalContent(dataClassName);
               } else {
                  subCategoryItems = searchForSpecificItemInPrincipalContent(dataClassName, stack[0].categoryItems);
               }
               
               const navUl = document.querySelector('.nav__list');
               stack.push({items: navUl.innerHTML, headTitle: [firstHeadTitle , el.children[0].textContent], categoryItems: subCategoryItems});
               let output = '';
               if ( dataType === 'object' ) {
                  subCategoryItems.forEach(item => {
                     output += `<button class="nav__item nav__item-mobile" id="${Object.values(item)[0].id}" data-down-drop-element="true" data-className="${Object.values(item)[0].id}"><span>${Object.keys(item)[0]}</span><span class="nav-mobile-category-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg></span><div class="nav__item-border"></div></button>`;
                  })
               } else {
                  subCategoryItems.forEach(item => {
                     output += `<a href="/${item}" class="nav__item nav__item-mobile" data-down-drop-element="true" data-className="${item}"><span>${item}</span><div class="nav__item-border"></div></a>`
                  })
               }
               navUl.innerHTML = output;
               const browseCategoryMobile = document.querySelector('.browse-category-mobile');
               browseCategoryMobile.innerHTML =  `<span>${el.children[0].textContent}</span>`;
               const backButton = document.createElement('button');
               backButton.classList.add('nav__back-arrow');
               backButton.setAttribute('data-down-drop-element', 'true');
               backButton.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8 c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712 L143.492,221.863z"></path></svg>`;
               browseCategoryMobile.insertAdjacentElement('afterbegin', backButton);
               const dropDownContent = document.querySelector('.nav__dropDown-mobile-content');
               dropDownContent.classList.add('nav__dropDown-mobile-content-active-forward');
               setTimeout(() => {
                  dropDownContent.classList.remove('nav__dropDown-mobile-content-active-forward');
                  backButton.classList.add('nav__back-arrow-active');
               }, 350);
               listenOnBackArrow(backButton, backWardArrowCount, dropDownContent, navUl, browseCategoryMobile);
               browsedAlready = true;
               if ( dataType === 'object' ) specifyCategoryOnClickNavItem(navUl.children, stack, browsedAlready, backWardArrowCount);
            })
         })
      }
      function searchInGetPrincipalContent(elementClassName) {
         for ( const cl of getPrincipalContent ) {
            if ( cl.className === elementClassName ) {
               return cl.items;
            }
         }
      }
      function searchForSpecificItemInPrincipalContent(elementClassName, stackCategoryItems) {
         for ( const item of stackCategoryItems ) {
            if ( Object.values(item)[0].id === elementClassName ) {
               return Object.values(item)[0].value;
            }
         }
      }
      function listenOnBackArrow(arrow, arrowCount, dropDownContent, navUl, browseTitle) {
         --arrowCount;
         arrow.addEventListener('click', function listen(e) {
            if ( !arrowCount ) {
               arrow.classList.remove('nav__back-arrow-active');
               dry('nav__back-arrow-passive', true);
            } else {
               dry('nav__back-arrow-active', false);
               listenOnBackArrow(arrow, arrowCount, dropDownContent, navUl, browseTitle);
            }
            arrow.removeEventListener('click', listen);
            specifyCategoryOnClickNavItem(navUl.children, stack, false, arrowCount);
         })
         function dry(arrowClass, firstNavigation) {
            navUl.innerHTML = stack[stack.length - 1].items;
            browseTitle.textContent = stack[stack.length - 1].headTitle[0];
            stack.pop();
            if ( !firstNavigation ) browseTitle.insertAdjacentElement('afterbegin', arrow);
            dropDownContent.classList.add('nav__dropDown-mobile-content-active-backward');
            setTimeout(() => {
               dropDownContent.classList.remove('nav__dropDown-mobile-content-active-backward');
               arrow.classList.add(arrowClass);
            }, 350);
         }
      }
   }
}

function createUl() {
   const ul = document.createElement('ul');
   ul.classList.add('nav__list');
   ul.id = 'nav__ul';
   return ul;
}

function contiunuieCreateMobileUl(ul, dropDown) {
   dropDown.innerHTML = '';
   ul.innerHTML = `
   <button class="nav__item nav__item-mobile" data-down-drop-element="true" data-className="nav__item-jewelry" ><span>Jewellry & Accessories</span><span class="nav-mobile-category-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg></span><div class="nav__item-border"></div></button>
   <button class="nav__item nav__item-mobile" data-down-drop-element="true" data-className="nav__item-clothing" ><span>Clothing & Shoes</span><span class="nav-mobile-category-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg></span></button>
   <button class="nav__item nav__item-mobile" data-down-drop-element="true" data-className="nav__item-home-products" ><span>Home Products</span><span class="nav-mobile-category-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg></span></button>
   <button class="nav__item nav__item-mobile" data-down-drop-element="true" data-className="nav__item-wedding" ><span>Wedding & Party</span><span class="nav-mobile-category-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg></span></button>
   <button class="nav__item nav__item-mobile" data-down-drop-element="true" data-className="nav__item-toys" ><span>Toys & Entertainment</span><span class="nav-mobile-category-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg></span></button>
   `;
   const divForBrowseMobile = document.createElement('div');
   divForBrowseMobile.textContent = 'Browse Category';
   divForBrowseMobile.classList.add('browse-category-mobile');
   const dropDownContent = document.createElement('div');
   dropDownContent.classList.add('nav__dropDown-mobile-content');
   dropDownContent.insertAdjacentElement('afterbegin', divForBrowseMobile);
   dropDownContent.insertAdjacentElement('beforeend', ul);
   dropDown.insertAdjacentElement('beforeend', dropDownContent);
}



export default mobileMenu; 