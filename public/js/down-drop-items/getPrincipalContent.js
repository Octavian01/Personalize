import { getContent1fromJewelry, principalJewelryItems } from './jewelry&accessories.js';

import { getContent1fromClothing, principalClothingItems } from './clothing.js';


const getPrincipalContent = [
    { id: 'Jewellry&Accessories', className: 'nav__item-jewelry', content: getContent1fromJewelry, items: principalJewelryItems},
    { id: 'Clothing&Shoes', className: 'nav__item-clothing', content: getContent1fromClothing, items: principalClothingItems }
];

export { getPrincipalContent };