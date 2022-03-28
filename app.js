const grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const modal = document.querySelector('#modal');
const modalClose = document.querySelectorAll('close-modal');
let alertMessage = document.querySelector('#alert-message');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

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

// Show modal, focus on input:
function showModal(message) {
    modal.classList.add('show-modal');
    alertMessage.innerHTML = message
}

function closeModal() {
    modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
    window.addEventListener('click', (event) => (event.target === modal ? modal.classList.remove('show-modal') : false));
}

function createBoard() {
    for (let i = 0; i < stardewArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/stardew-foods/use as blank/Stardrop.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkMatch() {
    // console.log('check for match!')
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        showModal("You have clicked the same image twice!")
        cards[optionOneId].setAttribute('src', 'images/stardew-foods/use as blank/Stardrop.png')
        cards[optionTwoId].setAttribute('src', 'images/stardew-foods/use as blank/Stardrop.png')
    } else if (cardsChosen[0] === cardsChosen[1]) {
        showModal("It's a match!")
        cards[optionOneId].setAttribute('id', 'matched-success')
        cards[optionTwoId].setAttribute('id', 'matched-success')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        showModal("Sorry, no match.")
        cards[optionOneId].setAttribute('src', 'images/stardew-foods/use as blank/Stardrop.png')
        cards[optionTwoId].setAttribute('src', 'images/stardew-foods/use as blank/Stardrop.png')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === stardewArray.length/2) {
        resultDisplay.textContent = "Congratulations! You've found all of the matching cards."
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(stardewArray[cardId].name)
    cardsChosenIds.push(cardId)
    // console.log('clicked', cardId)
    // console.log("cardsChosen: ", cardsChosen)
    this.setAttribute('src', stardewArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

createBoard()
closeModal()