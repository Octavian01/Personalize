import { getContent1, getContent2 } from './getContent.js';

const womenContent2ItemsAndHrefLink = ["Women's clothing", 'Dresses', 'Blouses and T-shirts', 'Skirts', 'Jackets', 'Pants and Capri', 'Sweaters', 'Swimwear'];

const menContetn2ItemsAndHrefLinks = ["Men's clothing", 'T-shirts', 'Sweaters', 'Jackets', "Men's shoes", "Boots"];

const kids_babyContent2ItemsAndHrefLink = ["Clothes for little girls", "Clothes for girls", 'Dresses', 'Skirts', 'T-shirts', 'Jackets', 'Sweaters', 'Baby clothes', 'Clothes for boys'];

const bags_walletsContent2ItemsAndHrefLink = ["Rucksacks", "Women's bags", "Clutches and evening bags", "Shoulder bags", "Nappy and Diaper Bags", "Luggage & Duffel Bags", "Phone Cases"];

const principalClothingItems = [
    { "Women's": {id: 'women', value: womenContent2ItemsAndHrefLink } },
    { "Men's": {id: 'men', value: menContetn2ItemsAndHrefLinks } },
    { "Kids' & Baby": {id: 'kids-baby', value: kids_babyContent2ItemsAndHrefLink } },
    { "Bags & Wallets": {id: 'bags-wallets', value: bags_walletsContent2ItemsAndHrefLink } }
];

const getContent1fromClothing = () => {
    let output = getContent1(principalClothingItems);
    let output2 = getContent2(womenContent2ItemsAndHrefLink);
    return `
    <div class="nav__drop-down-content-1">
        <a class="nav__drop-down-item-bold" href="/">All Clothing & Shoes<span>&rarr;</span></a>
        <ul class="nav__drop-down-list">${output}</ul>
    </div>
    <ul class="nav__drop-down-content-2">${output2}</ul>`;
}


export {getContent1fromClothing, principalClothingItems};