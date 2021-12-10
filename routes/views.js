const router = require("express").Router()
const path = require("path")

//view route for home
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//view route for exercises.html
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

//view route for stats.html
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router