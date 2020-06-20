const data = JSON.parse(document.getElementById('productData').value);

const userData = JSON.parse(document.getElementById('userData').value);

const ul = document.querySelector('.product-images-list');

const previous = document.getElementById('previous');

const next = document.getElementById('next');

const bigImage = document.querySelector('.product-image-display-image');

const ulPopUp = document.querySelector('.pop-up-list');

const bigImagePopUp = document.querySelector('.img');

const popUp = document.querySelector('.pop-up-image-display');

const prevPopUp = document.querySelector('.pop-up-big-image-previous');

const nextArrowPopUp = document.getElementById('pop-up-next');

const previousArrowPopUp = document.getElementById('pop-up-previous');

const title = document.querySelector('.product-part-data__title');

const price = document.querySelector('.product-part-data__price');

const raiting = document.getElementById('product-raiting');

const closePopUp = document.querySelector('.close-pop-up');

const descriptionButton = document.querySelector('.product-part-data__description-btn');

const descriptionTitleButton = document.querySelector('.product-part-data__description-btn-text');

const descriptionTextButton = document.querySelector('.product-part-data__description-text');

const deliverData = document.querySelector('.product-part-data__delivery-date');

const estimatedTextToHover = document.getElementById('estimated');

const token = document.querySelector('.token').value;

const isHover = e => e.parentElement.querySelector(':hover') === e;

title.innerHTML = data.title;

price.innerHTML = `USD $${data.price}`;

raiting.innerHTML = `(${data.raiting})`;
bigImage.innerHTML = getImageAndHeart();

const bigImageContainer = document.querySelector('.product-big-image-container');
const bigImageHeart = document.querySelector('.product-heart-container');

bigImageHeart.addEventListener('click', e => {
    const updateHeart = async (path, id, token) => {
        const req = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'X-CSRF-TOKEN': token,
            },
            body: JSON.stringify(id)
        });
        const res = await req.json();
        return res;
    }
    const id = e.target.parentElement.getAttribute('data-id');
    if ( bigImageHeart.children[0].classList.contains('product-heart-svg-white') ) {
        bigImageHeart.children[0].classList.remove('product-heart-svg-white');
        bigImageHeart.children[0].classList.add('product-heart-svg-red');
        updateHeart('/addLikeItem', id, token)
            .then(result => {
                if ( !result.done ) {
                    console.log('Look in product.js');
                }
            })
    } else {
        bigImageHeart.children[0].classList.add('product-heart-svg-white');
        bigImageHeart.children[0].classList.remove('product-heart-svg-red');
        updateHeart('/removeLikeItem', id, token)
            .then(result => {
                if ( !result.done ) {
                    console.log('Look in product.js');
                }
            })
    }

    e.preventDefault();     
})

bigImageContainer.addEventListener('click', e => {
    popUp.classList.remove('display-none');
    document.body.style.overflow = 'hidden';
    bigImagePopUp.innerHTML = bigImageContainer.innerHTML;
    Array.from(ulPopUp.children).forEach(li => {
        if (li.children[0].src === bigImagePopUp.children[0].src) {
            li.classList.add('product-acitve-item-pop-up');
        } else {
            li.classList.remove('product-acitve-item-pop-up');
        }
    })
})

Array.from(data.image).forEach(img => {
    const li = document.createElement('li');
    li.classList.add('product-images-item');
    li.innerHTML = `<img src="../images/${encodeURIComponent(img.name)}" alt="product image">`;
    ul.appendChild(li);
    const liForPopUp = document.createElement('li');
    liForPopUp.classList.add('pop-up-item');
    liForPopUp.innerHTML = `<img src="../images/${encodeURIComponent(img.name)}" alt="product image">`;
    ulPopUp.appendChild(liForPopUp);
})

const popUpLi = document.querySelectorAll('.pop-up-item');

document.addEventListener('keydown', e => {
    closePopUpOnEscape(e);
    handlingKeyboardArrows(e);
})

