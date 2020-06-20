import { getPrincipalContent } from './down-drop-items/getPrincipalContent.js';

const inputFile = document.getElementById('file');

const label = document.querySelector('.label-for-file-text');

const inputs = document.querySelectorAll('.add-item-input-classic');

const imgContainer = document.querySelector('.images-input');

const ulSelectorCategory = document.getElementById('categoryUl');

const ulSelectorSubcategory = document.getElementById('subcategoryUl');

const ulSpecificItem = document.getElementById('specificItemUl');

const arrowDownSelector = document.querySelector('.arrow-down');

const arrowUpSelector = document.querySelector('.arrow-up');

const activeTextCategorySelector = document.querySelector('.active-text-category');

const activeTextSubcategorySelector = document.querySelector('.active-text-subcategory');

const activeTextSpecificItems = document.querySelector('.active-text-specific-item');

const categoryInput = document.getElementById('category');

const subcategoryInput = document.getElementById('subcategory');

const specificItemInput = document.getElementById('specificItem');

const activeSubcategory = document.getElementById('active-subcategory');

const subCategoryArrowDown = document.querySelector('.arrow-down-2');

const subCategoryArrowUp = document.querySelector('.arrow-up-2');

const specificItemsArrowDown = document.querySelector('.arrow-down-3');

const specificItemsArrowUp = document.querySelector('.arrow-up-3');

const nonActiveItemsCategory = document.querySelector('#categoryUl .non-active-items');

const nonActiveItemsSubcategory = document.querySelector('#subcategoryUl .non-active-items');

const nonActiveItemsSpecificItems = document.querySelector('#specificItemUl .non-active-items');

const ulSelectors = document.querySelector('.ul-selectors');

const labelForTextArea = document.querySelector('.label-for-description');

const nextTextSubcategory = '--Subcategory<span style="color: red;">*</span>--';

const nextTextSpecificItem = '--Specific Item<span style="color: red;">*</span>--';

let autoPickItemsFromSubcategeryForSpecificItem;

const imageUrlDisplay = (i) => {
    i.lastElementChild.children[0].addEventListener('input', function handler() {
        i.lastElementChild.children[0].removeEventListener('input', handler);
        const div = document.createElement('div');
        div.classList.add('input-container');
        div.innerHTML = `
            <input class="add-item-input-classic img-url" type="text" name="image">
            <label for="image" class="label-for-classic-input">Image</label>
        `
        i.appendChild(div);
        forFocus(i.lastElementChild.children[0]);
        forBlur(i.lastElementChild.children[0]);
        imageUrlDisplay(i);
    })
}

imageUrlDisplay(imgContainer);

inputFile.addEventListener('change', e => {
    const files = inputFile.files;
    if (files.length > 1) {
        label.innerHTML = `${files.length} files selected`
    } else {
        label.innerHTML = files[0].name;
    }
})

Array.from(inputs).forEach(input => {
    forFocus(input);
    forBlur(input);
})

ulSelectorCategory.addEventListener('click', e => {
    triggerArrowsAndLis(nonActiveItemsCategory, arrowDownSelector, arrowUpSelector);
    observeScrollBar(nonActiveItemsCategory);
    if (e.target.tagName === 'LI' && !e.target.classList.contains('active-text')) {
        activeSubcategory.classList.remove('cursor-not-allowed');
        careOfthisAndNextSelector(activeTextCategorySelector, e.target, categoryInput, [subcategoryInput, specificItemInput], [activeTextSubcategorySelector, activeTextSpecificItems], [nextTextSubcategory, nextTextSpecificItem]);
        ulSpecificItem.classList.add('display-none');
        chooseSubcategory(categoryInput.value);
        observeScrollBar(nonActiveItemsSubcategory);
    }
})

ulSelectorSubcategory.addEventListener('click', e => {
    if (!(activeTextCategorySelector.innerHTML.toString()).includes('--Category')) {
        triggerArrowsAndLis(nonActiveItemsSubcategory, subCategoryArrowDown, subCategoryArrowUp);
        observeScrollBar(nonActiveItemsSubcategory);
        if (e.target.tagName === 'LI' && !e.target.classList.contains('active-text')) {
            careOfthisAndNextSelector(activeTextSubcategorySelector, e.target, subcategoryInput, [specificItemInput], [activeTextSpecificItems], [nextTextSpecificItem]);
            ulSpecificItem.classList.remove('display-none');
            chooseSpecificItem(subcategoryInput.value);
            observeScrollBar(nonActiveItemsSpecificItems);
        }
    }
})

