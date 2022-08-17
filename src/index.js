// Globals
const url = 'http://localhost:3000/games'
let selectedGame

// DOM selectors
const navList = document.querySelector('.game-list')
const gameImage = document.querySelector('#detail-image')
const gameTitle = document.querySelector('#detail-title')
const highScore = document.querySelector('#detail-high-score')
const form = document.querySelector('#high-score-form')
const scoreInput = document.querySelector('#score-input')


// Event Listeners
form.addEventListener('submit', addHighScore)

// Fetchers
function getAllGames(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        renderGameInfo(data[0])
        iterateItems(data)
    })
}

// Render Functions
function iterateItems(data){
    data.forEach(renderGame)
}

function renderGame(game){
    const singleGame = document.createElement('h5')
    singleGame.textContent = `${game.name} (${game.manufacturer_name})`
    navList.appendChild(singleGame)
    singleGame.addEventListener('click', () => renderGameInfo(game))
}

function renderGameInfo(game){
    selectedGame = game
    gameImage.src = game.image
    gameTitle.textContent = game.name
    highScore.textContent = game.high_score
}

function addHighScore(e){
    e.preventDefault()
    const newScore = Number(scoreInput.value)
    let updateNumber = selectedGame.high_score += newScore
    highScore.textContent = updateNumber
    renderGameInfo(selectedGame)
    form.reset()
}

getAllGames(url)
