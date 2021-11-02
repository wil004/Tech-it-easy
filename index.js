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



// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.

const sorteerTv = (array) => {
    array.sort(item = (a, b) => {
        return a.price - b.price
    });
    return array
}
   // console.log(sorteerTv(inventory))



// Opdracht 2a: Hoeveel tv's zijn er al verkocht?
// Schrijf een script dat dit berekent. Log de uitkomst in de console.

const totalTvSold = (array) => {
        let sold = 0;
        array.forEach(item =>
        sold += item.sold);
        return sold
}
// console.log(totalTvSold(inventory))



// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// Onderaan de pagina.

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht?
// Schrijf een script dat dit berekent. Log de uitkomst in de console.

const boughtTv = (array) => {
        let totalBought = 0;
        array.forEach(item =>
        totalBought += item.sold + item.originalStock)
    return totalBought
}

// console.log(boughtTv(inventory))

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// Onderaan de pagina

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
// Onderaan de pagina


// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
//    Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
//    Dat er dubbele namen in zitten, is niet erg.
const tvBrands = (array) => {
        let brandNames = ''
        array.forEach(item => brandNames = brandNames + '| ' + item.brand )
    return brandNames
}
// console.log(tvBrands(inventory))

// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
//Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

// Had al een functie die tv-objecten verwacht aangemaakt bij 3A

// Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6])
// verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals P
// hilips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

const tvName = (array) => {
        return array.brand + ' ' + array.type + ' ' + array.name
}
// console.log(tvName(inventory[1]))

// Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-.
// Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

const priceFormat = (array) => {
        return '€' + array.price + ',-'
}

// console.log(priceFormat(inventory[2]))

// Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel inches als cm.
// Doe dit door een functie te schrijven die één screen-sizes array verwacht
// ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches
// ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft
// ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Test of jouw functie werkt in alle mogelijke gevallen.

const screenSizes = (array) => {
    let screenSizes = ''
    for(let i = 0; i < array.length; i++) {
            screenSizes = screenSizes + array[i]  +  ' inch ' + '(' + Math.round(array[i] * 2.54) + ' cm)'
        if (i < array.length - 1) {
            screenSizes = screenSizes + ' | '
        }
        }
       return screenSizes
}

// Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het
// voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
const televisionStats = (array) => {
    console.log(tvName(array));
    console.log(priceFormat(array))
    return screenSizes(array.availableSizes)
}

console.log(televisionStats(inventory[4]))

const allTelevisionStats = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(tvName(array[i]));
        console.log(priceFormat(array[i]))
        console.log(screenSizes(array[i].availableSizes))
    }
    return 'The store currently has ' + array.length + ' different types of televisions!'
}

console.log(allTelevisionStats(inventory))







// BONUS OPDRACHT De opdrachten 2b 2d en 2e zitten ook verwerkt in deze opdracht!


// uitverkochte televisies!
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

// Een functie om een uitklapbare button te maken.

let sorteer1 = (a, b) => {
    return a.price - b.price;
}
const sorted = (array) => {
    inventory.sort(sorteer1);
    let sortedInventory = '';
    for (let i = 0; i < array.length; i++) {
        sortedInventory = array[i].brand + ' ' + array[i].type + array[i].name + "<br>" + '€' + array[i].price + ",- <br><br>"
            + sortedInventory;
    }
    return sortedInventory;
};

// Een functie om een uitklapbare button te maken voor html.

const ambiLightOption = (array) => {
    let ambiLight1 = '';
    for (let i = 0; i < array.length; i++) {
        ambiLight1 = array[i].brand + ' ' + array[i].type + array[i].name + "<br>" + '€' + array[i].price + ",- <br>"
            + "Television has ambiLight:" + ' ' + array[i].options.ambiLight + "<br><br><br>" + ambiLight1;
    }
    return ambiLight1
}









/* zelfgemaakte functie die eigenlijk hetzelfde doet als bij opdracht 4c.
Het enige verschil is dat de index parameter hier optioneel is en je er ook voor kan kiezen
de hele array availableSizes(inventory) in de parameter kan stoppen waardoor direct alle maten worden omgezet.
 */

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


/*Zoals ik hieronder in het engels beschreven heb ook bij deze functie is de index parameter optioneel
je kunt ervoor kiezen 1 object aan te roepen printTv(array, 2)
Of je kunt ervoor kiezen een hele array met bijv 200 objecten aan te roepen printTv(inventory).
 */

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

