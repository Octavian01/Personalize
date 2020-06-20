const getContent1 = principalItems => {
    let output = '';
    for (let i = 0; i < principalItems.length; i++) {
        if (i === 0) {
            output += `<li class="nav__drop-down-item nav__drop-down-item-active" id="${Object.values(principalItems[i])[0].id}">${Object.keys(principalItems[i])[0]}<span class="nav__drop-down-arrow">&rArr;</span></li>`;
        } else {
            output += `<li class="nav__drop-down-item" id="${Object.values(principalItems[i])[0].id}">${Object.keys(principalItems[i])[0]}<span class="nav__drop-down-arrow">&rArr;</span></li>`;
        }
    }
    return output;
}

const getContent2 = itemsHrefAndLinks => {
    let output2 = '';
    itemsHrefAndLinks.forEach(el => {
        output2 += `<li class="nav__drop-down-content-2-item"><a href="/${el}">${el}</a></li>`;
    })
    return output2;
}

export {getContent1, getContent2};