Array.from(popUpLi).forEach(li => {
    li.addEventListener('click', e => {
        if (e.target.parentElement.tagName === 'LI') {
            bigImagePopUp.innerHTML = e.target.parentElement.innerHTML;
            Array.from(popUpLi).forEach(el => {
                el.classList.remove('product-acitve-item-pop-up');
            })
            e.target.parentElement.classList.add('product-acitve-item-pop-up');
        } else {
            bigImagePopUp.innerHTML = e.target.innerHTML;
            Array.from(popUpLi).forEach(el => {
                el.classList.remove('product-acitve-item-pop-up');
            })
            e.target.classList.add('product-acitve-item-pop-up');
        }
        
    })
})

ul.firstElementChild.classList.add('product-images-item-active');

const liImages = document.querySelectorAll('.product-images-item');

const ulHeightTop = ul.getBoundingClientRect().top;

const ulHeightBottom = ul.getBoundingClientRect().bottom;

const ulHeight = ulHeightBottom - ulHeightTop;

const liImagesPopUp = document.querySelectorAll('.pop-up-item');

Array.from(liImages).forEach(li => {
    li.addEventListener('click', e => {
        if (e.target.parentElement.tagName === 'LI') {
            bigImageContainer.innerHTML = e.target.parentElement.innerHTML;
            Array.from(liImages).forEach(el => {
                el.classList.remove('product-images-item-active');
            })
            e.target.parentElement.classList.add('product-images-item-active');
        } else {
            bigImageContainer.innerHTML = e.target.innerHTML;
            Array.from(liImages).forEach(el => {
                el.classList.remove('product-images-item-active');
            })
            e.target.classList.add('product-images-item-active');
        }
        
    })
    li.addEventListener('mouseover', e => {

        const liHeight = li.getBoundingClientRect().top - ulHeightTop;

        const height = liHeight / ulHeight;
        
        
        if (height >= 0.77) {
            const toScroll = ul.scrollTop + 60;
            ul.scroll({
                top: toScroll,
                left: 0,
                behavior: "smooth"
            });
        }
        if(height <= 0.21) {
            const toScroll = ul.scrollTop - 60;
            ul.scroll({
                top: toScroll,
                left: 0,
                behavior: "smooth"
            });
        }
    })
})

document.addEventListener('click', e => {
    closePopUpByClickingNonBox(e.target);
})

closePopUp.addEventListener('click', e => {
    popUp.classList.add('display-none');
    document.body.style.overflow = 'scroll';
})

previous.addEventListener('click', e => {
    let activeLi = document.querySelector('.product-images-item-active');
    activeLi = searchForActiveLiPrevious(activeLi);
    displayBigImageOnClickNextOrPrevious(activeLi, bigImageContainer, 'product-images-item-active', liImages);
})

next.addEventListener('click', e => {
    let activeLi = document.querySelector('.product-images-item-active');
    activeLi = searchForActiveLiNext(activeLi);
    displayBigImageOnClickNextOrPrevious(activeLi, bigImageContainer, 'product-images-item-active', liImages);
})

nextArrowPopUp.addEventListener('click', e => {
    let activeLi = document.querySelector('.product-acitve-item-pop-up');
    activeLi = searchForActiveLiNext(activeLi);
    displayBigImageOnClickNextOrPrevious(activeLi, bigImagePopUp, 'product-acitve-item-pop-up', liImagesPopUp);
})

previousArrowPopUp.addEventListener('click', e => {
    let activeLi = document.querySelector('.product-acitve-item-pop-up');
    activeLi = searchForActiveLiPrevious(activeLi);
    displayBigImageOnClickNextOrPrevious(activeLi, bigImagePopUp, 'product-acitve-item-pop-up', liImagesPopUp);
})

descriptionButton.addEventListener('click', e => {
    if (descriptionTitleButton.innerHTML === 'Less') {
        descriptionTitleButton.innerHTML = 'Learn more about this item';
        descriptionTextButton.classList.remove('product-part-data__description-text-active');
    } else {
        descriptionTitleButton.innerHTML = 'Less';
        descriptionTextButton.classList.add('product-part-data__description-text-active');
        
    }
})

Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
const deliverDataFunction8days14day = () => {
    function getDayAndMounth(date, days) {
        const d = date.addDays(days).toString().split(' ');
        const day = d[2];
        const mounth = d[1];
        return {day, mounth};
    }
    const date = new Date();
    const _8days = getDayAndMounth(date, 8);
    const _14days = getDayAndMounth(date, 14);
    if (_8days.mounth === _14days.mounth) {
        deliverData.innerHTML = `${_8days.mounth} ${_8days.day} - ${_14days.day}`;
    } else {
        deliverData.innerHTML = `${_8days.mounth} ${_8days.day} - ${_14days.mounth} ${_14days.day}`;
    }
}