ulSpecificItem.addEventListener('click', e => {
    triggerArrowsAndLis(nonActiveItemsSpecificItems, specificItemsArrowDown, specificItemsArrowUp);
    observeScrollBar(nonActiveItemsSpecificItems);
    if (e.target.tagName === 'LI' && !e.target.classList.contains('active-text')) {
        careOfthisAndNextSelector(activeTextSpecificItems, e.target, specificItemInput, [], []);
    }
})

const textarea = document.querySelector(".autoresizing"); 
textarea.addEventListener('input', autoResize, false); 
 
function autoResize() { 
    const max = textarea.getAttribute('maxLength');
    if (textarea.value.length >= max) return false;
    labelForTextArea.innerHTML = max - textarea.value.length;
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 'px'; 
    ulSelectors.style.marginTop = this.scrollHeight + 'px';
} 

document.addEventListener('click', e => {
    if (e.target.tagName === 'FORM') {
        closeUl(nonActiveItemsCategory, subCategoryArrowDown, subCategoryArrowUp);
        closeUl(nonActiveItemsSubcategory, arrowDownSelector, arrowUpSelector);
        closeUl(nonActiveItemsSpecificItems, specificItemsArrowDown, specificItemsArrowUp);
    }
})

function careOfthisAndNextSelector(activeTextUI, target, thisInput, nextInput, nextActiveText, nextText) {
    activeTextUI.innerHTML = target.innerHTML;
    thisInput.value = target.getAttribute('rel');
    if (nextInput.length > 0) {
        for (let i = 0; i < nextInput.length; i++) {
            nextInput[i].value = '';
            nextActiveText[i].innerHTML = nextText[i];
        }
    }
}

function closeUl(ul, arrowDown, arrowUp) {
    arrowDown.classList.remove('display-none');
    arrowUp.classList.add('display-none');
    ul.classList.add('display-none');
}

function triggerArrowsAndLis(ul, arrowDown, arrowUp) {
    if(ul.classList.contains('display-none')) {
        ul.classList.remove('display-none');
        arrowDown.classList.add('display-none');
        arrowUp.classList.remove('display-none');
    } else {
        closeUl(ul, arrowDown, arrowUp);
    }
}

function forFocus(input) {
    input.addEventListener('focus', e => {
        const label = input.nextElementSibling;
        label.classList.remove('label-for-classic-input');
        label.classList.remove('label-for-classic-input-nonhovered');
        label.classList.add('label-for-classic-input-hovered');
    })
}

function forBlur(input) {
    input.addEventListener('blur', e => {
        if (!input.value) {
            const label = input.nextElementSibling;
            label.classList.remove('label-for-classic-input-hovered');
            label.classList.add('label-for-classic-input-nonhovered');
        }
    })
}

function observeScrollBar(ulScroll) {
    ulScroll.scroll( { top: 1 } );
    if (ulScroll.scrollTop === 0) {
        ulScroll.classList.add('overflow-hidden');
    } else {
        ulScroll.scroll( { top: 0 } );
        ulScroll.classList.remove('overflow-hidden');
    }
}

function chooseSubcategory(val) {
    for ( const l of getPrincipalContent ) {
        if (l.id === val) {
            outputSubcategoryItems(l.items);
            autoPickItemsFromSubcategeryForSpecificItem = l.items;
            break;
        }
    }
}

function outputSubcategoryItems(items) {
    let output = '';
    items.forEach( el => {
        output += `<li rel="${Object.values(el)[0].id}" class="non-active-item">${Object.keys(el)[0]}</li>`
    })
    nonActiveItemsSubcategory.innerHTML = output;
}

function chooseSpecificItem(val) {
    for ( const l of autoPickItemsFromSubcategeryForSpecificItem ) {
        const item = Object.values(l)[0];
        if (item.id === val) {
            outputSpecificItems(item.value);
            break;
        }
    }
}

function outputSpecificItems(items) {
    let output = '';
    items.forEach( el => {
        output += `<li rel="${el}" class="non-active-item">${el}</li>`;
    });
    nonActiveItemsSpecificItems.innerHTML = output;
}