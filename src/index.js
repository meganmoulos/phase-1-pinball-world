// Globals
const url = 'http://localhost:3000/games'

// DOM selectors
const navList = document.querySelector('.game-list')
 

// Event Listeners

// Fetchers
function getAllGames(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => iterateItems(data))
}

// Render Functions
function iterateItems(data){
    data.forEach(renderGame)
}

function renderGame(game){
    const singleGame = document.createElement('h5')
    singleGame.textContent = `${game.name} (${game.manufacturer_name})`
    navList.appendChild(singleGame)
}

getAllGames(url)


