// Import Packages
const express = require('express')
const router = express.Router()

let rawData = [
    {
        title: 'Final Fantasy VII REMAKE',
        description: 'A very good action JRPG made by Square Enix',
        url: 'https://www.playstation.com/th-th/games/final-fantasy-vii-remake/',
        links: 
            [
                {
                    title: 'The original FFVII',
                    url: 'https://en.wikipedia.org/wiki/Final_Fantasy_VII'
                }, 
                {
                    title: 'Hollow Skies - Beautiful',
                    url: 'https://www.youtube.com/watch?v=ujwkwnpqwpE'
                }
            ]
    },
    {
        title: 'Wizard101',
        description: 'A MMORPG made by Kingsisle Entertainment in Austin, TX',
        url: 'https://www.wizard101.com/',
        links: 
            [
                {
                    title: 'See the game',
                    url: 'https://www.wizard101.com/game/see-the-game'
                }, 
                {
                    title: 'Recent Updates',
                    url: 'https://www.wizard101.com/game/updates'
                }
            ]
    },
    {
        title: 'Kingdom Hearts',
        description: 'My favorite video game series EVER!',
        url: 'https://www.kingdomhearts.com',
        links: 
            [
                {
                    title: 'Kingdom Hearts 2',
                    url: 'https://www.kingdomhearts.com'
                }, 
                {
                    title: 'Epic Boss Battle',
                    url: 'https://www.youtube.com/watch?v=_B-pk3C7ypk'
                }
            ]
    },
    {
        title: 'LittleBigPlanet',
        description: 'The game that influenced my interest in software development',
        url: 'https://en.wikipedia.org/wiki/LittleBigPlanet#LittleBigPlanet_2',
        links: 
            [
                {
                    title: 'Velvet--Audio music',
                    url: 'https://www.youtube.com/watch?v=9KCg_8MzpCo&list=PLAF81BC00A411FFF7'
                }, 
                {
                    title: 'Dreams',
                    url: 'https://indreams.me'
                }
            ]
    }
]
const getDatafromSearch = (srchInput, rawData) => {
// for each element in the data, split the words in the title (to turn into arr) and search if it includes the search input
  let results = (srchInput == '*') ? rawData : rawData.filter(elem => elem.title.toLowerCase().includes(srchInput.toLowerCase()))
  return results
}

// Returns 'result' or plural 'results' depending on how many results there are
const countResults = arr => {
    if (arr.length == 0 || arr.length >= 2){
        return `${arr.length} Results`
    }
    else {
        return `${arr.length} Result`
    }
}
// Create POST controller
router.post('/', (req, res) => {
    res.render('results', {data: getDatafromSearch(req.body.search, rawData), 
        resultCount: countResults(getDatafromSearch(req.body.search, rawData))})
})

router.get('/', (req, res) => {
    res.render('results')
})
// Export module
module.exports = router