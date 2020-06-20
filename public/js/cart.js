const cartTitle = document.querySelector('.cart-title');

const items = JSON.parse(document.getElementById('items').value);

const cartItems = document.querySelector('.cart-data-items');

const cartTotalItems = document.querySelector('.cart-data-pay-total-items');

const totalSumMoney = document.querySelector('.cart-data-pay-total-totalMoney');

const sumMoney = document.querySelector('.cart-data-pay-sum');

const token = document.querySelector('.token').value;

const payButton = document.querySelector('.cart-data-pay-form-btn');
 
let totalSum = 0;

if ( items.length === 1 ) {
    cartTotalItems.innerHTML = `(1 item)`;
    cartTitle.innerHTML = `<h2>${items.length} item in your basket</h2>`;
}
else {
    cartTitle.innerHTML = `<h2>${items.length} items in your basket</h2>`;
    cartTotalItems.innerHTML = `(${items.length} items)`;
}

let output = '';
items.forEach(item => {
    let outputSelect = `<select class="cart-data-item-select-quantity" data-id="${item.itemId}">`;
    for ( let i = 1; i < 10; i++ ) {
        if ( i === item.quantity ) {
            outputSelect += `<option selected>${i}</option>`;
        } else {
            outputSelect += `<option>${i}</option>`;
        }
    }
    outputSelect += '</select>';
    output += `
    <li class="cart-data-item">
        <div>
            <a href="/products/${item.itemId}">
                <img src="${decodeURIComponent(item.image)}" alt="Product Image">
            </a>
        </div>
        <div class="cart-data-item-div">
            <div>
                <a href="/products/${item.itemId}" class="cart-data-item-title">${item.title}</a>
            </div>
            <div class="cart-data-item-div-child">
                <form action="/postRemoveProduct/${item.itemId}" method="POST">
                <input type="hidden" value="${token}" name="_csrf" class="token">
                    <button type="submit" class="cart-data-item-remove">Remove</button>
                </form>
            </div>
        </div>
        <div class="cart-data-item-price-and-q">
            <div>$${(item.price * item.quantity).toFixed(2)}</div>
            <div class="cart-data-item-quantity">
                ${outputSelect}
            </div>
        </div>
    </li>
    `;
    totalSum += item.price * item.quantity;
})       
 
totalSumMoney.innerHTML = `$${totalSum.toFixed(2)}`;
sumMoney.innerHTML = `$${totalSum.toFixed(2)}`;

cartItems.innerHTML = output;

const selectQuantity = document.querySelectorAll('.cart-data-item-select-quantity');

const changeQuantity = async (id, data) => {
    const req = await fetch(`/updateQuantity/${id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'X-CSRF-TOKEN': token,
        },
        body: JSON.stringify(data)
    });
    const res = await req.json();
    return res;
}
 
Array.from(selectQuantity).forEach(i => {
    i.addEventListener('change', e => {
        const id = e.target.getAttribute('data-id');
        const data = {
            value: e.target.value
        };
        changeQuantity(id, data)
            .then(result => {
                if ( result.done === true ) {
                    location.reload();
                }
            })
    }) 
})

payButton.addEventListener('click', e => {
    window.history.pushState(null, '', '/testHa');
})      