//bonusOpdrachten
function sortFunction() {
    document.getElementById("sort").innerHTML = sorted(inventory);
}

function ambiLightFunction() {
    document.getElementById("ambilight").innerHTML = ambiLightOption(ambiLight);
}

function soldOutFunction() {
    document.getElementById("soldOut").innerHTML = soldOutTelevisions(soldOut);
}
//einde bonusopdrachten

//2b c en e

const tvSold = totalTvSold(inventory)

const tvSoldHtml = document.getElementById('tvSold');
tvSoldHtml.innerHTML = tvSold;

const tvBuyIn = boughtTv(inventory)

const boughtTvsHtml = document.getElementById('tvBuyIn');
boughtTvsHtml.innerHTML = tvBuyIn;

const tvStock = (array) => {
    let totalStock = 0;
    array.forEach(item =>
    totalStock += (item.originalStock - item.sold))
    return totalStock;
}

const totalTvStock = document.getElementById('tvStock');
totalTvStock.innerHTML = tvStock(inventory)


const printTelevisions = document.getElementById('printTelevisions');
printTelevisions.innerHTML = printTv(inventory);
// einde opdrachten 2b c en e


//Hieronder zie je zelfstudie voor prestatieverbetering!

// 0

const printTvHtml0 = document.getElementById("tvType0");
printTvHtml0.innerHTML = printTv(inventory, 0)

const chooseSize0 = availableSizes(inventory, 0);
const chooseSizeHtml0 = document.getElementById('tvSizeSelect0')
for(let i = 0; i < chooseSize0.length; i++){
    chooseSizeHtml0.options.add(new Option(chooseSize0[i])); }


//1

const printTvHtml1 = document.getElementById("tvType1");
printTvHtml1.innerHTML = printTv(inventory, 1)

const chooseSize1 = availableSizes(inventory, 1);
const chooseSizeHtml1 = document.getElementById('tvSizeSelect1')
for(let i = 0; i < chooseSize1.length; i++){
    chooseSizeHtml1.options.add(new Option(chooseSize1[i])); }


// 2

const printTvHtml2 = document.getElementById("tvType2");
printTvHtml2.innerHTML = printTv(inventory, 2)

const chooseSize2 = availableSizes(inventory, 2);
const chooseSizeHtml2 = document.getElementById('tvSizeSelect2')
for(let i = 0; i < chooseSize2.length; i++){
    chooseSizeHtml2.options.add(new Option(chooseSize2[i])); }

// 3

const printTvHtml3 = document.getElementById("tvType3");
printTvHtml3.innerHTML = printTv(inventory, 3)

const chooseSize3 = availableSizes(inventory, 3);
const chooseSizeHtml3 = document.getElementById('tvSizeSelect3')
for(let i = 0; i < chooseSize3.length; i++){
    chooseSizeHtml3.options.add(new Option(chooseSize3[i])); }

//4
const printTvHtml4 = document.getElementById("tvType4");
printTvHtml4.innerHTML = printTv(inventory, 4)

const chooseSize4 = availableSizes(inventory, 4);
const chooseSizeHtml4 = document.getElementById('tvSizeSelect4')
for(let i = 0; i < chooseSize4.length; i++){
    chooseSizeHtml4.options.add(new Option(chooseSize4[i])); }

//5
const printTvHtml5 = document.getElementById("tvType5");
printTvHtml5.innerHTML = printTv(inventory, 5)

const chooseSize5 = availableSizes(inventory, 5);
const chooseSizeHtml5 = document.getElementById('tvSizeSelect5')
for(let i = 0; i < chooseSize5.length; i++){
    chooseSizeHtml5.options.add(new Option(chooseSize5[i])); }

//6
const printTvHtml6 = document.getElementById("tvType6");
printTvHtml6.innerHTML = printTv(inventory, 6)

const chooseSize6 = availableSizes(inventory, 6);
const chooseSizeHtml6 = document.getElementById('tvSizeSelect6')
for(let i = 0; i < chooseSize6.length; i++){
    chooseSizeHtml6.options.add(new Option(chooseSize6[i])); }

//6
const printTvHtml7 = document.getElementById("tvType7");
printTvHtml7.innerHTML = printTv(inventory, 7)

const chooseSize7 = availableSizes(inventory, 7);
const chooseSizeHtml7 = document.getElementById('tvSizeSelect7')
for(let i = 0; i < chooseSize7.length; i++){
    chooseSizeHtml7.options.add(new Option(chooseSize7[i])); }
