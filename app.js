const grid = document.querySelector('#grid');
const cardsChosen = [];

// const cardArray = [
//     {
//         name: 'cheeseburger',
//         img: 'images/cheeseburger.png'
//     },
//     {
//         name: 'fries',
//         img: 'images/fries.png'
//     },
//     {
//         name: 'hotdog',
//         img: 'images/hotdog.png'
//     },
//     {
//         name: 'ice-cream',
//         img: 'images/ice-cream.png'
//     },
//     {
//         name: 'milkshake',
//         img: 'images/milkshake.png'
//     },
//     {
//         name: 'pizza',
//         img: 'images/pizza.png'
//     },
//         // Then copy and paste this exact set of objects again so that we have duplicates for each image in this array:
//     {
//         name: 'cheeseburger',
//         img: 'images/cheeseburger.png'
//     },
//     {
//         name: 'fries',
//         img: 'images/fries.png'
//     },
//     {
//         name: 'hotdog',
//         img: 'images/hotdog.png'
//     },
//     {
//         name: 'ice-cream',
//         img: 'images/ice-cream.png'
//     },
//     {
//         name: 'milkshake',
//         img: 'images/milkshake.png'
//     },
//     {
//         name: 'pizza',
//         img: 'images/pizza.png'
//     }
// ]

const stardewArray = [
    {
        name: 'lucky-lunch',
        img: 'images/stardew-foods/Lucky_Lunch.png'
    },
    {
        name: 'maki-roll',
        img: 'images/stardew-foods/Maki_Roll.png'
    },
    {
        name: 'pancakes',
        img: 'images/stardew-foods/Pancakes.png'
    },
    {
        name: 'poppyseed-muffin',
        img: 'images/stardew-foods/Poppyseed_Muffin.png'
    },
    {
        name: 'pumpkin-pie',
        img: 'images/stardew-foods/Pumpkin_Pie.png'
    },
    {
        name: 'survival-burger',
        img: 'images/stardew-foods/Survival_Burger.png'
    },
        // Then copy and paste this exact set of objects again so that we have duplicates for each image in this array:
    {
        name: 'lucky-lunch',
        img: 'images/stardew-foods/Lucky_Lunch.png'
    },
    {
        name: 'maki-roll',
        img: 'images/stardew-foods/Maki_Roll.png'
    },
    {
        name: 'pancakes',
        img: 'images/stardew-foods/Pancakes.png'
    },
    {
        name: 'poppyseed-muffin',
        img: 'images/stardew-foods/Poppyseed_Muffin.png'
    },
    {
        name: 'pumpkin-pie',
        img: 'images/stardew-foods/Pumpkin_Pie.png'
    },
    {
        name: 'survival-burger',
        img: 'images/stardew-foods/Survival_Burger.png'
    }
]

stardewArray.sort(() => 0.5 - Math.random())

function createBoard() {
    for (let i = 0; i < stardewArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/stardew-foods/use as blank/Stardrop.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    console.log('check for match!')
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(stardewArray[cardId].name)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', stardewArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}