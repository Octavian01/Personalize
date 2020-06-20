import { getContent1, getContent2 } from './getContent.js';

const accessoryContent2ItemsAndHrefLinks = ['Hats and caps', 'Beanies & Winter Hats', 'Accessory for hair', 'Headbands', 'Mini hats and fitters', 'Glasses'];

const bagAndWalletsContent2ItemsAndHrefLinks = ['Rucksacks', 'Women bags', 'Clutches and evening bags', 'Shoulder bags', 'Nappy and Diaper Bags', 'Luggage & Duffel Bags'];

const necklacesContent2ItemsAndHrefLinks = ['Pendants', 'Chockers', 'Charm Necklace', 'Chrystal Necklace', 'Monogram Name Necklaces', 'Beads'];

const ringContent2ItemsAndHrefLinks = ['Stackable Rings', 'Cocktail rings', 'Bands', 'Rings', 'Multi-stone rings', 'Single stone rings', 'Flange rings'];

const earringsContent2ItemsAndHrefLinks = ['Long earrings', 'Stud earrings', 'Earrings ring', 'Chandelier earrings', 'Cluster earrings', 'Cuff Earrings'];

const braceletsContent2ItemsAndHrefLinks = ['Bread Bracelets', 'Hard Bracelets', 'Charms Bracelets', 'Woven and fabric bracelets', 'Cuff Bracelets', 'Link Bracelets'];

const bodyJewelryContent2ItemsAndHrefLinks = ['Bracelets on legs', 'Hair ornaments', 'Nose rings and cloves', 'Jewellry on the forearm', 'Chest jewellry', 'Belly button rings', 'Foot rings'];

const principalJewelryItems = [
    {'Accessory': { id: 'accessory', value: accessoryContent2ItemsAndHrefLinks } },
    {'Bags and wallets': {id: 'bags-and-wallets', value: bagAndWalletsContent2ItemsAndHrefLinks } },
    {'Necklaces': {id: 'necklaces', value : necklacesContent2ItemsAndHrefLinks } },
    {'Rings': {id: 'rings', value: ringContent2ItemsAndHrefLinks } },
    {'Earrings': {id: 'earrings', value: earringsContent2ItemsAndHrefLinks } },
    {'Bracelets': {id: 'bracelets', value: braceletsContent2ItemsAndHrefLinks } },
    {'Body jewellry': {id: 'body-jewelry', value: bodyJewelryContent2ItemsAndHrefLinks } }
];

const getContent1fromJewelry = () => {
    let output = getContent1(principalJewelryItems);
    let output2 = getContent2(accessoryContent2ItemsAndHrefLinks);
    return `
    <div class="nav__drop-down-content-1">
        <a class="nav__drop-down-item-bold" href="/">All Jewelry & Accesories<span>&rarr;</span></a>
        <ul class="nav__drop-down-list">${output}</ul>
        <a class="nav__drop-down-item-bold" href="/">All Jewelry<span>&rarr;</span></a>
    </div>
    <ul class="nav__drop-down-content-2">${output2}</ul>`;
}

export {getContent1fromJewelry, principalJewelryItems};