// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')

// const getDatafromSearch = (srchInput, rawData) => {
// // for each element in the data, split the words in the title (to turn into arr) and search if it includes the search input
//   let results = (srchInput == '*') ? rawData : rawData.filter(elem => elem.title.toLowerCase().includes(srchInput.toLowerCase()))
//   return results
// }

// Returns 'result' or plural 'results' depending on how many results there are
// const countResults = arr => {
//     if (arr.length == 0 || arr.length >= 2){
//         return `${arr.length} Results`
//     }
//     else {
//         return `${arr.length} Result`
//     }
// }
// Create POST controller
router.post('/', async (req, res) => {
    let data = await Results.find({
        title: {$regex: req.body.search, $options: 'i'}
    })

    res.render('results', {data: data})
    // res.render('results', {data: getDatafromSearch(req.body.search, rawData), 
    //     resultCount: countResults(getDatafromSearch(req.body.search, rawData))})
})

router.get('/', (req, res) => {
    res.render('results')
})
// Export module
module.exports = router