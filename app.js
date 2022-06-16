const express = require('express')
const app = express()
const PORT = 3000
const expressLayouts = require('express-ejs-layouts')
const index_router = require('./routes/index')
const tea_router = require('./routes/tea')

app.use(express.static('assets'))
app.use(expressLayouts)
app.use("/", index_router)
app.use("/tea", tea_router)
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render("index", {"title":"Swallotail Tea"})
})

app.get('/tea', (req, res) => {
    res.render("tea", {"title":"Tea"})
})



app.listen(PORT, () => {
    console.log(`app listing on port ${PORT}`)
})