const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },

{
    type: '50PUS7304/12',
        name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
    wifi: true,
        speech: true,
        hdr: true,
        bluetooth: true,
        ambiLight: true,
},
    originalStock: 8,
        sold: 3,
},
{
    type: '55PUS7805',
        name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
    wifi: true,
        speech: false,
        hdr: true,
        bluetooth: false,
        ambiLight: true,
},
    originalStock: 6,
        sold: 3,
},
{
    type: 'B2450HD',
        name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
    wifi: false,
        speech: false,
        hdr: false,
        bluetooth: false,
        ambiLight: false,
},
    originalStock: 10,
        sold: 8,
},
{
    type: '32WL1A63DG',
        name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
    wifi: false,
        speech: false,
        hdr: true,
        bluetooth: false,
        ambiLight: false,
},
    originalStock: 10,
        sold: 8,
},
];

function priceStock (inventory = []) {
    let totalRevenue = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalRevenue = (inventory[i].originalStock - inventory[i].sold) * inventory[i].price + totalRevenue;
    }
    return totalRevenue
}

let revenue = priceStock(inventory);
// console.log(revenue);

let totalrevenue = 0;
inventory.forEach(item => {
    totalrevenue += (item.originalStock - item.sold) * item.price;
});
// console.log(totalrevenue);

function tvType (object) {
    let brand = object.brand;
    let type = object.type;
    let name1 = object.name;
    return brand + ', ' + type + ', ' + name1
}

const tvType2 = tvType(inventory[2]) + ' ' + tvType(inventory[4]);

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

let total = 0;

inventory.forEach(item => {
    total += item.originalStock - item.sold;

});



document.body.innerHTML = '<h1>Working with html</h1>';

const container = document.getElementById("page");

container.addEventListener('click', total);


//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

let array = [];
inventory.forEach(item => { array.push(item.type);});
// console.log(array)

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

let array2 = [];inventory.forEach(item => {if ((item.originalStock - item.sold) === 0) {
    array2.push(item.type);}});
// console.log(array2)

//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.

let ambi = [];
inventory.forEach(Object => {
    if ((Object.options.ambiLight) === true) {
    ambi.push(Object);
    } });
// console.log(ambi);

//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

let sorteer1 = (a, b) => {
    return a.price - b.price; };
inventory.sort(sorteer1);

// console.log(inventory);

//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder
// type zouden verkopen. Geef dit in het blauw weer op de pagina.

let Totalrevenue = 0;

inventory.forEach(item => {
    Totalrevenue += (item.originalStock - item.sold) * item.price;
});

// console.log(Totalrevenue);

//Opdracht 6b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient
// hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

let SoldTV = 0;

inventory.forEach(item => {
    SoldTV += item.sold * item.price;
});

// console.log(SoldTV);

//Opdracht 4
//Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn,
// maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer
// moet uitschrijven, dat is niet erg!

function TypeTwo (object) {
    let type = object.type;
    return type
}

const TypeTwo2 = TypeTwo(inventory[2] ) + (TypeTwo(inventory[4] ));

//Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één tv-object als parameter verwacht en de naam op de volgende
// manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI
// NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen
// gebruiken.

function tvType (object) {
    let brand = object.brand;
    let type = object.type;
    let name1 = object.name;
    return brand + ': ' + type + ': ' + name1
}

const tvType1 = tvType(inventory[2] ) + (tvType(inventory[4] ));

//Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en
// daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie
// voor iedere tv zou kunnen gebruiken.

function tvPrice (object) {
    let price = object.price;
    return price
}
let tvPrice1 = ('€') + tvPrice(inventory[3]) + (",-");

//Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare
// schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes
// array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte]
// inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)
// etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58]
// geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze
// functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte
// als met tientallen schermgroottes.