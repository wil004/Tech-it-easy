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











// console.log(totalrevenue);

    function tvType(object) {
        let brand = object.brand;
        let type = object.type;
        let name1 = object.name;
        return brand + ', ' + type + ', ' + name1
    }

    const tvType2 = tvType(inventory[2]) + ' ' + tvType(inventory[4]);

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

    let total = 0;

    inventory.forEach(item => {
        total = item.originalStock - item.sold + total;

    });


//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

    let allTvTypes = [];
    inventory.forEach(item => {
        allTvTypes.push(item.type);
    });
    // console.log(allTvTypes);

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

   const soldOut = inventory.filter((item) => {
    return item.originalStock === item.sold
})
 // console.log(soldOut)

const soldOutTelevisions = (array) => {
    let soldOutTv = 'Deze televisies zijn helaas uitverkocht: <br><br>';
    for (let i = 0; i < array.length; i++) {
        soldOutTv = soldOutTv + '-' + array[i].name + ': ' + array[i].type + '<br><br>';
    }
    return soldOutTv
}

//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.


        const ambiLight = inventory.filter(item => {
            return item.options.ambiLight;
        });


// Een functie om een uitklapbare button te maken.

        const ambiLightOption = (array) => {
            let ambiLight1 = '';
            for (let i = 0; i < array.length; i++) {
                ambiLight1 = array[i].brand + ' ' + array[i].type + array[i].name + "<br>" + '€' + array[i].price + ",- <br>"
                    + "Television has ambiLight:" + ' ' + array[i].options.ambiLight + "<br><br><br>" + ambiLight1;
            }
            return ambiLight1
        }

        console.log(ambiLightOption(ambiLight));


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

        function tvPrice(inventory) {
            let price = inventory.price;
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



       function sortFunction() {
            document.getElementById("sort").innerHTML = sorted(inventory);
        }

        function ambiLightFunction() {
            document.getElementById("ambilight").innerHTML = ambiLightOption(ambiLight);
        }

        function soldOutFunction() {
            document.getElementById("soldOut").innerHTML = soldOutTelevisions(soldOut);
        }



const revenueHtml = document.getElementById('revenue');
revenueHtml.innerHTML = revenue;

const soldValueHtml = document.getElementById('soldValue');
soldValueHtml.innerHTML = soldValue;

const printTelevisions = document.getElementById('printTelevisions');
printTelevisions.innerHTML = printTv(inventory);




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

//verandering voor pull request
