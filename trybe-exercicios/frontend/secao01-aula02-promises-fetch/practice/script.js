const button = document.querySelector('.button')
const name = document.querySelector('.heroName')
const myHeroCard = document.querySelector('.hero-card')

const URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id'

const MAX = 1000;
const randomId = () => Math.floor(Math.random() * MAX)


button.addEventListener('click', () => {
    const myId = randomId()
    console.log(`${URL}/${myId}.json`)
    const getHero = fetch(`${URL}/${myId}.json`)
        .then((response) => response.json())
        .then((data) => {
            const myImg = document.createElement('img')
            const heroName = document.createElement('h1')
            myImg.src = data.images.lg
            heroName.innerHTML = data.name
            myHeroCard.appendChild(myImg)
            myHeroCard.appendChild(heroName)
        })
})