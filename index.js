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




let allTvTypes = [];
inventory.forEach(item => {
    allTvTypes.push(item.type);
});

const allTvTypes1 = inventory.map(item => {
    return item.type
})


let total = 0;

inventory.forEach(item => {
    total = item.originalStock - item.sold + total;

});


// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

const tvTypeNames = inventory.map((item) => {
    return item.name + ': ' + item.type })



// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// Log de uitkomst in de console.

const tvSoldOut = inventory.filter((item) => {
    return item.originalStock === item.sold;})


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die over AmbiLight beschikken. Log de uitkomst in de console.

    const ambiLight = inventory.filter(item => {
    return item.options.ambiLight;});


// Een functie om een uitklapbare button te maken voor html.

    const ambiLightOption = (array) => {
    let ambiLight1 = '';
    for (let i = 0; i < array.length; i++) {
        ambiLight1 = array[i].brand + ' ' + array[i].type + array[i].name + "<br>" + '€' + array[i].price + ",- <br>"
            + "Television has ambiLight:" + ' ' + array[i].options.ambiLight + "<br><br><br>" + ambiLight1;
    }
    return ambiLight1
}

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.

const sorteer = inventory.sort(item = (a, b) => {
    return a.price - b.price } );

    console.log(sorteer)


// console.log(ambiLightOption(ambiLight));

// Opdracht 2a: Hoeveel tv's zijn er al verkocht?
// Schrijf een script dat dit berekent. Log de uitkomst in de console.





//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

const soldOut = inventory.filter((item) => {
    return item.originalStock === item.sold
})


const soldOutTelevisions = (array) => {
    let soldOutTv = 'Deze televisies zijn helaas uitverkocht: <br><br>';
    for (let i = 0; i < array.length; i++) {
        soldOutTv = soldOutTv + '-' + array[i].name + ': ' + array[i].type + '<br><br>';
    }
    return soldOutTv
}


//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.




//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

let sorteer1 = (a, b) => {
    return a.price - b.price;
}

// Een functie om een uitklapbare button te maken.

const sorted = (array) => {
    inventory.sort(sorteer1);
    let sortedInventory = '';
    for (let i = 0; i < array.length; i++) {
        sortedInventory = array[i].brand + ' ' + array[i].type + array[i].name + "<br>" + '€' + array[i].price + ",- <br><br>"
            + sortedInventory;
    }
    return sortedInventory;
};


//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder
// type zouden verkopen. Geef dit in het blauw weer op de pagina.

function priceStock(inventory = []) {
    let totalRevenue = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalRevenue = (inventory[i].originalStock - inventory[i].sold) * inventory[i].price + totalRevenue;
    }
    return totalRevenue
}

let revenue = priceStock(inventory);


//Opdracht 6b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient
// hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

let soldValue = 0;

inventory.forEach(item => {
    soldValue = (item.sold * item.price) + soldValue;
});

//Opdracht 4
//Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn,
// maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer
// moet uitschrijven, dat is niet erg!

function TypeTwo(array) {
    let type = array.type;
    return type
}

const TypeTwo2 = TypeTwo(inventory[2]) + (TypeTwo(inventory[4]));


//Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één tv-object als parameter verwacht en de naam op de volgende
// manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI
// NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen
// gebruiken.

function tvType(object) {
    let brand = object.brand;
    let type = object.type;
    let name1 = object.name;
    return brand + ': ' + type + ': ' + name1
}

const tvType1 = tvType(inventory[2]) + (tvType(inventory[4]));


//Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en
// daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie
// voor iedere tv zou kunnen gebruiken.

function tvPrice(priceNumber) {
    let price = '€' + priceNumber + ",-";
    return price
}

// console.log(tvPrice(inventory[2].price))


//Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare
// schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes
// array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte]
// inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)
// etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58]
// geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze
// functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte
// als met tientallen schermgroottes.


let availableSizes = (inventory, index) => {
    let allSizes = []
    let sizesPerObject = []
    for (let i = 0; i < inventory.length; i++) {
        for (let j = 0; j < inventory[i].availableSizes.length; j++) {
            sizesPerObject.push((inventory[i].availableSizes[j]) + ' inch ' +
                '(' + (inventory[i].availableSizes[j] * 2.54) + ' cm)');
            if (j === inventory[i].availableSizes.length - 1) {
                allSizes.push(sizesPerObject);
                sizesPerObject = [];
            }
        }
    }
    if (index || index === 0) {
        return allSizes[index]
    } else {
        return allSizes
    }
}


/* The array parameter most be declared with the 'inventory' array of existing out of objects.
 the index parameter is optional! In this parameter you declare the index of the array to get a specified product!
 */
const printTv = (array, index) => {
    //empty array to put our product details in!
    let tvSets = [];
    //change the value of the before declared arrays with the help of 2 loops!

    for (let i = 0; i < array.length; i++) {
        tvSets[i] = array[i].brand + ' ' + array[i].type + array[i].name + "<br>" + '€' + array[i].price + ",- <br><br>";

    }
    //if there is an index number declared we return the specified array with the if statement below.

    if (index || index === 0) {
        return tvSets[index]
    }
    // if not we return everything in stock.
    else {

        return tvSets.join(' ')

    }
}