deliverDataFunction8days14day();
setInterval(deliverDataFunction8days14day, 1000 * 60 * 60 * 24); // 1 day
let a;
estimatedTextToHover.addEventListener('mouseover' , e => {
    clearTimeout(a);
    estimatedTextToHover.nextElementSibling.nextElementSibling.innerHTML = "The estimated delivery date is based on your purchase date, the recipient's location, the seller's processing time and location, and the delivery carrier. Other factors — like placing an order on a weekend or a bank holiday — may end up pushing the arrival of your item beyond the estimated delivery date. It's our hope that your item gets where it's going as soon as possible, but given the factors involved, this is only an estimate.";
})

estimatedTextToHover.addEventListener('mouseout', e => {
    a = setTimeout(() => {
        estimatedTextToHover.nextElementSibling.nextElementSibling.innerHTML = '';
    }, 250);
})

function searchForActiveLiNext(activeLi) {
    if (activeLi.nextElementSibling) {
        activeLi = activeLi.nextElementSibling;
    } else {
        while(activeLi.previousElementSibling) {
            activeLi = activeLi.previousElementSibling;
        }
    }
    return activeLi;
}

function searchForActiveLiPrevious(activeLi) {
    if (activeLi.previousElementSibling) {
        activeLi = activeLi.previousElementSibling;
    } else {
        while(activeLi.nextElementSibling) {
            activeLi = activeLi.nextElementSibling;
        }
    }
    return activeLi;
}

function displayBigImageOnClickNextOrPrevious(activeLi, bigImage, clas, liImg) {
    bigImage.innerHTML = activeLi.innerHTML;
    Array.from(liImg).forEach(el => {
        el.classList.remove(clas);
    })
    activeLi.classList.add(clas);
}

function handlingKeyboardArrows(e) {
    if (!popUp.classList.contains('display-none')) {
        if (e.key === 'ArrowRight') {
            let activeLi = document.querySelector('.product-acitve-item-pop-up');
            activeLi = searchForActiveLiNext(activeLi);
            displayBigImageOnClickNextOrPrevious(activeLi, bigImagePopUp, 'product-acitve-item-pop-up', liImagesPopUp);
        } else if (e.key === 'ArrowLeft') {
            let activeLi = document.querySelector('.product-acitve-item-pop-up');
            activeLi = searchForActiveLiPrevious(activeLi);
            displayBigImageOnClickNextOrPrevious(activeLi, bigImagePopUp, 'product-acitve-item-pop-up', liImagesPopUp);   
        }
    }
}

function closePopUpOnEscape(e) {
    if (e.key === 'Escape') {
        if (!popUp.classList.contains('display-none')) {
            popUp.classList.add('display-none');
            document.body.style.overflow = 'scroll';
        }
    }
}

function closePopUpByClickingNonBox(el) {
    if (el.classList.contains('img')) {
        popUp.classList.add('display-none');
        document.body.style.overflow = 'scroll';
    }
}

function getImageAndHeart() {
    let output = '';
    output += `
        <div class="product-big-image-container">
            <img src="../images/${encodeURIComponent(data.image[0].name)}" alt="product image">
        </div>
    `;
    let liked = false;
    for ( const i of userData.likesItems ) {
        if ( i.productId.toString() ===  data._id.toString() ) {
            liked = true;
        }
    }
    if ( liked ) {
        output += `
            <button class="product-heart-container" data-id="${data._id}">
                <svg data-id="${data._id}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="product-heart-svg product-heart-svg-red"> <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268 c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514 c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482 s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514 C512,93.417,453.532,30,376,30z"></path></svg>
            </button>
        `;
    } else {
        output += `
            <button class="product-heart-container" data-id="${data._id}">
                <svg data-id="${data._id}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="product-heart-svg product-heart-svg-white"> <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268 c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514 c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482 s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514 C512,93.417,453.532,30,376,30z"></path></svg>
            </button>
        `;
    }
    return output;
}